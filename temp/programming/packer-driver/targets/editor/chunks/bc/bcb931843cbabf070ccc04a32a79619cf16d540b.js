System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, Node, Vec3, GameView, Block, Constants, AudioType, MatrixManager, ScoreManager, AudioController, GameCenterController, LeaderboardHandle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlock(extras) {
    _reporterNs.report("Block", "../PrefabManager/Block", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLimit(extras) {
    _reporterNs.report("Limit", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatrixManager(extras) {
    _reporterNs.report("MatrixManager", "./MatrixManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreManager(extras) {
    _reporterNs.report("ScoreManager", "./ScoreManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "../AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCenterController(extras) {
    _reporterNs.report("GameCenterController", "../GameCenter/GameCenterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardHandle(extras) {
    _reporterNs.report("LeaderboardHandle", "../../Leaderboard/Script/LeaderboardHandle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameView = _unresolved_2.GameView;
    }, function (_unresolved_3) {
      Block = _unresolved_3.Block;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.default;
    }, function (_unresolved_5) {
      AudioType = _unresolved_5.AudioType;
    }, function (_unresolved_6) {
      MatrixManager = _unresolved_6.MatrixManager;
    }, function (_unresolved_7) {
      ScoreManager = _unresolved_7.ScoreManager;
    }, function (_unresolved_8) {
      AudioController = _unresolved_8.AudioController;
    }, function (_unresolved_9) {
      GameCenterController = _unresolved_9.GameCenterController;
    }, function (_unresolved_10) {
      LeaderboardHandle = _unresolved_10.LeaderboardHandle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c562NXwj9BdK3puss0Yfb8", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Camera', 'Component', 'director', 'EventTouch', 'Input', 'input', 'log', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView) : GameView,
        tooltip: 'Game view node'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Block container'
      }), _dec4 = property({
        type: _crd && MatrixManager === void 0 ? (_reportPossibleCrUseOfMatrixManager({
          error: Error()
        }), MatrixManager) : MatrixManager,
        tooltip: 'Matrix manager node'
      }), _dec5 = property({
        type: _crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
          error: Error()
        }), ScoreManager) : ScoreManager,
        tooltip: 'Score manager'
      }), _dec6 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController,
        tooltip: 'Audio controller'
      }), _dec7 = property({
        type: Button,
        tooltip: 'Button pause'
      }), _dec8 = property({
        type: Button,
        tooltip: 'List button home'
      }), _dec9 = property({
        type: Button,
        tooltip: 'List button restart'
      }), _dec10 = property({
        type: Button,
        tooltip: 'Button resume'
      }), _dec11 = property({
        type: _crd && GameCenterController === void 0 ? (_reportPossibleCrUseOfGameCenterController({
          error: Error()
        }), GameCenterController) : GameCenterController,
        tooltip: 'Game center controller'
      }), _dec12 = property({
        type: _crd && LeaderboardHandle === void 0 ? (_reportPossibleCrUseOfLeaderboardHandle({
          error: Error()
        }), LeaderboardHandle) : LeaderboardHandle
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameView", _descriptor, this);

          _initializerDefineProperty(this, "blockContainer", _descriptor2, this);

          _initializerDefineProperty(this, "matrixManager", _descriptor3, this);

          _initializerDefineProperty(this, "scoreManager", _descriptor4, this);

          _initializerDefineProperty(this, "audioController", _descriptor5, this);

          _initializerDefineProperty(this, "buttonPause", _descriptor6, this);

          _initializerDefineProperty(this, "listButtonHome", _descriptor7, this);

          _initializerDefineProperty(this, "listButtonRestart", _descriptor8, this);

          _initializerDefineProperty(this, "buttonResume", _descriptor9, this);

          _initializerDefineProperty(this, "gameCenter", _descriptor10, this);

          _initializerDefineProperty(this, "lbHandle", _descriptor11, this);

          this.listBlock = new Array();
          this.startMouseLocation = void 0;
          this.isPause = false;
          this.currentBlock = void 0;
          this.currentPosition = void 0;
          this.currentLimitPosition = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DEFAULT_LIMIT_POSITION;
          this.currentIndexCol = 0;
          this.isGameOver = false;
          this.interval = void 0;
          this.time = 0;
          this.countScore = 0;
          this.combo = 1;
          this.comboRatio = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
          this.inteLog = 0;
        }

        start() {
          this.gameView.showLoading();
          this.gameView.setValueLoading('Connecting to SA World...', 0.7); // this.interval = setInterval(() => this.time++, 1000);

          this.gameView.setValueLoading('Connected successfully!', 1);
          setTimeout(() => {
            this.gameView.hiddenLoading();
            this.initGame();
          }, 700); // this.gameCenter.startMatch(() => {
          // })
          // this.gameView.hiddenLoading();
          // this.initGame();
        }

        initGame() {
          this.generateRowBlock();
          this.generateRowBlock();
          this.generateRowBlock();
          this.blockContainer.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.getNextIndexRows();
          this.addEventButton();
        }

        addEventButton() {
          this.buttonPause.node.on(Button.EventType.CLICK, () => {
            if (this.isPause) return;
            this.isPause = this.gameView.switchPause();
          });
          this.listButtonHome.map(button => button.node.on(Button.EventType.CLICK, () => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_NAME.BEGIN)));
          this.listButtonRestart.map(button => button.node.on(Button.EventType.CLICK, () => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_NAME.GAME)));
          this.buttonResume.node.on(Button.EventType.CLICK, () => {
            this.isPause = false;
            this.gameView.switchPause();
          });
        }

        generateRowBlock() {
          this.isPause = true;
          this.listBlock = this.getListBlock();
          this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Push); //Move blocks

          this.listBlock.map(block => {
            let compBlock = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block);
            let index = compBlock == null ? void 0 : compBlock.getIndex();
            compBlock == null ? void 0 : compBlock.setIndex(index.row + 1, index.col);
          });
          let row = new Array(8);
          let rowBlock = this.gameView.generateRowBlock();
          row.fill(0, 0, row.length); //Set new blocks

          rowBlock.map(block => {
            let compBlock = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block);
            let index = compBlock.getIndex();
            let length = compBlock.getLength();
            row.fill(1, index.col, index.col + length);
            this.addEventBlock(block);
          }); //Add blocks

          this.matrixManager.pushArray(row);
          this.gameView.addRowBlock(rowBlock);
          if (this.matrixManager.isMaxRow()) this.gameOver();
          setTimeout(() => {
            this.getNextIndexRows();
          }, 200);
        }

        gameOver() {
          //clearInterval(this.inteLog);
          // this.gameCenter.matchLog({ score: this.scoreManager.getScore() });
          // this.gameCenter.completeMatch(() => {
          //     this.lbHandle.show();
          // }, { score: this.scoreManager.getScore() });
          this.isPause = true;
          this.isGameOver = true;
          this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).GameOver);
          this.scoreManager.setLabelGameOver();
          this.gameView.showResult();
        }

        addEventBlock(block) {
          block.on(Node.EventType.TOUCH_START, this.onTouchStartBlock, this);
          block.on(Node.EventType.TOUCH_END, this.onTouchEndBlock, this);
          block.on(Node.EventType.TOUCH_CANCEL, this.onTouchEndBlock, this);
        }

        onTouchStartBlock(event) {
          if (this.isPause || this.isGameOver) return;
          this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Drag);
          let block = event.target;
          let compBlock = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block); //Show select shadow

          this.gameView.showShadow(compBlock.getIndex().col, compBlock.getLength()); //Get current values

          this.currentBlock = block;
          this.currentPosition = block.position.clone();
          this.currentPosition.y = compBlock.getIndex().row * 37;
          this.startMouseLocation = this.gameView.getLocation(event);
          this.currentIndexCol = compBlock.getIndex().col; //Get max index, min index

          let row = this.matrixManager.getRow(compBlock.getIndex().row);
          let minIndex = compBlock.getIndex().col - 1 <= 0 ? 0 : compBlock.getIndex().col - 1;
          let maxIndex = compBlock.getIndex().col + compBlock.getLength();
          maxIndex = maxIndex === row.length - 1 ? row.length - 1 : maxIndex;

          while (minIndex > 0 && row[minIndex] === 0) minIndex--;

          while (maxIndex < row.length && row[maxIndex] === 0) maxIndex++; //Get max, min position


          this.currentLimitPosition.Min = minIndex === 0 && (row[minIndex] === 0 || minIndex === compBlock.getIndex().col) ? 0 : (minIndex + 1) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SQUARE_SIZE.WIDTH;
          this.currentLimitPosition.Max = (maxIndex - compBlock.getLength()) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SQUARE_SIZE.WIDTH;
        }

        onTouchEndBlock(event) {
          if (this.isPause || this.isGameOver || !this.currentBlock) return;
          this.isPause = true;
          this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Dragend);
          this.combo = 1;
          this.gameView.hiddenShadow();
          let indexRow = this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().row;
          let indexCol = this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().col;
          let length = this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getLength(); //If not change then back drop

          if (indexCol === this.currentIndexCol) {
            this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block).setIndex(indexRow, indexCol, 0.05);
            this.isPause = false;
            return;
          }

          this.matrixManager.fillValue(indexRow, 0, indexCol, indexCol + length);
          this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).setIndex(indexRow, this.currentIndexCol, 0.01);
          indexRow = this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().row;
          indexCol = this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().col;
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


        onTouchMove(event) {
          if (this.isPause || !this.currentBlock || this.isGameOver) return;
          let location = this.gameView.getLocation(event);
          let move = location.x - this.startMouseLocation.x;
          let position = new Vec3(this.currentPosition.x + move, this.currentPosition.y);
          if (position.x < this.currentLimitPosition.Min) position.x = this.currentLimitPosition.Min;
          if (position.x > this.currentLimitPosition.Max) position.x = this.currentLimitPosition.Max;
          this.currentBlock.setPosition(position);
          this.currentIndexCol = Math.floor((position.x - 18) / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SQUARE_SIZE.HEIGHT) + 1;
          this.gameView.setPosShadow(this.currentIndexCol);
        }

        getNextIndexRows() {
          this.isPause = true;
          let listBlock = this.getListBlock();
          let checkFall = false;

          for (let block of listBlock) {
            let compBlock = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block);
            if (!compBlock) continue;
            if (block.active === false) continue;
            let indexRow = compBlock.getIndex().row;
            let indexCol = compBlock.getIndex().col;
            let length = compBlock.getLength();
            if (indexRow < 0) continue; //Fall block

            let nextRow = this.matrixManager.getNextRow(indexRow, indexCol, length);
            compBlock.setIndex(nextRow, indexCol);

            if (nextRow !== indexRow) {
              setTimeout(() => {
                compBlock.playAnimation();
              }, 200);
              checkFall = true;
            }

            if (checkFall) {
              this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
                error: Error()
              }), AudioType) : AudioType).Drop);
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

          let listRowFull = this.matrixManager.getListRowFull();

          if (this.clearFull(listRowFull)) {// if (this.matrixManager.isMinRow()) this.generateRowBlock(); else this.getNextIndexRows();
          }
        }

        clearFull(listRowFull) {
          if (this.isGameOver) return;

          if (listRowFull.length > 0) {
            setTimeout(() => {
              listRowFull.map(index => {
                this.clearRow(index);
                this.gameView.showClearNode(new Vec3(150, index * 37, 0)); // if (this.scoreManager.getScore() / 500 > this.countScore) {
                //     this.countScore++;
                //     let logGame = {
                //         seconds: this.time,
                //         score: this.scoreManager.getScore(),
                //         datetime: new Date().toLocaleString()
                //     }
                //     //this.gameCenter.setGameData(logGame)
                // }
              });
              this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
                error: Error()
              }), AudioType) : AudioType).Remove);
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

        clearRow(indexRow) {
          if (this.combo === 1) {
            this.gameView.playAnimationScore(`+80`);
          } else {
            setTimeout(() => {
              this.gameView.playAnimationScore(`+80 x ${this.comboRatio[this.combo - 1]}`);
            }, (this.combo - 1) * 200);
          }

          let listBlock = this.getBlockOfRow(indexRow);
          this.scoreManager.addScore(80 * this.comboRatio[this.combo - 1]); // this.gameCenter.matchLog({ score: this.scoreManager.getScore() });

          this.combo++;
          listBlock.map(block => {
            this.gameView.removeBlock(block);
          });
        }

        getBlockOfRow(indexRow) {
          let listBlockRow = [];
          let listBlock = this.getListBlock();
          listBlock = listBlock.reverse();
          listBlock.map(block => {
            var _block$getComponent;

            ((_block$getComponent = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block)) == null ? void 0 : _block$getComponent.getIndex().row) === indexRow && listBlockRow.push(block);
          });
          return listBlockRow;
        }

        getListBlock() {
          let listBlock = this.blockContainer.children;
          listBlock = listBlock.filter(item => item.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block) !== null);
          listBlock.sort((prev, next) => prev.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().row - next.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).getIndex().row);
          return listBlock;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matrixManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonPause", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "listButtonHome", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "listButtonRestart", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buttonResume", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameCenter", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbHandle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcb931843cbabf070ccc04a32a79619cf16d540b.js.map