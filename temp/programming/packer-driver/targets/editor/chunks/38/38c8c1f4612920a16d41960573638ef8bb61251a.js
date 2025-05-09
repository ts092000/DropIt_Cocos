System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, Node, GameCenterController, Constants, Progress, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, EntryController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCenterController(extras) {
    _reporterNs.report("GameCenterController", "./GameCenter/GameCenterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgress(extras) {
    _reporterNs.report("Progress", "./Progress", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameCenterController = _unresolved_2.GameCenterController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.default;
    }, function (_unresolved_4) {
      Progress = _unresolved_4.Progress;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "774d0aQTLtD4Zqzbj+LYiwF", "EntryController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EntryController", EntryController = (_dec = ccclass('EntryController'), _dec2 = property(_crd && GameCenterController === void 0 ? (_reportPossibleCrUseOfGameCenterController({
        error: Error()
      }), GameCenterController) : GameCenterController), _dec3 = property({
        type: _crd && Progress === void 0 ? (_reportPossibleCrUseOfProgress({
          error: Error()
        }), Progress) : Progress,
        tooltip: 'Progress controller'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Loading node'
      }), _dec5 = property({
        type: Button,
        tooltip: 'Button start'
      }), _dec(_class = (_class2 = class EntryController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameCenter", _descriptor, this);

          _initializerDefineProperty(this, "progress", _descriptor2, this);

          _initializerDefineProperty(this, "loadingNode", _descriptor3, this);

          _initializerDefineProperty(this, "buttonStart", _descriptor4, this);
        }

        onLoad() {
          this.buttonStart.node.active = false;
          this.loadingNode.active = true;
          this.buttonStart.node.on(Button.EventType.CLICK, () => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_NAME.BEGIN));
        }

        start() {
          this.progress.toValue('Connecting to SA World...', 0.4);
          this.gameCenter.initGameClient(() => {
            this.progress.toValue('Connected succesfully...', 0.7);
            setTimeout(() => {
              this.progress.toValue('Loading game...', 1);
              director.preloadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SCENE_NAME.BEGIN, () => {
                director.preloadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SCENE_NAME.GAME, () => {
                  this.progress.toValue('Loading game...', 1);
                  this.buttonStart.node.active = true;
                  this.loadingNode.active = false;
                });
              });
            }, 300);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameCenter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonStart", [_dec5], {
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
//# sourceMappingURL=38c8c1f4612920a16d41960573638ef8bb61251a.js.map