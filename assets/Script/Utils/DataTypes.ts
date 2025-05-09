export enum BlockColor {
    Red,
    Green,
    Blue,
    Violet
}

export type Limit = {
    Min: number,
    Max: number
}

export type DataUser = {
    HighScore: number,
    checkLog: Object
}

export enum AudioType {
    Click,
    Drag,
    Dragend,
    Drop,
    GameOver,
    Push,
    Remove
}

export type LeaderBoard = {
    index: number;
    metadata: {
        avatarUrl: string,
        citizenCode: string,
        citizenName: string,
        username: string
    },
    point: number,
    userId: string
}
