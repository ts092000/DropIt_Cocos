System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Camera, Component, Label, math, Node, SpriteFrame, UITransform, Vec3, Block, Contants, PoolManager, Progress, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBlock(extras) {
    _reporterNs.report("Block", "../PrefabManager/Block", _context.meta, extras);
  }

  function _reportPossibleCrUseOfContants(extras) {
    _reporterNs.report("Contants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgress(extras) {
    _reporterNs.report("Progress", "../Progress", _context.meta, extras);
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
      Camera = _cc.Camera;
      Component = _cc.Component;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Block = _unresolved_2.Block;
    }, function (_unresolved_3) {
      Contants = _unresolved_3.default;
    }, function (_unresolved_4) {
      PoolManager = _unresolved_4.PoolManager;
    }, function (_unresolved_5) {
      Progress = _unresolved_5.Progress;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef1a1rg+CBIhpLbRA+EquYv", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Camera', 'Component', 'director', 'EventTouch', 'instantiate', 'Label', 'math', 'Node', 'Prefab', 'randomRangeInt', 'SpriteFrame', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property({
        type: SpriteFrame,
        tooltip: "List sprite frame"
      }), _dec3 = property({
        type: Node,
        tooltip: "Node parent"
      }), _dec4 = property({
        type: Node,
        tooltip: 'Select block shadow'
      }), _dec5 = property({
        type: Camera,
        tooltip: 'Camera screen game'
      }), _dec6 = property({
        type: _crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
          error: Error()
        }), PoolManager) : PoolManager,
        tooltip: 'Pool manager node'
      }), _dec7 = property({
        type: Node,
        tooltip: 'Game over node'
      }), _dec8 = property({
        type: Node,
        tooltip: 'Pause node'
      }), _dec9 = property({
        type: _crd && Progress === void 0 ? (_reportPossibleCrUseOfProgress({
          error: Error()
        }), Progress) : Progress,
        tooltip: 'Progress controller'
      }), _dec10 = property(Node), _dec(_class = (_class2 = class GameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "listSpriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "blockContainer", _descriptor2, this);

          _initializerDefineProperty(this, "selectShadow", _descriptor3, this);

          _initializerDefineProperty(this, "cameraGame", _descriptor4, this);

          _initializerDefineProperty(this, "poolManager", _descriptor5, this);

          _initializerDefineProperty(this, "gameOverNode", _descriptor6, this);

          _initializerDefineProperty(this, "pauseNode", _descriptor7, this);

          _initializerDefineProperty(this, "progerss", _descriptor8, this);

          _initializerDefineProperty(this, "mainNode", _descriptor9, this);
        }

        playAnimationScore(text) {
          var el = this.poolManager.getAnimationCombo();
          this.mainNode.addChild(el);
          el.getComponent(Label).string = text;
          console.log(el.getComponent(Label).string);
          el.getComponent(Animation).play();
        }
        /**
         * Random config array
         * @returns Array result
         */


        generateArray() {
          var dataArray = [4, 4, 3, 3, 2, 2, 2, 1, 1, 1];
          this.shuffleArray(dataArray);
          var minLength = 6;
          var maxLength = 7;
          var resultArray = [];
          var i = 0,
              sum = 0;

          while (i < dataArray.length && sum < minLength) {
            if (sum + dataArray[i] <= maxLength) {
              resultArray.push(dataArray[i]);
              sum += dataArray[i];
            }

            i++;
          }

          var space = (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).BOARD_SIZE.COL - sum;

          for (var _i = 0; _i < space; _i++) {
            var randomIndex = Math.floor(Math.random() * (resultArray.length + 1));
            resultArray.splice(randomIndex, 0, 0);
          }

          return resultArray;
        }
        /**
         * @param array Array is need shuffle
         */


        shuffleArray(array) {
          var index = array.length;

          while (index > 0) {
            var randomIndex = Math.floor(Math.random() * index);
            index--;
            var temp = array[index];
            array[index] = array[randomIndex];
            array[randomIndex] = temp;
          }
        }

        generateRowBlock() {
          var resultArray = this.generateArray();
          var nextPosX = 0;
          var listBlock = [];

          for (var i = 0; i < resultArray.length; i++) {
            if (resultArray[i] === 0) {
              nextPosX++;
              continue;
            }

            var randomColor = math.randomRangeInt(0, 4);
            var indexSpriteFrame = randomColor * 4 + resultArray[i] - 1;
            var block = this.poolManager.getBlock();
            var compBlock = block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block);
            compBlock.setIndex(-1, nextPosX);
            compBlock.setSpriteFrame(this.listSpriteFrame[indexSpriteFrame]);
            compBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
              error: Error()
            }), Block) : Block).setLength(resultArray[i]);
            nextPosX += resultArray[i];
            listBlock.push(block);
          }

          return listBlock;
        }

        addRowBlock(listBlock) {
          listBlock.map(block => this.blockContainer.addChild(block));
        }
        /**
         * @param event Event touch
         * @param node Node to inverse
         * @returns Local position of point in container node
         */


        getLocation(event) {
          var location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
          var v3 = new Vec3();
          this.blockContainer.inverseTransformPoint(v3, new Vec3(location.x, location.y));
          return v3;
        }

        showShadow(col, length) {
          this.selectShadow.active = true;
          this.selectShadow.setPosition(col * (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).SQUARE_SIZE.HEIGHT, 0);
          var uiTransfrom = this.selectShadow.getComponent(UITransform);
          uiTransfrom.width = length * (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).SQUARE_SIZE.WIDTH;
        }

        hiddenShadow() {
          this.selectShadow.active = false;
        }

        setPosShadow(col) {
          this.selectShadow.setPosition(col * (_crd && Contants === void 0 ? (_reportPossibleCrUseOfContants({
            error: Error()
          }), Contants) : Contants).SQUARE_SIZE.HEIGHT, 0);
        }

        removeBlock(block) {
          this.poolManager.removeBlock(block);
        }

        showClearNode(position) {
          var clearNode = this.poolManager.getClearNode();
          clearNode.active = true;
          clearNode.setPosition(position);
          this.blockContainer.addChild(clearNode);
          var animation = clearNode.getComponent(Animation);
          animation.play();
          animation.on(Animation.EventType.FINISHED, () => this.poolManager.putClearNode(clearNode));
        }

        showResult() {
          this.gameOverNode.active = true;
          this.gameOverNode.getComponent(Animation).play();
        }

        switchPause() {
          this.pauseNode.active = !this.pauseNode.active;
          return this.pauseNode.active;
        }

        showLoading() {
          this.progerss.showNode();
        }

        hiddenLoading() {
          this.progerss.hideNode();
        }

        setValueLoading(title, value) {
          this.progerss.toValue(title, value);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectShadow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "poolManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameOverNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pauseNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "progerss", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "mainNode", [_dec10], {
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
//# sourceMappingURL=e11f5bb882714dccb8dbebad474917d7bb694564.js.map