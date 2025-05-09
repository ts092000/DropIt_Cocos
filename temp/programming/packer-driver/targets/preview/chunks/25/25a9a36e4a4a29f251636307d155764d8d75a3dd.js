System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BlockColor, AudioType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df340tnFoxCJ5rTxhPJatXh", "DataTypes", undefined);

      _export("BlockColor", BlockColor = /*#__PURE__*/function (BlockColor) {
        BlockColor[BlockColor["Red"] = 0] = "Red";
        BlockColor[BlockColor["Green"] = 1] = "Green";
        BlockColor[BlockColor["Blue"] = 2] = "Blue";
        BlockColor[BlockColor["Violet"] = 3] = "Violet";
        return BlockColor;
      }({}));

      _export("AudioType", AudioType = /*#__PURE__*/function (AudioType) {
        AudioType[AudioType["Click"] = 0] = "Click";
        AudioType[AudioType["Drag"] = 1] = "Drag";
        AudioType[AudioType["Dragend"] = 2] = "Dragend";
        AudioType[AudioType["Drop"] = 3] = "Drop";
        AudioType[AudioType["GameOver"] = 4] = "GameOver";
        AudioType[AudioType["Push"] = 5] = "Push";
        AudioType[AudioType["Remove"] = 6] = "Remove";
        return AudioType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25a9a36e4a4a29f251636307d155764d8d75a3dd.js.map