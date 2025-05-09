System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, MatrixManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e2deAvcbdNAZ29uZx2Qghb", "MatrixManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MatrixManager", MatrixManager = (_dec = ccclass('MatrixManager'), _dec(_class = class MatrixManager extends Component {
        constructor() {
          super(...arguments);
          this.matrixData = new Array();
        }

        fillValue(index, value, start, end) {
          var indexRow = this.matrixData.length - index - 2;
          this.matrixData[indexRow].fill(value, start, end);
        }

        pushArray(array) {
          this.matrixData.push(array);
        }

        isEmptySlice(start, end, row, col) {
          var indexRow = this.matrixData.length - row - 2;
          var rowData = this.matrixData[indexRow];
          var sliceRow = rowData.slice(start, end);

          for (var i = 0; i < sliceRow.length; i++) {
            if (sliceRow[i] !== 0) return false;
          }

          return true;
        }

        getRow(indexRow) {
          var index = this.matrixData.length - indexRow - 2;
          return this.matrixData[index];
        }

        isEmpty(indexRow) {
          for (var i = 0; i < this.matrixData[indexRow].length; i++) if (this.matrixData[indexRow][i] === 1) return false;

          return true;
        }

        getListRowFull() {
          var listRow = new Array();

          for (var i = 0; i < this.matrixData.length; i++) if (this.isFull(i)) {
            this.clearRow(i, this.matrixData);
            listRow.push(this.matrixData.length - i - 2);
          }

          return listRow;
        }

        clearRow(indexRow, matrixData) {
          for (var i = 0; i < matrixData[indexRow].length; i++) matrixData[indexRow][i] = 0;
        }

        isFull(indexRow) {
          var row = this.matrixData[indexRow];

          for (var i = 0; i < this.matrixData[indexRow].length; i++) if (row[i] !== 1) return false;

          return true;
        }

        getNextRow(indexRow, indexCol, length) {
          var nextRow = indexRow - 1;

          while (nextRow >= 0) {
            if (!this.isEmptySlice(indexCol, indexCol + length, nextRow, indexCol)) {
              nextRow++;
              break;
            }

            nextRow--;
          }

          if (nextRow < 0) nextRow = 0;
          return nextRow;
        }

        isMaxRow() {
          return this.matrixData.length >= 12;
        }

        isMinRow() {
          return this.matrixData.length === 1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1250664a5a9d49a299933b5f9a9d017705c39e5a.js.map