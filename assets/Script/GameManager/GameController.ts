import { _decorator, Button, Camera, Component, director, EventTouch, Input, input, log, Node, Vec2, Vec3 } from 'cc';
import { GameView } from './GameView';
import { Block } from '../PrefabManager/Block';
import Constants from '../Utils/Constants';
import { AudioType, Limit } from '../Utils/DataTypes';
import { MatrixManager } from './MatrixManager';
import { ScoreManager } from './ScoreManager';
import { AudioController } from '../AudioController';
import { GameCenterController } from '../GameCenter/GameCenterController';
import { LeaderboardHandle } from '../../Leaderboard/Script/LeaderboardHandle';

const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({
        type: GameView,
        tooltip: 'Game view node'
    })
    private gameView: GameView;

    @property({
        type: Node,
        tooltip: 'Block container'
    })
    private blockContainer: Node;

    @property({
        type: MatrixManager,
        tooltip: 'Matrix manager node'
    })
    private matrixManager: MatrixManager;

    @property({
        type: ScoreManager,
        tooltip: 'Score manager'
    })
    private scoreManager: ScoreManager;

    @property({
        type: AudioController,
        tooltip: 'Audio controller'
    })
    private audioController: AudioController;
    @property({
        type: Button,
        tooltip: 'Button pause'
    })
    private buttonPause: Button;

    @property({
        type: Button,
        tooltip: 'List button home'
    })
    private listButtonHome: Button[] = [];

    @property({
        type: Button,
        tooltip: 'List button restart'
    })
    private listButtonRestart: Button[] = [];

    @property({
        type: Button,
        tooltip: 'Button resume'
    })
    private buttonResume: Button;

    @property({
        type: GameCenterController,
        tooltip: 'Game center controller'
    })
    private gameCenter: GameCenterController;

    @property({
        type: LeaderboardHandle
    })
    private lbHandle: LeaderboardHandle;


    private listBlock: Array<Node> = new Array();
    private startMouseLocation: Vec3;
    private isPause: boolean = false;

    private currentBlock: Node;
    private currentPosition: Vec3;
    private currentLimitPosition: Limit = Constants.DEFAULT_LIMIT_POSITION;
    private currentIndexCol: number = 0;
    private isGameOver: boolean = false;
    private interval: number;
    private time: number = 0;
    private countScore: number = 0;
    private combo: number = 1;
    private comboRatio = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    private inteLog: number = 0;

    protected start(): void {
        this.gameView.showLoading();
        this.gameView.setValueLoading('Connecting to SA World...', 0.7);
        // this.interval = setInterval(() => this.time++, 1000);
        this.gameView.setValueLoading('Connected successfully!', 1);
        setTimeout(() => {
            this.gameView.hiddenLoading();
            this.initGame();
        }, 700);
        // this.gameCenter.startMatch(() => {
        // })

        // this.gameView.hiddenLoading();
        // this.initGame();
    }

    private initGame(): void {
        this.generateRowBlock();
        this.generateRowBlock();
        this.generateRowBlock();

        this.blockContainer.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        this.getNextIndexRows();
        this.addEventButton();
    }

    private addEventButton(): void {
        this.buttonPause.node.on(Button.EventType.CLICK, () => {
            if (this.isPause) return;
            this.isPause = this.gameView.switchPause();
        });

        this.listButtonHome.map((button) => button.node.on(Button.EventType.CLICK, () => director.loadScene(Constants.SCENE_NAME.BEGIN)));
        this.listButtonRestart.map((button) => button.node.on(Button.EventType.CLICK, () => director.loadScene(Constants.SCENE_NAME.GAME)));
        this.buttonResume.node.on(Button.EventType.CLICK, () => {
            this.isPause = false;
            this.gameView.switchPause();
        })
    }

    private generateRowBlock(): void {
        this.isPause = true;
        this.listBlock = this.getListBlock();
        this.audioController.playAudio(AudioType.Push);

        //Move blocks
        this.listBlock.map((block) => {
            let compBlock = block.getComponent(Block);
            let index = compBlock?.getIndex();
            compBlock?.setIndex(index.row + 1, index.col);
        })

        let row: Array<number> = new Array(8);
        let rowBlock = this.gameView.generateRowBlock();
        row.fill(0, 0, row.length);

        //Set new blocks
        rowBlock.map((block) => {
            let compBlock = block.getComponent(Block);
            let index = compBlock.getIndex();
            let length = compBlock.getLength();
            row.fill(1, index.col, index.col + length);
            this.addEventBlock(block);
        })

        //Add blocks
        this.matrixManager.pushArray(row);
        this.gameView.addRowBlock(rowBlock);

        if (this.matrixManager.isMaxRow()) this.gameOver();


        setTimeout(() => {
            this.getNextIndexRows();
        }, 200);
    }

    private gameOver(): void {
        //clearInterval(this.inteLog);
        // this.gameCenter.matchLog({ score: this.scoreManager.getScore() });
        // this.gameCenter.completeMatch(() => {
        //     this.lbHandle.show();
        // }, { score: this.scoreManager.getScore() });
        this.isPause = true;
        this.isGameOver = true;
        this.audioController.playAudio(AudioType.GameOver);
        this.scoreManager.setLabelGameOver();
        this.gameView.showResult();
    }

    private addEventBlock(block: Node): void {
        block.on(Node.EventType.TOUCH_START, this.onTouchStartBlock, this);
        block.on(Node.EventType.TOUCH_END, this.onTouchEndBlock, this);
        block.on(Node.EventType.TOUCH_CANCEL, this.onTouchEndBlock, this);
    }

    private onTouchStartBlock(event: EventTouch): void {
        if (this.isPause || this.isGameOver) return;
        this.audioController.playAudio(AudioType.Drag);

        let block: Node = event.target;
        let compBlock = block.getComponent(Block);
        //Show select shadow
        this.gameView.showShadow(compBlock.getIndex().col, compBlock.getLength());

        //Get current values
        this.currentBlock = block;
        this.currentPosition = block.position.clone();
        this.currentPosition.y = compBlock.getIndex().row * 37;
        this.startMouseLocation = this.gameView.getLocation(event);
        this.currentIndexCol = compBlock.getIndex().col;

        //Get max index, min index
        let row = this.matrixManager.getRow(compBlock.getIndex().row);
        let minIndex = compBlock.getIndex().col - 1 <= 0 ? 0 : compBlock.getIndex().col - 1;
        let maxIndex = compBlock.getIndex().col + compBlock.getLength();
        maxIndex = maxIndex === row.length - 1 ? row.length - 1 : maxIndex;

        while (minIndex > 0 && row[minIndex] === 0) minIndex--;
        while (maxIndex < row.length && row[maxIndex] === 0) maxIndex++;

        //Get max, min position
        this.currentLimitPosition.Min = (minIndex === 0 && (row[minIndex] === 0 || minIndex === compBlock.getIndex().col)) ?
            0 : (minIndex + 1) * Constants.SQUARE_SIZE.WIDTH;
        this.currentLimitPosition.Max = (maxIndex - compBlock.getLength()) * Constants.SQUARE_SIZE.WIDTH;
    }

    private onTouchEndBlock(event: EventTouch): void {
        if (this.isPause || this.isGameOver || !this.currentBlock) return;
        this.isPause = true;
        this.audioController.playAudio(AudioType.Dragend);
        this.combo = 1;

        this.gameView.hiddenShadow();
        let indexRow = this.currentBlock.getComponent(Block).getIndex().row;
        let indexCol = this.currentBlock.getComponent(Block).getIndex().col;
        let length = this.currentBlock.getComponent(Block).getLength();

        //If not change then back drop
        if (indexCol === this.currentIndexCol) {
            this.currentBlock.getComponent(Block).setIndex(indexRow, indexCol, 0.05);
            this.isPause = false;
            return;
        }

        this.matrixManager.fillValue(indexRow, 0, indexCol, indexCol + length);
        this.currentBlock.getComponent(Block).setIndex(indexRow, this.currentIndexCol, 0.01);

        indexRow = this.currentBlock.getComponent(Block).getIndex().row;
        indexCol = this.currentBlock.getComponent(Block).getIndex().col;
        this.matrixManager.fillValue(indexRow, 1, indexCol, indexCol + length);
        this.currentBlock = null;

        setTimeout(() => {
            if (this.isPause === false) this.generateRowBlock();
        }, 250);

        setTimeout(() => {
            this.getNextIndexRows();
        }, 100);
    }

    /**
     * Touch move on container node
     */
    private onTouchMove(event: EventTouch): void {
        if (this.isPause || !this.currentBlock || this.isGameOver) return;

        let location = this.gameView.getLocation(event);
        let move = location.x - this.startMouseLocation.x;
        let position = new Vec3(this.currentPosition.x + move, this.currentPosition.y);

        if (position.x < this.currentLimitPosition.Min) position.x = this.currentLimitPosition.Min;
        if (position.x > this.currentLimitPosition.Max) position.x = this.currentLimitPosition.Max;
        this.currentBlock.setPosition(position);

        this.currentIndexCol = Math.floor((position.x - 18) / Constants.SQUARE_SIZE.HEIGHT) + 1;
        this.gameView.setPosShadow(this.currentIndexCol);
    }

    private getNextIndexRows(): void {
        this.isPause = true;
        let listBlock = this.getListBlock();
        let checkFall: boolean = false;

        for (let block of listBlock) {
            let compBlock = block.getComponent(Block);
            if (!compBlock) continue;
            if (block.active === false) continue;

            let indexRow = compBlock.getIndex().row;
            let indexCol = compBlock.getIndex().col;
            let length = compBlock.getLength();
            if (indexRow < 0) continue;

            //Fall block
            let nextRow = this.matrixManager.getNextRow(indexRow, indexCol, length);
            compBlock.setIndex(nextRow, indexCol);
            if (nextRow !== indexRow) {
                setTimeout(() => {
                    compBlock.playAnimation();
                }, 200);

                checkFall = true;
            }
            if (checkFall) {
                this.audioController.playAudio(AudioType.Drop);
            }
            this.matrixManager.fillValue(indexRow, 0, indexCol, indexCol + length);
            this.matrixManager.fillValue(nextRow, 1, indexCol, indexCol + length);
        }
        let i = 0;
        while (this.matrixManager.isEmpty(i)) this.matrixManager.matrixData.shift();

        if (this.matrixManager.isMinRow()) {
            this.generateRowBlock();
            this.generateRowBlock();
        }

        let listRowFull: Array<number> = this.matrixManager.getListRowFull();
        if (this.clearFull(listRowFull)) {
            // if (this.matrixManager.isMinRow()) this.generateRowBlock(); else this.getNextIndexRows();
        }
    }

    private clearFull(listRowFull: Array<number>): boolean {
        if (this.isGameOver) return;
        if (listRowFull.length > 0) {
            setTimeout(() => {
                listRowFull.map((index) => {
                    this.clearRow(index);
                    this.gameView.showClearNode(new Vec3(150, index * 37, 0));

                    // if (this.scoreManager.getScore() / 500 > this.countScore) {
                    //     this.countScore++;

                    //     let logGame = {
                    //         seconds: this.time,
                    //         score: this.scoreManager.getScore(),
                    //         datetime: new Date().toLocaleString()
                    //     }

                    //     //this.gameCenter.setGameData(logGame)
                    // }
                });
                this.audioController.playAudio(AudioType.Remove);
            }, 500);
            setTimeout(() => {
                this.getNextIndexRows();
                this.isPause = false;
            }, 1000);

            return true;
        } else {
            setTimeout(() => {
                this.isPause = false;
            }, 100);
            return false;
        }
    }

    private clearRow(indexRow: number): void {
        if (this.combo === 1) {
            this.gameView.playAnimationScore(`+80`);
        } else {
            setTimeout(() => {
                this.gameView.playAnimationScore(`+80 x ${this.comboRatio[this.combo - 1]}`);
            }, (this.combo - 1) * 200);
        }

        let listBlock = this.getBlockOfRow(indexRow);
        this.scoreManager.addScore(80 * this.comboRatio[this.combo - 1]);
        // this.gameCenter.matchLog({ score: this.scoreManager.getScore() });
        this.combo++;

        listBlock.map((block) => {
            this.gameView.removeBlock(block);
        });
    }

    private getBlockOfRow(indexRow: number): Node[] {
        let listBlockRow: Node[] = [];
        let listBlock = this.getListBlock();
        listBlock = listBlock.reverse();

        listBlock.map((block) => {
            block.getComponent(Block)?.getIndex().row === indexRow && listBlockRow.push(block);
        })
        return listBlockRow;
    }

    private getListBlock(): Node[] {
        let listBlock = this.blockContainer.children;
        listBlock = listBlock.filter((item) => item.getComponent(Block) !== null);
        listBlock.sort((prev, next) => prev.getComponent(Block).getIndex().row - next.getComponent(Block).getIndex().row);
        return listBlock;
    }
}

