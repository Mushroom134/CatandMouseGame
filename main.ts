namespace SpriteKind {
    export const littlemouse = SpriteKind.create()
    export const KittyCat = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Rose = SpriteKind.create()
    export const Door2 = SpriteKind.create()
    export const Door3 = SpriteKind.create()
    export const Rose2 = SpriteKind.create()
    export const Rose3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rose2, function (sprite, otherSprite) {
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
        sprites.destroy(otherSprite, effects.starField, 500)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 4) {
        game.setGameOverMessage(true, "The Mouse Wins")
        game.gameOver(true)
    }
})
function Enemies (who_do_you_want_to_deal_with: number) {
    List_of_things_to_run_from = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f . 
        . . . . . f f f f f . f f f . . 
        . . . . f f 2 f f f . . . . . . 
        . . . . f f f f f f . . . . f . 
        . . . . . f f f f f . . . . f . 
        . . . . . . f f f f . . f f f . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        f f . . f f f f f f f f f . . . 
        . f f f . . f f f f f f f . . . 
        . . . . f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f f 
        . f f f . . . f f f f f . f f f 
        . . f . f . . f f f f . f . . . 
        . . . . . f . . f f . . . . . f 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f 2 . 
        . . . . . c f f f f f f f f 2 . 
        . . . . . c f f f f f f f f 2 . 
        . . . . . c f f f f f f f f 2 . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . c c c c c c c c c c c c c c . 
        . . f d d f . . . . f d d f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . 4 4 . . . 
        4 4 4 4 4 . . . . . 4 4 4 4 . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 4 4 4 4 4 d d d d 4 4 4 4 4 . 
        4 4 4 4 4 d 6 d d 6 d . 4 4 4 4 
        4 4 4 . . d d d d d d . . 4 4 4 
        4 4 4 . . d d d d d d . . 4 4 4 
        4 4 . . . . d d d d . . . . 4 4 
        4 4 . e . . e 9 9 d . . . . 4 4 
        4 . . d e e 9 9 9 9 d . . . . 4 
        4 . d e f f e 9 9 9 d d d . . . 
        . . d e e e e 9 9 9 9 9 d d . . 
        . . d d d d d 9 9 9 9 9 9 d d . 
        . . . 9 e e e 9 9 9 9 9 9 . d . 
        . . . e e e e 9 9 9 9 . . . . . 
        . . . e e . d . . d . . . . . . 
        `]
    return List_of_things_to_run_from[who_do_you_want_to_deal_with - 1]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rose3, function (sprite, otherSprite) {
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
        sprites.destroy(otherSprite, effects.starField, 500)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 4) {
        game.setGameOverMessage(true, "The Mouse Wins")
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    test_imput = game.askForNumber("What new problem are you dealing with 1 2 or 3?", 1)
    while (!(test_imput >= 1 && test_imput <= 3)) {
        test_imput = game.askForNumber("What new problem are you dealing with 1 2 or 3?", 1)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Door)
    tiles.setCurrentTilemap(Enemies2(test_imput))
    Chasing = sprites.create(Enemies(test_imput), SpriteKind.Enemy)
    Chasing.setFlag(SpriteFlag.GhostThroughWalls, true)
    Chasing.setPosition(0, 0)
    Chasing.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
})
function Enemies2 (who_do_you_want_to_deal_with: number) {
    Place_to_run_in = [tilemap`level13`, tilemap`level15`, tilemap`level16`]
    return Place_to_run_in[who_do_you_want_to_deal_with - 1]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rose, function (sprite, otherSprite) {
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
        sprites.destroy(otherSprite, effects.starField, 500)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 4) {
        game.setGameOverMessage(true, "The Mouse Wins")
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    game.setGameOverMessage(true, "The Cat Wins")
    game.gameOver(true)
})
function RoseDoor_Placement () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Door)
    sprites.destroyAllSpritesOfKind(SpriteKind.Door2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Rose)
    sprites.destroyAllSpritesOfKind(SpriteKind.Rose2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Rose3)
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
    tiles.placeOnRandomTile(Book_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Book_2, sprites.dungeon.floorDarkDiamond)
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
        `, SpriteKind.Rose2)
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
        `, SpriteKind.Rose3)
    tiles.placeOnRandomTile(Rose_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Rose_2, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Rose_3, sprites.dungeon.floorDarkDiamond)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door2, function (sprite, otherSprite) {
    test_imput = game.askForNumber("What new problem are you dealing with 1 2 or 3?", 1)
    while (!(test_imput >= 1 && test_imput <= 3)) {
        test_imput = game.askForNumber("What new problem are you dealing with 1 2 or 3?", 1)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Door)
    tiles.setCurrentTilemap(Enemies2(test_imput))
    Chasing = sprites.create(Enemies(test_imput), SpriteKind.Enemy)
    Chasing.setFlag(SpriteFlag.GhostThroughWalls, true)
    Chasing.setPosition(0, 0)
    Chasing.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
})
let Rose_3: Sprite = null
let Rose_2: Sprite = null
let Rose_1: Sprite = null
let Book_2: Sprite = null
let Book_1: Sprite = null
let Place_to_run_in: tiles.TileMapData[] = []
let Chasing: Sprite = null
let test_imput = 0
let List_of_things_to_run_from: Image[] = []
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
    `, SpriteKind.Player))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(62, 1))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . f . . . . f . . . . . . . . . 
    . f f . . f f . . . . f f f . . 
    . f f f f f f . . . f f f f f . 
    . f c f f 9 f . . . f f . f f f 
    . f f f f f f . . f f . . . . f 
    . f f f f f f . . . . . . . . f 
    . f f f f f f . . . . . . . . f 
    . . f f f f . . . . . . . . . f 
    . f f f f f f . . . . . . . f f 
    . f f f f f f f f f f f f f f f 
    . f f f f f f f f f f f f f f f 
    . f f f f f f f f f f f f f f f 
    . f f f f f f f f f f f f f f f 
    . f f . . f f . . . . . f f . f 
    . f f . . f f . . . . . f f . f 
    . f f . . f f . . . . . f f . f 
    `, SpriteKind.Player))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(62, 62))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 200, 200)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 200, 200)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 640
}
RoseDoor_Placement()
