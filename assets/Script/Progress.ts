import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ProgressBar')
export class Progress extends Component {
    @property(Label)
    private labelProgress: Label;

    @property(ProgressBar)
    private progressBar: ProgressBar;

    protected onLoad(): void {
        this.progressBar.progress = 0.1;
    }

    public toValue(titleLabel: string, value: number): void {
        this.labelProgress.string = titleLabel;

        let loop = setInterval(() => {
            this.progressBar.progress += 0.01;
            if (this.progressBar.progress >= value) clearInterval(loop);
        }, 20)
    }

    public showNode(): void {
        this.node.active = true;
    }

    public hideNode(): void {
        this.node.active = false;
    }
}

