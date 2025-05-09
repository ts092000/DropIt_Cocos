System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, StoreAPI, GameData, Constants, _dec, _class, _crd, ccclass, property, GameCenterController;

  function _reportPossibleCrUseOfStoreAPI(extras) {
    _reporterNs.report("StoreAPI", "./StoreAPI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Utils/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoard(extras) {
    _reporterNs.report("LeaderBoard", "../Utils/DataTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      StoreAPI = _unresolved_2.StoreAPI;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dba6cO1SJNCWrvvY01NNw8R", "GameCenterController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'Node']);

      // import GameClient from '@onechaintech/gamesdk';
      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCenterController", GameCenterController = (_dec = ccclass('GameCenterController'), _dec(_class = class GameCenterController extends Component {
        constructor(...args) {
          super(...args);
          this.gameIDDev = '6502b21c33f6e81c437519a2';
          this.apiKeyDev = '3cb8f176-1a2e-48e4-a936-03c05f9e24f9';
          this.gameClient = void 0;
          this.user = void 0;
        }

        initGameClient(callBack) {// let parameters = new Node(Constants.NODE_NAME.GameClient);
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

        startMatch(callBack) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.match.startMatch().then(data => {
            gameClientParams.matchData = data; //Create array log

            if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).gameData.checkLog) (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).gameData.checkLog = {};
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).gameData.checkLog[data.matchId] = []; // Apply callback

            callBack.apply(callBack);
          }).catch(error => console.log('Error at start match: ', error));
        }
        /** 
         * @param callBack Call when api done
         * @param data Data leader board
         */


        completeMatch(callBack, data) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient; //let timeout = 5000; 
          //this.gameClient.match.completeMatch(gameClientParams.matchData, data, timeout)...

          this.gameClient.match.completeMatch(gameClientParams.matchData, data).then(() => {
            let userID = this.gameClient.user.citizen.getCitizenId();
            this.gameClient.user.data.setGameData({
              [userID]: (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).gameData
            }, false).then(() => {}).catch(e => {
              console.log("Error at set game data", e);
            }); //Apply callback

            callBack.apply(callBack);
          }).catch(e => {
            console.log(e);
          });
        }

        setGameData(logGame) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          let userID = this.gameClient.user.citizen.getCitizenId();
          let matchId = gameClientParams.matchData.matchId;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).gameData.checkLog[`${matchId}`].push(logGame);
        }

        matchLog(data) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.match.logMatch(gameClientParams.matchData.matchId, data).catch(e => console.log(e));
        }

        async getLeaderBoard(type) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.user = gameClientParams.userData;
          let data = await this.gameClient.leaderBoard.getList(type).catch(e => {
            return [];
          });
          return data;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=097ff41b24a2c16bd0497a1a6a97a78b46e840e6.js.map