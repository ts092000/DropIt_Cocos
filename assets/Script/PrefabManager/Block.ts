import { _decorator, Animation, Component, Node, Sprite, SpriteFrame, tween, UITransform, Vec2, Vec3 } from 'cc';
import Contants from '../Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('Block')
export class Block extends Component {
    private indexRow: number = 0;
    private indexCol: number = 0;
    private length: number = 0;

    @property(Sprite)
    private spriteBlock: Sprite;

    public setSpriteFrame(spriteFrame: SpriteFrame): void {
        this.spriteBlock.spriteFrame = spriteFrame;
    }

    public setLength(length: number) {
        let uiTransfrom = this.spriteBlock.getComponent(UITransform);
        uiTransfrom.setContentSize(37 * length, 37);

        let blockUiTransform = this.node.getComponent(UITransform);
        blockUiTransform.setContentSize(37 * length, 37);
        this.length = length;
    }

    public getLength(): number {
        return this.length;
    }

    public fallTo(destination: Vec3, time: number): void {
        tween(this.node).to(time, { position: destination }, { easing: 'smooth' }).start();
    }

    public setIndex(row: number, col: number, time?: number): void {
        this.indexRow = row;
        this.indexCol = col;
        if (!time) time = 0.15;

        let position = new Vec3(this.indexCol * Contants.SQUARE_SIZE.WIDTH, this.indexRow * Contants.SQUARE_SIZE.HEIGHT, 0);
        if (this.indexRow === -1) {
            this.node.setPosition(position);
        } else {
            this.fallTo(position, time);
        }
    }

    public getIndex(): { row: number, col: number } {
        return { row: this.indexRow, col: this.indexCol };
    }

    public resetBlock(): void {
        this.indexRow = 0;
        this.indexCol = 0;
        this.length = 0;
    }

    public playAnimation(): void {
        this.node.getComponent(Animation).play();
    }
}

