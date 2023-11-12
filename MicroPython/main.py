"""
Created by: Liya G
Created on: Nov 2023
This module is a Micro:bit MicroPython program moves the servo back and forth.
"""

from microbit import *


# variables
servo = 0

# set up
display.clear()
display.show(Image.HOUSE)

# loop
while True:
    if button_a.is_pressed():
        servo = pin16.set_analog_period(1)
        display.clear()
        display.scroll("0")
        display.show(Image.SMILE)

        # when motor finishes turn
        display.clear()
        display.show(Image.SMILE)

    if button_b.is_pressed():
        pin16.set_analog_period(2)
        display.clear()
        display.scroll("0")
        display.show(Image.SMILE)

        # when motor finishes turn
        display.clear()
        display.show(Image.SMILE)
