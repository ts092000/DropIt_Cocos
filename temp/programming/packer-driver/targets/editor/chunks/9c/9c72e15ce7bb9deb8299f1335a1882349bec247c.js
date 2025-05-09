System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, _crd;

  function _reportPossibleCrUseOfLimit(extras) {
    _reporterNs.report("Limit", "./DataTypes", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad4c0D1B/ZBY5AVn9pJuISL", "Constants", undefined);

      _export("default", Constants = class Constants {});

      Constants.SCENE_NAME = {
        BEGIN: 'Begin',
        GAME: 'Game',
        ENTRY: 'Entry'
      };
      Constants.SQUARE_SIZE = {
        HEIGHT: 37,
        WIDTH: 37
      };
      Constants.BOARD_SIZE = {
        ROW: 10,
        COL: 8
      };
      Constants.NODE_NAME = {
        GameClient: 'GameClient'
      };
      Constants.DEFAULT_LIMIT_POSITION = {
        Min: 0,
        Max: 37 * 8
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c72e15ce7bb9deb8299f1335a1882349bec247c.js.map