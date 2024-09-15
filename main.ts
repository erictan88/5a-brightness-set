input.onButtonPressed(Button.A, function () {
    Brightness += -10
    led.setBrightness(Brightness)
})
input.onButtonPressed(Button.B, function () {
    Brightness += 10
    led.setBrightness(Brightness)
})
let Brightness = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
led.setBrightness(50)
basic.forever(function () {
	
})
