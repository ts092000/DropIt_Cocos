import { _decorator, Component, Node, Button, director } from 'cc';
import Static from '../Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    @property({
        type: Button,
        tooltip: "Button play"
    })
    private buttonPlay: Button;

    protected onLoad(): void {
        this.buttonPlay.node.on(Button.EventType.CLICK, () => director.loadScene(Static.SCENE_NAME.GAME));
    }
}

