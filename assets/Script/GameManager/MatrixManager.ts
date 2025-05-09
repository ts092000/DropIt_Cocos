import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MatrixManager')
export class MatrixManager extends Component {
    public matrixData: Array<Array<number>> = new Array();

    public fillValue(index: number, value: number, start: number, end: number) {
        let indexRow = this.matrixData.length - index - 2;
        this.matrixData[indexRow].fill(value, start, end);
    }

    public pushArray(array: Array<number>): void {
        this.matrixData.push(array);
    }

    public isEmptySlice(start: number, end: number, row: number, col: number): boolean {
        let indexRow = this.matrixData.length - row - 2;
        let rowData = this.matrixData[indexRow];

        let sliceRow = rowData.slice(start, end);
        for (let i = 0; i < sliceRow.length; i++) {
            if (sliceRow[i] !== 0) return false;
        }
        return true;
    }

    public getRow(indexRow: number): Array<number> {
        let index = this.matrixData.length - indexRow - 2;
        return this.matrixData[index];
    }

    public isEmpty(indexRow: number): boolean {
        for (let i = 0; i < this.matrixData[indexRow].length; i++)
            if (this.matrixData[indexRow][i] === 1) return false;
        return true;
    }

    public getListRowFull(): Array<number> {
        let listRow: Array<number> = new Array();
        for (let i = 0; i < this.matrixData.length; i++)
            if (this.isFull(i)) {
                this.clearRow(i, this.matrixData);
                listRow.push(this.matrixData.length - i - 2);
            }

        return listRow;
    }

    private clearRow(indexRow: number, matrixData: Array<Array<number>>): void {
        for (let i = 0; i < matrixData[indexRow].length; i++) matrixData[indexRow][i] = 0;
    }

    private isFull(indexRow: number): boolean {
        let row = this.matrixData[indexRow];
        for (let i = 0; i < this.matrixData[indexRow].length; i++)
            if (row[i] !== 1) return false;
        return true;
    }

    public getNextRow(indexRow: number, indexCol: number, length: number): number {
        let nextRow = indexRow - 1;
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

    public isMaxRow(): boolean {
        return this.matrixData.length >= 12;
    }

    public isMinRow(): boolean {
        return this.matrixData.length === 1;
    }
}

