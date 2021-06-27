info.onCountdownEnd(function () {
    if (info.score() >= 10) {
        game.showLongText("有情人終成眷屬", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("喔不       別走", DialogLayout.Bottom)
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    寶貝.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    帥帥.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(-1)
})
let 寶貝: Sprite = null
let 帥帥: Sprite = null
scene.setBackgroundColor(9)
game.splash("女友追逐戰")
game.splash("你得在岳父的阻止下追到她10次")
info.setScore(0)
info.startCountdown(13.14)
scene.setBackgroundColor(8)
帥帥 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f 2 f f f . . 
    f f f f 2 f f f 2 2 f f . 
    f 2 f f 2 2 f f f 2 2 f f 
    f 2 2 f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(帥帥)
帥帥.setStayInScreen(true)
寶貝 = sprites.create(img`
    ................
    .....5..........
    ..5..5..5.......
    ..5555555.......
    ..33e3e33.......
    .33aeea33.......
    ...aeea333......
    ...eeeee33......
    ...77ee7.33.....
    ...97979.333....
    ...99fee.3333...
    ...999ee9.333...
    ...999ee9..333..
    ...999eea9......
    ..99aaeea9......
    ..8888ee889.....
    .55555e55559....
    9999999999993...
    ......ee........
    .....eee........
    `, SpriteKind.Projectile)
寶貝.setPosition(randint(10, 150), randint(10, 110))
let 岳父 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b 8 e e a b f f f . 
    . f 4 1 8 4 4 a 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Food)
岳父.setPosition(randint(10, 150), randint(10, 110))
game.showLongText("我是她爸爸，別想當她男友", DialogLayout.Bottom)
game.onUpdateInterval(1314, function () {
    岳父.setPosition(randint(10, 150), randint(10, 110))
})
