import { _decorator, AudioClip, AudioSource, Button, Component, Node, Sprite, SpriteFrame } from 'cc';
import { GameData } from './Utils/GameData';
import { AudioType } from './Utils/DataTypes';
const { ccclass, property } = _decorator;

@ccclass('AudioController')
export class AudioController extends Component {
    @property({
        type: Button,
        tooltip: 'Button audio'
    })
    private buttonAudio: Button;

    @property({
        type: Sprite,
        tooltip: 'Sprite audio'
    })
    private spriteAudio: Sprite;

    @property({
        type: SpriteFrame,
        tooltip: 'Sprite frame audio on'
    })
    private spriteOnAudio: SpriteFrame;

    @property({
        type: SpriteFrame,
        tooltip: 'Sprite frame audio off'
    })
    private spriteOffAudio: SpriteFrame;

    @property({
        type: Button,
        tooltip: 'List button'
    })
    private listButton: Button[] = [];

    @property({
        type: AudioClip,
        tooltip: 'List audio clip'
    })
    private listAudioClip: AudioClip[] = [];

    @property({
        type: AudioSource,
        tooltip: 'Audio source'
    })
    private audioSource: AudioSource;

    protected onLoad(): void {
        this.updateSpriteAudio();
    }

    protected start(): void {
        this.listButton.map((button) => button.node.on(Button.EventType.CLICK, () => this.playAudio(AudioType.Click)));
        this.buttonAudio.node.on(Button.EventType.CLICK, () => {
            GameData.volume = GameData.volume ? 0 : 1;
            if(GameData.volume){
                this.audioSource.play();
            } else this.audioSource.stop();
            this.updateSpriteAudio();
        })
    }

    public playAudio(type: AudioType): void {
        this.audioSource.playOneShot(this.listAudioClip[type], GameData.volume);
    }

    private updateSpriteAudio(): void {
        this.spriteAudio.spriteFrame = GameData.volume ? this.spriteOnAudio : this.spriteOffAudio;
    }
}

