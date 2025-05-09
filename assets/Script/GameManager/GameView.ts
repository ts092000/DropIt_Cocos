import { _decorator, Animation, Button, Camera, Component, director, EventTouch, instantiate, Label, math, Node, Prefab, randomRangeInt, SpriteFrame, UITransform, Vec2, Vec3 } from 'cc';
import Static from '../Utils/Constants';
import { Block } from '../PrefabManager/Block';
import Contants from '../Utils/Constants';
import { PoolManager } from './PoolManager';
import { Progress } from '../Progress';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property({
        type: SpriteFrame,
        tooltip: "List sprite frame",
    })
    private listSpriteFrame: SpriteFrame[] = [];

    @property({
        type: Node,
        tooltip: "Node parent"
    })
    private blockContainer: Node;

    @property({
        type: Node,
        tooltip: 'Select block shadow'
    })
    private selectShadow: Node;

    @property({
        type: Camera,
        tooltip: 'Camera screen game'
    })
    private cameraGame: Camera;

    @property({
        type: PoolManager,
        tooltip: 'Pool manager node'
    })
    private poolManager: PoolManager;

    @property({
        type: Node,
        tooltip: 'Game over node'
    })
    private gameOverNode: Node;

    @property({
        type: Node,
        tooltip: 'Pause node'
    })
    private pauseNode: Node;

    @property({
        type: Progress,
        tooltip: 'Progress controller'
    })
    private progerss: Progress;


    @property(Node)
    private mainNode: Node;

    public playAnimationScore(text: string): void {
        let el = this.poolManager.getAnimationCombo();
        this.mainNode.addChild(el);
        el.getComponent(Label).string = text;
        console.log(el.getComponent(Label).string);

        el.getComponent(Animation).play();
    }

    /**
     * Random config array
     * @returns Array result
     */
    private generateArray(): Array<number> {
        let dataArray = [4, 4, 3, 3, 2, 2, 2, 1, 1, 1];
        this.shuffleArray(dataArray);

        const minLength = 6;
        const maxLength = 7;
        let resultArray: number[] = [];
        let i = 0, sum = 0;

        while (i < dataArray.length && sum < minLength) {
            if (sum + dataArray[i] <= maxLength) {
                resultArray.push(dataArray[i]);
                sum += dataArray[i];
            }
            i++;
        }

        let space = Contants.BOARD_SIZE.COL - sum;
        for (let i = 0; i < space; i++) {
            let randomIndex = Math.floor(Math.random() * (resultArray.length + 1));
            resultArray.splice(randomIndex, 0, 0);
        }
        return resultArray;
    }
    /**
     * @param array Array is need shuffle
     */
    private shuffleArray(array: Array<number>): void {
        let index = array.length;
        while (index > 0) {
            let randomIndex = Math.floor(Math.random() * index);
            index--;

            let temp = array[index];
            array[index] = array[randomIndex];
            array[randomIndex] = temp;
        }
    }

    public generateRowBlock(): Node[] {
        let resultArray = this.generateArray();
        let nextPosX: number = 0;
        let listBlock: Node[] = [];

        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i] === 0) {
                nextPosX++;
                continue;
            }
            let randomColor = math.randomRangeInt(0, 4);
            let indexSpriteFrame = randomColor * 4 + resultArray[i] - 1;

            let block = this.poolManager.getBlock();
            let compBlock = block.getComponent(Block);

            compBlock.setIndex(-1, nextPosX);
            compBlock.setSpriteFrame(this.listSpriteFrame[indexSpriteFrame]);
            compBlock.getComponent(Block).setLength(resultArray[i]);

            nextPosX += resultArray[i];
            listBlock.push(block);
        }
        return listBlock;
    }

    public addRowBlock(listBlock: Node[]): void {
        listBlock.map((block) => this.blockContainer.addChild(block));
    }

    /**
     * @param event Event touch
     * @param node Node to inverse
     * @returns Local position of point in container node
     */
    public getLocation(event: EventTouch): Vec3 {
        let location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
        let v3: Vec3 = new Vec3();
        this.blockContainer.inverseTransformPoint(v3, new Vec3(location.x, location.y));
        return v3;
    }

    public showShadow(col: number, length: number): void {
        this.selectShadow.active = true;
        this.selectShadow.setPosition(col * Contants.SQUARE_SIZE.HEIGHT, 0);

        let uiTransfrom = this.selectShadow.getComponent(UITransform);
        uiTransfrom.width = length * Contants.SQUARE_SIZE.WIDTH;
    }

    public hiddenShadow(): void {
        this.selectShadow.active = false;
    }

    public setPosShadow(col: number): void {
        this.selectShadow.setPosition(col * Contants.SQUARE_SIZE.HEIGHT, 0);
    }

    public removeBlock(block: Node): void {
        this.poolManager.removeBlock(block);
    }

    public showClearNode(position: Vec3): void {
        let clearNode = this.poolManager.getClearNode();
        clearNode.active = true;
        clearNode.setPosition(position);
        this.blockContainer.addChild(clearNode);

        let animation = clearNode.getComponent(Animation);
        animation.play();
        animation.on(Animation.EventType.FINISHED, () => this.poolManager.putClearNode(clearNode));
    }

    public showResult(): void {
        this.gameOverNode.active = true;
        this.gameOverNode.getComponent(Animation).play();
    }

    public switchPause(): boolean {
        this.pauseNode.active = !this.pauseNode.active;
        return this.pauseNode.active;
    }

    public showLoading(): void {
        this.progerss.showNode();
    }

    public hiddenLoading(): void {
        this.progerss.hideNode();
    }

    public setValueLoading(title: string, value: number): void {
        this.progerss.toValue(title, value);
    }
}

