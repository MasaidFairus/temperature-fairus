input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("CELCIUS")
})
input.onButtonPressed(Button.AB, function () {
    F = input.temperature() * 1.8
    FAHRENHEIT = F + 32
    basic.showNumber(FAHRENHEIT)
    basic.showString("FAHRENHEIT")
})
input.onButtonPressed(Button.B, function () {
    REAMOR = input.temperature() * 0.8
    basic.showNumber(REAMOR)
    basic.showString("REAMOR")
})
let REAMOR = 0
let FAHRENHEIT = 0
let F = 0
basic.showIcon(IconNames.Sad)
