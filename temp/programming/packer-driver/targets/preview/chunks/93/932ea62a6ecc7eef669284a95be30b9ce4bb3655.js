System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, _crd;

  function _reportPossibleCrUseOfDataUser(extras) {
    _reporterNs.report("DataUser", "./DataTypes", _context.meta, extras);
  }

  _export("GameData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2de7eyW4oBJkauT+4t3uATZ", "GameData", undefined);

      _export("GameData", GameData = class GameData {});

      GameData.gameData = {
        HighScore: 0,
        checkLog: {}
      };
      GameData.volume = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=932ea62a6ecc7eef669284a95be30b9ce4bb3655.js.map