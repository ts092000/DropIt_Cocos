import { _decorator, Component, Node, Label } from 'cc';
import { GameData } from '../Utils/GameData';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {
    @property({
        type: Label,
        tooltip: 'Label score'
    })
    private labelScore: Label;

    @property({
        type: Label,
        tooltip: 'Label high score'
    })
    private labelHighScore: Label;


    @property({
        type: Label,
        tooltip: 'Label score game over'
    })
    private labelScoreGameOver: Label;

    @property({
        type: Label,
        tooltip: 'Label high score game over'
    })
    private labelHighScoreGameOver: Label;

    private score: number = 0;

    protected start(): void {
        this.setLabelScore();
        this.setLabelHighScore();
    }

    public addScore(score: number): void {
        this.score += score;
        this.setLabelScore();

        if (this.score > GameData.gameData.HighScore) {
            GameData.gameData.HighScore = this.score;
            this.setLabelHighScore();
        }
    }

    private setLabelHighScore(): void {
        this.labelHighScore.string = `${GameData.gameData.HighScore}`
    }

    private setLabelScore(): void {
        this.labelScore.string = `${this.score}`;
    }

    public setLabelGameOver(): void {
        this.labelScoreGameOver.string = `${this.score}`;
        this.labelHighScoreGameOver.string = `${GameData.gameData.HighScore}`;
    }

    public getScore(): number {
        return this.score;
    }
}

