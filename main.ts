radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 10)
    basic.showNumber(dice)
})
let dice = 0
radio.setGroup(1)
