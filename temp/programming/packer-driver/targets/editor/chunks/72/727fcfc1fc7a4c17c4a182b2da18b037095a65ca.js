System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Node, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ItemLeaderboard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6da023kWUZIlZkP/LEVGP3+", "ItemLeaderboard", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemLeaderboard", ItemLeaderboard = (_dec = ccclass('ItemLeaderboard'), _dec2 = property({
        type: Label,
        tooltip: 'Label name user'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Label score'
      }), _dec4 = property({
        type: Label,
        tooltip: 'Label order'
      }), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Node), _dec(_class = (_class2 = class ItemLeaderboard extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbName", _descriptor, this);

          _initializerDefineProperty(this, "lbScore", _descriptor2, this);

          _initializerDefineProperty(this, "lbOrder", _descriptor3, this);

          _initializerDefineProperty(this, "spriteCup", _descriptor4, this);

          _initializerDefineProperty(this, "spriteBar", _descriptor5, this);

          _initializerDefineProperty(this, "spriteBackground", _descriptor6, this);

          _initializerDefineProperty(this, "personalBackground", _descriptor7, this);

          this.listColor = ['#F8D00032', '#DBDBDB32', '#FF660032'];
          this.listColorCup = ['#F8D000', '#DBDBDB', '#FF6600'];
        }

        init(name, score, order, isDirect) {
          name = name.length > 10 ? `${name.slice(0, 9)}...` : name;
          this.lbName.string = name;
          this.lbScore.string = score;
          this.lbOrder.string = `${order + 1}`;
          this.spriteBackground.node.active = !isDirect;
          this.spriteCup.node.active = this.spriteBackground.node.active;
          this.personalBackground.active = !this.spriteBackground.node.active;
          this.lbOrder.node.active = !this.spriteBackground.node.active;
          ;

          if (!isDirect) {
            let color = new Color();
            let stringHex = this.listColor[order];
            Color.fromHEX(color, stringHex);
            let colorCup = new Color();
            let stringCup = this.listColorCup[order];
            Color.fromHEX(colorCup, stringCup);
            this.spriteCup.color = colorCup;
            this.spriteBar.color = colorCup;
            this.spriteBackground.color = color;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbOrder", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteCup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteBar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteBackground", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "personalBackground", [_dec8], {
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
//# sourceMappingURL=727fcfc1fc7a4c17c4a182b2da18b037095a65ca.js.map