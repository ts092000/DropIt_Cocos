import { _decorator, Component, director, Node, sp } from 'cc';
import Constants from './Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('Splash')
export class Splash extends Component {
    @property(sp.Skeleton)
    private ske: sp.Skeleton;

    protected start(): void {
        this.ske.setCompleteListener(() => {
            director.loadScene(Constants.SCENE_NAME.ENTRY);
        })
    }
}

