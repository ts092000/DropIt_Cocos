import { _decorator, Component, director, find, Node } from 'cc';
import { StoreAPI } from './StoreAPI';
import { GameData } from '../Utils/GameData';
import Constants from '../Utils/Constants';
// import GameClient from '@onechaintech/gamesdk';
import { LeaderBoard } from '../Utils/DataTypes';
const { ccclass, property } = _decorator;

@ccclass('GameCenterController')
export class GameCenterController extends Component {
    private readonly gameIDDev: string = '6502b21c33f6e81c437519a2';
    private readonly apiKeyDev: string = '3cb8f176-1a2e-48e4-a936-03c05f9e24f9';
    public gameClient;
    public user;

    public initGameClient(callBack: () => void): void {
        // let parameters = new Node(Constants.NODE_NAME.GameClient);
        // this.gameClient = new GameClient(this.gameIDDev, this.apiKeyDev, window.parent, { dev: true });

        // this.gameClient.initAsync().then(() => {
        //     //Get current user id
        //     let userID = this.gameClient.user.citizen.getCitizenId();
        //     this.user = {
        //         userID: this.gameClient.user.citizen.getCitizenId(),
        //         userName: this.gameClient.user.account.getUsername(),
        //         name: this.gameClient.user.citizen.getCitizenName()
        //     }
        //     if (!this.user.name || this.user.name.length === 0) this.user.name = this.gameClient.user.account.getUsername().slice(6, this.gameClient.user.account.getUsername().length);

        //     //Get gamedata from server
        //     this.gameClient.user.data.getGameData().then((response) => {
        //         //Save data
        //         if (response.data[`${userID}`] !== undefined) GameData.gameData = response.data[`${userID}`];
        //         console.log(GameData.gameData);



        //     }).catch((e) => {
        //         console.log('Error at get game data: ', e);
        //     })

        //     let gameClientParams = parameters.addComponent(StoreAPI);
        //     gameClientParams.gameClient = this.gameClient;
        //     gameClientParams.userData = this.user;
        //     director.addPersistRootNode(parameters);

        //     //Run callback
        //     callBack.apply(callBack);
        // }).catch((e) => {
        //     console.log('Error at init game client: ', e);
        // })
    }

    public startMatch(callBack: () => void): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;

        this.gameClient.match.startMatch().then((data) => {
            gameClientParams.matchData = data;

            //Create array log
            if (!GameData.gameData.checkLog) GameData.gameData.checkLog = {};
            GameData.gameData.checkLog[data.matchId] = [];


            // Apply callback
            callBack.apply(callBack);
        }).catch((error) => console.log('Error at start match: ', error));
    }

    /** 
     * @param callBack Call when api done
     * @param data Data leader board
     */
    public completeMatch(callBack: () => void, data: Object): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;
        //let timeout = 5000; 
        //this.gameClient.match.completeMatch(gameClientParams.matchData, data, timeout)...

        this.gameClient.match.completeMatch(gameClientParams.matchData, data)
            .then(() => {
                let userID = this.gameClient.user.citizen.getCitizenId();
                this.gameClient.user.data.setGameData({ [userID]: GameData.gameData }, false).then(() => { })
                    .catch((e) => { console.log("Error at set game data", e); })

                //Apply callback
                callBack.apply(callBack);
            }).catch((e) => {
                console.log(e);
            })
    }

    public setGameData(logGame: { score: number, seconds: number, datetime: string }): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);

        this.gameClient = gameClientParams.gameClient;
        let userID = this.gameClient.user.citizen.getCitizenId();
        let matchId = gameClientParams.matchData.matchId

        GameData.gameData.checkLog[`${matchId}`].push(logGame);
    }

    public matchLog(data: Object): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;
        this.gameClient.match.logMatch(gameClientParams.matchData.matchId, data).catch((e) => console.log(e));
    }

    public async getLeaderBoard(type: number): Promise<LeaderBoard[]> {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;
        this.user = gameClientParams.userData;

        let data: LeaderBoard[] = await this.gameClient.leaderBoard.getList(type).catch((e) => {
            return [];
        });
        return data;
    }

}
