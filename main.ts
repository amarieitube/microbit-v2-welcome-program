input.onPinPressed(TouchPin.P0, function () {
    rand1 = randint(1, 10)
    datalogger.log(datalogger.createCV("randomnumber1", rand1))
    basic.showNumber(rand1)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    rand3 = randint(1, 100)
    datalogger.log(datalogger.createCV("randomnumber3", rand3))
    basic.showNumber(rand3)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(counter)
    datalogger.log(datalogger.createCV("countercheckvalue", counter))
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    rand2 = randint(1, 50)
    datalogger.log(datalogger.createCV("randomnumber2", rand2))
    basic.showNumber(rand2)
})
let rand2 = 0
let rand3 = 0
let rand1 = 0
let counter = 0
datalogger.setColumnTitles(
"currentcounter",
"countercheckvalue",
"randomnumber1",
"randomnumber2",
"randomnumber3"
)
counter = 0
basic.showString("Welcome to micro:bit!")
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
basic.forever(function () {
    counter += 1
    datalogger.log(datalogger.createCV("currentcounter", counter))
})
