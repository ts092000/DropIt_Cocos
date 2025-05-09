import { Limit } from "./DataTypes"

export default class Constants {
    public static readonly SCENE_NAME = {
        BEGIN: 'Begin',
        GAME: 'Game',
        ENTRY: 'Entry'
    }

    public static readonly SQUARE_SIZE = {
        HEIGHT: 37,
        WIDTH: 37
    }

    public static readonly BOARD_SIZE = {
        ROW: 10,
        COL: 8
    }

    public static NODE_NAME = {
        GameClient: 'GameClient'
    }

    public static readonly DEFAULT_LIMIT_POSITION: Limit = {
        Min: 0,
        Max: 37 * 8
    }
}