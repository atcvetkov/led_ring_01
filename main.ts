function effect_1 () {
    colors = [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue)]
    list = [10, 50]
    one = 0
    while (true) {
        range2 = strip.range(one, 1)
        range2.showColor(colors._pickRandom())
        basic.pause(100)
        one += 1
        strip.clear()
        if (one > 23) {
            one = 0
        }
    }
}
function effect_2 () {
    strip.setBrightness(10)
    while (true) {
        strip.showBarGraph(input.soundLevel(), 100)
        strip.show()
        basic.pause(5)
        strip.clear()
    }
}
let range2: neopixel.Strip = null
let one = 0
let list: number[] = []
let colors: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
effect_1()
