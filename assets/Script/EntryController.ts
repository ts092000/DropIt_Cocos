import { _decorator, Button, Component, director, Node } from 'cc';
import { GameCenterController } from './GameCenter/GameCenterController';
import Constants from './Utils/Constants';
import { Progress } from './Progress';
const { ccclass, property } = _decorator;

@ccclass('EntryController')
export class EntryController extends Component {
    @property(GameCenterController)
    private gameCenter: GameCenterController;

    @property({
        type: Progress,
        tooltip: 'Progress controller'
    })
    private progress: Progress;

    @property({
        type: Node,
        tooltip: 'Loading node'
    })
    private loadingNode: Node;

    @property({
        type: Button,
        tooltip: 'Button start'
    })
    private buttonStart: Button;

    protected onLoad(): void {
        this.buttonStart.node.active = false;
        this.loadingNode.active = true;

        this.buttonStart.node.on(Button.EventType.CLICK, () => director.loadScene(Constants.SCENE_NAME.BEGIN));
    }

    protected start(): void {
        this.progress.toValue('Connecting to SA World...', 0.4);

        this.progress.toValue('Connected succesfully...', 0.7);

        setTimeout(() => {
            this.progress.toValue('Loading game...', 1);
            director.preloadScene(Constants.SCENE_NAME.BEGIN, () => {
                director.preloadScene(Constants.SCENE_NAME.GAME, () => {
                    this.progress.toValue('Loading game...', 1);
                    this.buttonStart.node.active = true;
                    this.loadingNode.active = false;
                })
            })
        }, 300);
        // this.gameCenter.initGameClient(() => {
        // })
    }
}

