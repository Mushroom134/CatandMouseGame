namespace SpriteKind {
    export const littlemouse = SpriteKind.create()
    export const KittyCat = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Rose = SpriteKind.create()
    export const Door2 = SpriteKind.create()
    export const Door3 = SpriteKind.create()
}
function More_Mazes (Even_More_Mazes: number) {
    tiles.setCurrentTilemap(tilemap`level2`)
    last_row = 63
    Last_Column = 63
    cursor = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(cursor, tiles.getTileLocation(0, 0))
    scene.cameraFollowSprite(cursor)
    Youvebeenhere = [cursor.tilemapLocation()]
    while (Youvebeenhere.length > 0) {
        WhereYouAre = Youvebeenhere.pop()
        tiles.placeOnTile(cursor, WhereYouAre)
        tiles.setTileAt(WhereYouAre, sprites.dungeon.darkGroundCenter)
        MaybeHere = []
        list = cursor.tilemapLocation()
        if (WhereYouAre.column < Last_Column && cursor.tileKindAt(TileDirection.Right, assets.tile`transparency16`)) {
            MaybeHere.push(tiles.getTileLocation(WhereYouAre.column + 1, WhereYouAre.row))
        }
        if (WhereYouAre.column > Last_Column && cursor.tileKindAt(TileDirection.Left, assets.tile`transparency16`)) {
            MaybeHere.push(tiles.getTileLocation(WhereYouAre.column - 1, WhereYouAre.row))
        }
        if (WhereYouAre.column > Last_Column && cursor.tileKindAt(TileDirection.Top, assets.tile`transparency16`)) {
            MaybeHere.push(tiles.getTileLocation(WhereYouAre.column, WhereYouAre.row - 1))
        }
        if (WhereYouAre.column < Last_Column && cursor.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            MaybeHere.push(tiles.getTileLocation(WhereYouAre.column, WhereYouAre.row + 1))
        }
        tentacle = cursor.tilemapLocation()
        while (MaybeHere.length > 0) {
            tiles.placeOnTile(cursor, MaybeHere._pickRandom())
            Count = 0
            if (cursor.tileKindAt(TileDirection.Left, sprites.dungeon.darkGroundCenter)) {
                Count += 1
            }
            if (cursor.tileKindAt(TileDirection.Top, sprites.dungeon.darkGroundCenter)) {
                Count += 1
            }
            if (cursor.tileKindAt(TileDirection.Right, sprites.dungeon.darkGroundCenter)) {
                Count += 1
            }
            if (cursor.tileKindAt(TileDirection.Bottom, sprites.dungeon.darkGroundCenter)) {
                Count += 1
            }
        }
    }
    MazeFloor = tiles.getTilesByType(sprites.dungeon.darkGroundCenter)
    Walls = tiles.getTilesByType(assets.tile`transparency16`)
    if (Even_More_Mazes == 2) {
        for (let Value2 of MazeFloor) {
            tiles.setTileAt(Value2, assets.tile`myTile1`)
        }
    }
    if (Even_More_Mazes == 3) {
        for (let Value22 of MazeFloor) {
            tiles.setTileAt(Value22, assets.tile`myTile0`)
        }
    }
    for (let Value23 of Walls) {
        if (Even_More_Mazes == 2) {
            tiles.setTileAt(Value23, assets.tile`myTile2`)
        } else if (Even_More_Mazes == 3) {
            tiles.setTileAt(Value23, assets.tile`myTile3`)
        } else {
            tiles.setTileAt(Value23, assets.tile`myTile`)
        }
    }
}
sprites.onOverlap(SpriteKind.littlemouse, SpriteKind.Door, function (sprite, otherSprite) {
    EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    while (!(EvenMoremazes <= 3 && EvenMoremazes >= 1)) {
        EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    }
    More_Mazes(EvenMoremazes)
})
sprites.onOverlap(SpriteKind.littlemouse, SpriteKind.Rose, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)) && otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e 2 2 e . . . . . . 
        . . e e e e e 2 2 e e e e . . . 
        . . e 2 2 2 e e e 2 2 2 2 e . . 
        . . e 2 2 e e e 2 e e e e e . . 
        . . e e e e 2 e e e 2 2 e . . . 
        . . . e e 2 2 e e 2 2 2 e . . . 
        . . e e 2 2 2 e 2 2 2 2 e 7 . . 
        . . e e e 2 e e 2 2 2 2 e 7 . . 
        . . . . e e e e e 2 2 e e 7 . . 
        . . . . . e e 2 e e 2 e 7 7 . . 
        . . . . . . e e e e e e 7 7 . . 
        . . . . . . . . . . . 7 7 . . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Rose, effects.starField, 500)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 4) {
        game.setGameOverMessage(true, "The Mouse Wins")
        game.gameOver(true)
    }
})
function Rose_and_book_Placement () {
    if (EvenMoremazes == 1) {
        tiles.placeOnRandomTile(Book_1, sprites.dungeon.darkGroundCenter)
        tiles.placeOnRandomTile(Book_2, sprites.dungeon.darkGroundCenter)
        tiles.placeOnRandomTile(Book_3, sprites.dungeon.darkGroundCenter)
        tiles.placeOnRandomTile(Rose_1, sprites.dungeon.darkGroundCenter)
        tiles.placeOnRandomTile(Rose_2, sprites.dungeon.darkGroundCenter)
        tiles.placeOnRandomTile(Rose_3, sprites.dungeon.darkGroundCenter)
    }
    if (EvenMoremazes == 1) {
        tiles.placeOnRandomTile(Book_1, assets.tile`myTile1`)
        tiles.placeOnRandomTile(Book_2, assets.tile`myTile1`)
        tiles.placeOnRandomTile(Book_3, assets.tile`myTile1`)
        tiles.placeOnRandomTile(Rose_1, assets.tile`myTile1`)
        tiles.placeOnRandomTile(Rose_2, assets.tile`myTile1`)
        tiles.placeOnRandomTile(Rose_3, assets.tile`myTile1`)
    }
    if (EvenMoremazes == 3) {
        tiles.placeOnRandomTile(Book_1, assets.tile`myTile0`)
        tiles.placeOnRandomTile(Book_2, assets.tile`myTile0`)
        tiles.placeOnRandomTile(Book_3, assets.tile`myTile0`)
        tiles.placeOnRandomTile(Rose_1, assets.tile`myTile0`)
        tiles.placeOnRandomTile(Rose_2, assets.tile`myTile0`)
        tiles.placeOnRandomTile(Rose_3, assets.tile`myTile0`)
    }
}
sprites.onOverlap(SpriteKind.littlemouse, SpriteKind.KittyCat, function (sprite, otherSprite) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    game.setGameOverMessage(true, "The Cat Wins")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door3, function (sprite, otherSprite) {
    EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    while (!(EvenMoremazes <= 3 && EvenMoremazes >= 1)) {
        EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    }
    More_Mazes(EvenMoremazes)
})
function RoseDoor_Placement () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Door)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Book_1 = sprites.create(img`
        . . . . . e e e e e e e e . . . 
        . . . . e d d d d d d d e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b . . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Door)
    Book_2 = sprites.create(img`
        . . . . . e e e e e e e e . . . 
        . . . . e d d d d d d d e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b . . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Door2)
    Book_3 = sprites.create(img`
        . . . . . e e e e e e e e . . . 
        . . . . e d d d d d d d e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e f f f f f f e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b e . . . 
        . . . e e e e e e e e b . . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Door3)
    Rose_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e 2 2 e . . . . . . 
        . . e e e e e 2 2 e e e e . . . 
        . . e 2 2 2 e e e 2 2 2 2 e . . 
        . . e 2 2 e e e 2 e e e e e . . 
        . . e e e e 2 e e e 2 2 e . . . 
        . . . e e 2 2 e e 2 2 2 e . . . 
        . . e e 2 2 2 e 2 2 2 2 e 7 . . 
        . . e e e 2 e e 2 2 2 2 e 7 . . 
        . . . . e e e e e 2 2 e e 7 . . 
        . . . . . e e 2 e e 2 e 7 7 . . 
        . . . . . . e e e e e e 7 7 . . 
        . . . . . . . . . . . 7 7 . . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Rose)
    Rose_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e 2 2 e . . . . . . 
        . . e e e e e 2 2 e e e e . . . 
        . . e 2 2 2 e e e 2 2 2 2 e . . 
        . . e 2 2 e e e 2 e e e e e . . 
        . . e e e e 2 e e e 2 2 e . . . 
        . . . e e 2 2 e e 2 2 2 e . . . 
        . . e e 2 2 2 e 2 2 2 2 e 7 . . 
        . . e e e 2 e e 2 2 2 2 e 7 . . 
        . . . . e e e e e 2 2 e e 7 . . 
        . . . . . e e 2 e e 2 e 7 7 . . 
        . . . . . . e e e e e e 7 7 . . 
        . . . . . . . . . . . 7 7 . . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Rose)
    Rose_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e 2 2 e . . . . . . 
        . . e e e e e 2 2 e e e e . . . 
        . . e 2 2 2 e e e 2 2 2 2 e . . 
        . . e 2 2 e e e 2 e e e e e . . 
        . . e e e e 2 e e e 2 2 e . . . 
        . . . e e 2 2 e e 2 2 2 e . . . 
        . . e e 2 2 2 e 2 2 2 2 e 7 . . 
        . . e e e 2 e e 2 2 2 2 e 7 . . 
        . . . . e e e e e 2 2 e e 7 . . 
        . . . . . e e 2 e e 2 e 7 7 . . 
        . . . . . . e e e e e e 7 7 . . 
        . . . . . . . . . . . 7 7 . . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Rose)
    tiles.placeOnRandomTile(Book_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Book_2, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Book_3, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Rose_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Rose_2, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Rose_3, sprites.dungeon.floorDarkDiamond)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door2, function (sprite, otherSprite) {
    EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    while (!(EvenMoremazes <= 3 && EvenMoremazes >= 1)) {
        EvenMoremazes = game.askForNumber("Maze 1, 2 or 3", 1)
    }
    More_Mazes(EvenMoremazes)
})
let Rose_3: Sprite = null
let Rose_2: Sprite = null
let Rose_1: Sprite = null
let Book_3: Sprite = null
let Book_2: Sprite = null
let Book_1: Sprite = null
let EvenMoremazes = 0
let Walls: tiles.Location[] = []
let MazeFloor: tiles.Location[] = []
let Count = 0
let tentacle: tiles.Location = null
let list: tiles.Location = null
let MaybeHere: tiles.Location[] = []
let WhereYouAre: tiles.Location = null
let Youvebeenhere: tiles.Location[] = []
let cursor: Sprite = null
let Last_Column = 0
let last_row = 0
game.showLongText("Mouse collects the roses to win, Dont let the cat catch you. The books take you to new mazes for more roses. Hint: There are fake walls if you know how to find them.", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
splitScreen.setSplitScreenEnabled(true)
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.HorizontalTopHalf)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.HorizontalBottomHalf)
splitScreen.setBorderColor(15)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d d . . . . . . . . . . 
    . . . d 3 3 d . . . . . . . . . 
    . . . d 3 3 d . . . . . . . . . 
    . . . . d 3 d . 1 1 1 d . . . . 
    . . . d d d . 1 d d d d d . . . 
    . . d f d d 1 d d d d b d d . . 
    . f d d d d d d d d b d d d . . 
    . . . . . d d d d d b d d 3 . . 
    . . . d d d 3 d d b d d d 3 . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.littlemouse))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(62, 1))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.KittyCat))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(62, 62))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 640
}
RoseDoor_Placement()
