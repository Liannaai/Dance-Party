controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(130, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    givelife += 1
    if (givelife == 5) {
        info.changeLifeBy(1)
        givelife = 0
        mySprite.say("1 more heart!!!!!", 1000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.splash("Oops...", "To0 bad")
    game.over(false, effects.splatter)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
    mySprite.say("Ouch...", 1000)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let givelife = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a000800010202020202020202030809090909090909090408090909090909090904080909090909090909040809090909090909090408090909090909090904070505050505050505060a0a0a0a0a0a0a0a0a0a`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . b c c a . . 
    . b c c a . . . 
    . a c a . . b a 
    . a c a . b b a 
    . . a b a a a . 
    . . . a b a . . 
    b b . . a c a . 
    a b b a c c a . 
    . a a c c a . . 
    . a c c a . . . 
    . a c a . a b . 
    . a c a . a b b 
    . . a b a . a a 
    . . . a b a . . 
    . . . . a c a . 
    . . . b c c a . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
let speed = 40
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(1000, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 1 1 9 9 9 9 9 9 
            9 9 9 9 1 a 1 9 9 9 9 9 9 
            9 9 9 1 a a 1 1 1 1 1 1 9 
            9 9 1 a f a a a a a a 1 9 
            9 1 a f b f c c c c a 1 9 
            9 9 1 a f a a a a a a 1 9 
            9 9 9 1 a a 1 1 1 1 1 1 9 
            9 9 9 9 1 a 1 9 9 9 9 9 9 
            9 9 9 9 9 1 1 9 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 1 a 1 9 9 9 9 9 
            9 9 9 9 1 a f a 1 9 9 9 9 
            9 9 9 1 a f b f a 1 9 9 9 
            9 9 1 a a a f a a a 1 9 9 
            9 1 1 1 1 a c a 1 1 1 1 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a a a 1 9 9 9 9 
            9 9 9 9 1 1 1 1 1 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 1 1 1 1 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 9 9 9 1 a c a 1 9 9 9 9 
            9 1 1 1 1 a c a 1 1 1 1 9 
            9 9 1 a a a f a a a 1 9 9 
            9 9 9 1 a f b f a 1 9 9 9 
            9 9 9 9 1 a f a 1 9 9 9 9 
            9 9 9 9 9 1 a 1 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 9 1 1 9 9 9 9 9 
            9 9 9 9 9 9 1 a 1 9 9 9 9 
            9 1 1 1 1 1 1 a a 1 9 9 9 
            9 1 a a a a a a f a 1 9 9 
            9 1 a c c c c f b f a 1 9 
            9 1 a a a a a a f a 1 9 9 
            9 1 1 1 1 1 1 a a 1 9 9 9 
            9 9 9 9 9 9 1 a 1 9 9 9 9 
            9 9 9 9 9 9 1 1 9 9 9 9 9 
            9 9 9 9 9 9 1 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
forever(function () {
    music.playMelody("C5 B A G F E D C ", 322)
})
