System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, GameData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ScoreManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Utils/GameData", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70881pnkfJOnKlWZtjuW+pW", "ScoreManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreManager", ScoreManager = (_dec = ccclass('ScoreManager'), _dec2 = property({
        type: Label,
        tooltip: 'Label score'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Label high score'
      }), _dec4 = property({
        type: Label,
        tooltip: 'Label score game over'
      }), _dec5 = property({
        type: Label,
        tooltip: 'Label high score game over'
      }), _dec(_class = (_class2 = class ScoreManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "labelScore", _descriptor, this);

          _initializerDefineProperty(this, "labelHighScore", _descriptor2, this);

          _initializerDefineProperty(this, "labelScoreGameOver", _descriptor3, this);

          _initializerDefineProperty(this, "labelHighScoreGameOver", _descriptor4, this);

          this.score = 0;
        }

        start() {
          this.setLabelScore();
          this.setLabelHighScore();
        }

        addScore(score) {
          this.score += score;
          this.setLabelScore();

          if (this.score > (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).gameData.HighScore) {
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).gameData.HighScore = this.score;
            this.setLabelHighScore();
          }
        }

        setLabelHighScore() {
          this.labelHighScore.string = "" + (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).gameData.HighScore;
        }

        setLabelScore() {
          this.labelScore.string = "" + this.score;
        }

        setLabelGameOver() {
          this.labelScoreGameOver.string = "" + this.score;
          this.labelHighScoreGameOver.string = "" + (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).gameData.HighScore;
        }

        getScore() {
          return this.score;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelHighScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelScoreGameOver", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelHighScoreGameOver", [_dec5], {
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
//# sourceMappingURL=e076195d967b95b94c9c3a4b737981bf1350a7f2.js.map