input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
let index = 0
let obstacles: number[] = []
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (false) {
    	
    }
})
