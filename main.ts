/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: liya G
 * Created on: Nov 2023
 * This program moves the servo back and forth.
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.QuarterNote)

// turns servo to 0 degrees
input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servoNumber1, 0)
  basic.clearScreen()
  basic.showString('0')
  basic.showIcon(IconNames.QuarterNote)

  // when servo finishes turning
  basic.clearScreen()
  basic.showIcon(IconNames.QuarterNote)
})

// turns servo to 180 degrees
input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servoNumber1, 180)
  basic.clearScreen()
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)

  // when servo finishes turning
  basic.clearScreen()
  basic.showIcon(IconNames.EigthNote)
})
