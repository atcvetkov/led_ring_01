function effect_7 () {
    for (let bright = 0; bright <= 200; bright++) {
        ring.setBrightness(bright)
        ring.showRainbow(1, 360)
        basic.pause(5)
        ring.clear()
    }
    for (let bright = 0; bright <= 200; bright++) {
        ring.setBrightness(200 - bright)
        ring.showRainbow(1, 360)
        basic.pause(5)
        ring.clear()
    }
}
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
    ring.setBrightness(200)
    while (effect_num == 1) {
        ring.showBarGraph(input.soundLevel(), 100)
        ring.show()
        basic.pause(5)
        ring.clear()
    }
}
input.onButtonPressed(Button.A, function () {
    if (effect_num > 1) {
        effect_num += -1
        basic.showNumber(effect_num)
    }
})
function effect_5 () {
    ring.setBrightness(200)
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Orange))
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Purple))
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Red))
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Yellow))
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Blue))
    ring.setPixelColor(randint(0, 23), neopixel.colors(NeoPixelColors.Green))
    ring.show()
    basic.pause(100)
    ring.clear()
}
function effect_6 () {
    led_id_1 = randint(0, 23)
    led_id_2 = randint(0, 23)
    led_id_3 = randint(0, 23)
    led_id_4 = randint(0, 23)
    led_id_5 = randint(0, 23)
    for (let bright = 0; bright <= 200; bright++) {
        ring.setBrightness(200 - bright)
        ring.setPixelColor(led_id_1, neopixel.colors(NeoPixelColors.Red))
        ring.setPixelColor(led_id_2, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(led_id_3, neopixel.colors(NeoPixelColors.Blue))
        ring.setPixelColor(led_id_4, neopixel.colors(NeoPixelColors.Purple))
        ring.setPixelColor(led_id_5, neopixel.colors(NeoPixelColors.Yellow))
        ring.show()
        basic.pause(1)
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
input.onButtonPressed(Button.AB, function () {
    effect_num = 0
})
input.onButtonPressed(Button.B, function () {
    if (effect_num < 3) {
        effect_num += 1
        basic.showNumber(effect_num)
    }
})
function effect_multiple () {
    for (let index = 0; index < 3; index++) {
        effect_7()
    }
    for (let index = 0; index < 5; index++) {
        effect_6()
    }
    for (let index = 0; index < 10; index++) {
        effect_4()
    }
}
function effect_4 () {
    ring.setBrightness(200)
    for (let index = 0; index <= 23; index++) {
        ring.setBrightness(input.soundLevel() + 50)
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
        ring.setPixelColor(color_10_index, neopixel.rgb(0, 50, 0))
        ring.setPixelColor(color_11_index, neopixel.rgb(0, 150, 0))
        ring.setPixelColor(color_12_index, neopixel.colors(NeoPixelColors.Green))
        ring.setPixelColor(color_20_index, neopixel.rgb(50, 0, 0))
        ring.setPixelColor(color_21_index, neopixel.rgb(150, 0, 0))
        ring.setPixelColor(color_22_index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(30)
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
let led_id_5 = 0
let led_id_4 = 0
let led_id_3 = 0
let led_id_2 = 0
let led_id_1 = 0
let range2: neopixel.Strip = null
let one = 0
let list: number[] = []
let colors: number[] = []
let ring: neopixel.Strip = null
let effect_num = 0
effect_num = 0
ring = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (effect_num == 0) {
        basic.showIcon(IconNames.Heart)
        ring.clear()
        ring.show()
    } else if (effect_num == 1) {
        effect_2()
    } else if (effect_num == 2) {
        effect_5()
    } else if (effect_num == 3) {
        effect_4()
    }
})
