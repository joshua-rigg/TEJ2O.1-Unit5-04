/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// variable
let neopixelStrip: neopixel.Strip = null

// clear screen
basic.clearScreen()

neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// turn all 4 pixels off
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// show happyface
basic.showIcon(IconNames.Happy)

// when button "a" is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)

    // turn on Green light and wait for 1 second
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(1000)

    // turn off Green light and turn on Yellow light and wait for 0.5 seconds
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    basic.pause(500)

    // turn off Yellow light and turn on Red light and wait for 1 second
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(1000)

    // turn off Red light
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    // clear screen
    basic.clearScreen()
})
