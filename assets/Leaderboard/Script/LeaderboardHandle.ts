import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ItemLeaderboard } from './ItemLeaderboard';
import { GameCenterController } from '../../Script/GameCenter/GameCenterController';
import { LeaderBoard } from '../../Script/Utils/DataTypes';

const { ccclass, property } = _decorator;

@ccclass('LeaderboardHandle')
export class LeaderboardHandle extends Component {
    @property({
        type: GameCenterController,
        tooltip: 'Game center'
    })
    private gameCenter: GameCenterController;

    @property({
        type: Prefab,
        tooltip: 'Prefab item leaderboard'
    })
    private prefabItem: Prefab;

    @property({
        type: Node
    })
    private container: Node;

    @property({
        type: ItemLeaderboard
    })
    private personalItem: ItemLeaderboard;
    private readonly DISTANCE: number = 110;
    private readonly TOTAL_ROW: number = 3;

    public show(): void {
        this.node.active = true;
        this.container.removeAllChildren();
        this.gameCenter.getLeaderBoard(0).then((data) => this.renderLeaderboard(data));
    }

    public renderLeaderboard(data: LeaderBoard[]): void {
        for (let i = 0; i < this.TOTAL_ROW; i++) {
            if (i >= data.length) break;
            let item = data[i];
            let el = instantiate(this.prefabItem);
            this.container.addChild(el);
            el.setPosition(0, -i * this.DISTANCE);
            el.getComponent(ItemLeaderboard).init(item.metadata.citizenName, `${item.point}`, item.index, false);
        }

        let lastChild = this.container.children[this.container.children.length - 1];
        this.personalItem.node.setPosition(0, (lastChild.position.y + 75) * this.personalItem.node.scale.x);

        let current = data.find((item) => item.userId === this.gameCenter.user.userID);
        if (current) {
            this.personalItem.init(current.metadata.citizenName, `${current.point}`, current.index, true);
            this.personalItem.node.active = true;
        }
    }

    public hidden(): void {
        this.node.active = false;
    }
}

