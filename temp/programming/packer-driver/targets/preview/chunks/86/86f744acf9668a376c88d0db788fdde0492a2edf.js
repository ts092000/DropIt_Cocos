System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Sprite, tween, UITransform, Vec3, Contants, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Block;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfContants(extras) {
    _reporterNs.report("Contants", "../Utils/Constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Contants = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fea025k7pND4XhCBL4/42D", "Block", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Block", Block = (_dec = ccclass('Block'), _dec2 = property(Sprite), _dec(_class = (_class2 = class Block extends Component {
        constructor() {
          super(...arguments);
          this.indexRow = 0;
          this.indexCol = 0;
          this.length = 0;

          _initializerDefineProperty(this, "spriteBlock", _descriptor, this);
        }

        setSpriteFrame(spriteFrame) {
          this.spriteBlock.spriteFrame = spriteFrame;
        }

        setLength(length) {
          var uiTransfrom = this.spriteBlock.getComponent(UITransform);
          uiTransfrom.setContentSize(37 * length, 37);
          var blockUiTransform = this.node.getComponent(UITransform);
          blockUiTransform.setContentSize(37 * length, 37);
          this.length = length;
        }

        getLength() {
          return this.length;
        }

        fallTo(destination, time) {
          tween(this.node).to(time, {
            position: destination
          }, {
            easing: 'smooth'
          }).start();
        }

        setIndex(row, col, time) {
          this.indexRow = row;
          this.indexCol = col;
          if (!time) time = 0.15;
          var position = new Vec3(this.indexCol * (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).SQUARE_SIZE.WIDTH, this.indexRow * (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).SQUARE_SIZE.HEIGHT, 0);

          if (this.indexRow === -1) {
            this.node.setPosition(position);
          } else {
            this.fallTo(position, time);
          }
        }

        getIndex() {
          return {
            row: this.indexRow,
            col: this.indexCol
          };
        }

        resetBlock() {
          this.indexRow = 0;
          this.indexCol = 0;
          this.length = 0;
        }

        playAnimation() {
          this.node.getComponent(Animation).play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteBlock", [_dec2], {
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
//# sourceMappingURL=86f744acf9668a376c88d0db788fdde0492a2edf.js.map