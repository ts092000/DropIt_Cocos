System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Button, Component, Sprite, SpriteFrame, GameData, AudioType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, AudioController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./Utils/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "./Utils/DataTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }, function (_unresolved_3) {
      AudioType = _unresolved_3.AudioType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2cb9bZEWBJF68Su6+N+phf", "AudioController", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Button', 'Component', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioController", AudioController = (_dec = ccclass('AudioController'), _dec2 = property({
        type: Button,
        tooltip: 'Button audio'
      }), _dec3 = property({
        type: Sprite,
        tooltip: 'Sprite audio'
      }), _dec4 = property({
        type: SpriteFrame,
        tooltip: 'Sprite frame audio on'
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: 'Sprite frame audio off'
      }), _dec6 = property({
        type: Button,
        tooltip: 'List button'
      }), _dec7 = property({
        type: AudioClip,
        tooltip: 'List audio clip'
      }), _dec8 = property({
        type: AudioSource,
        tooltip: 'Audio source'
      }), _dec(_class = (_class2 = class AudioController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "buttonAudio", _descriptor, this);

          _initializerDefineProperty(this, "spriteAudio", _descriptor2, this);

          _initializerDefineProperty(this, "spriteOnAudio", _descriptor3, this);

          _initializerDefineProperty(this, "spriteOffAudio", _descriptor4, this);

          _initializerDefineProperty(this, "listButton", _descriptor5, this);

          _initializerDefineProperty(this, "listAudioClip", _descriptor6, this);

          _initializerDefineProperty(this, "audioSource", _descriptor7, this);
        }

        onLoad() {
          this.updateSpriteAudio();
        }

        start() {
          this.listButton.map(button => button.node.on(Button.EventType.CLICK, () => this.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Click)));
          this.buttonAudio.node.on(Button.EventType.CLICK, () => {
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).volume = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).volume ? 0 : 1;

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).volume) {
              this.audioSource.play();
            } else this.audioSource.stop();

            this.updateSpriteAudio();
          });
        }

        playAudio(type) {
          this.audioSource.playOneShot(this.listAudioClip[type], (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).volume);
        }

        updateSpriteAudio() {
          this.spriteAudio.spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).volume ? this.spriteOnAudio : this.spriteOffAudio;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteOnAudio", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteOffAudio", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listAudioClip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec8], {
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
//# sourceMappingURL=5ed473397b3d4a2feda1bd8be975b08f8276715c.js.map