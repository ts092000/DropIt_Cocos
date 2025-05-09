System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, NodePool, Prefab, Block, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PoolManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBlock(extras) {
    _reporterNs.report("Block", "../PrefabManager/Block", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Block = _unresolved_2.Block;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72f8ebgEiFLd4GjTqytslhq", "PoolManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodePool', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec2 = property({
        type: Prefab,
        tooltip: 'Prefab block'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Node animation clear'
      }), _dec4 = property(Prefab), _dec(_class = (_class2 = class PoolManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabBlock", _descriptor, this);

          _initializerDefineProperty(this, "animationClearNode", _descriptor2, this);

          _initializerDefineProperty(this, "prefabAnimation", _descriptor3, this);

          this.poolBlock = new NodePool();
          this.poolClear = new NodePool();
          this.poolAnim = new NodePool();
        }

        start() {
          this.initPoolBlock();
          this.initPoolClear();
        }

        initPoolBlock() {
          for (let i = 0; i < 20; i++) {
            let element = instantiate(this.prefabBlock);
            this.poolBlock.put(element);
          }
        }

        getBlock() {
          let element = this.poolBlock.size() > 0 ? this.poolBlock.get() : instantiate(this.prefabBlock);
          return element;
        }

        removeBlock(block) {
          block.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).resetBlock();
          this.poolBlock.put(block);
        }

        initPoolClear() {
          while (this.poolClear.size() < 10) this.poolClear.put(instantiate(this.animationClearNode));
        }

        getClearNode() {
          return this.poolClear.size() > 0 ? this.poolClear.get() : instantiate(this.animationClearNode);
        }

        putClearNode(clearNode) {
          this.poolClear.put(clearNode);
        }

        getAnimationCombo() {
          return this.poolAnim.size() > 0 ? this.poolAnim.get() : instantiate(this.prefabAnimation);
        }

        putAnimation(node) {
          this.poolAnim.put(node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabBlock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationClearNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabAnimation", [_dec4], {
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
//# sourceMappingURL=c487b0f9febe9902e36c7426004065696b5853e8.js.map