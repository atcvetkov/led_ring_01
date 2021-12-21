function effect_1 () {
    basic.showNumber(1)
    colors = [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue)]
    list = [10, 50]
    one = 0
    while (true) {
        range2 = ring.range(one, 1)
        range2.showColor(colors._pickRandom())
        basic.pause(100)
        one += 1
        ring.clear()
        if (one > 23) {
            one = 0
        }
    }
}
function effect_2 () {
    basic.showNumber(2)
    ring.setBrightness(10)
    while (true) {
        ring.showBarGraph(input.soundLevel(), 100)
        ring.show()
        basic.pause(5)
        ring.clear()
    }
}
function effect_3 () {
    ring.setBrightness(10)
    for (let index = 0; index <= 23; index++) {
        color_1_index = index
        color_2_index = index + 12
        if (color_2_index > 23) {
            color_2_index = color_2_index - 24
        }
        ring.setPixelColor(color_1_index, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(color_2_index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(30)
        ring.clear()
    }
}
function effect_4 () {
    ring.setBrightness(10)
    for (let index = 0; index <= 23; index++) {
        color_10_index = index
        color_11_index = color_10_index + 1
        color_12_index = color_10_index + 2
        color_20_index = index + 12
        color_21_index = color_20_index + 1
        color_22_index = color_20_index + 2
        if (color_11_index > 23) {
            color_11_index = color_11_index - 24
        }
        if (color_12_index > 23) {
            color_12_index = color_12_index - 24
        }
        if (color_20_index > 23) {
            color_20_index = color_20_index - 24
        }
        if (color_21_index > 23) {
            color_21_index = color_21_index - 24
        }
        if (color_22_index > 23) {
            color_22_index = color_22_index - 24
        }
        ring.setPixelColor(color_10_index, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(color_11_index, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(color_12_index, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(color_20_index, neopixel.colors(NeoPixelColors.Red))
        ring.setPixelColor(color_21_index, neopixel.colors(NeoPixelColors.Red))
        ring.setPixelColor(color_22_index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(100)
        ring.clear()
    }
}
let color_22_index = 0
let color_21_index = 0
let color_20_index = 0
let color_12_index = 0
let color_11_index = 0
let color_10_index = 0
let color_2_index = 0
let color_1_index = 0
let range2: neopixel.Strip = null
let one = 0
let list: number[] = []
let colors: number[] = []
let ring: neopixel.Strip = null
ring = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    effect_4()
})
