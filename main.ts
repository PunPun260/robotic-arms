input.onButtonPressed(Button.A, function () {
    if (craw == 0) {
        craw = 45
    } else {
        craw = 0
    }
    pins.servoWritePin(AnalogPin.P15, craw)
})
input.onButtonPressed(Button.B, function () {
	
})
let craw = 0
craw = 0
let base = 90
let shoulder = 45
let elbow = 180
pins.servoWritePin(AnalogPin.P15, craw)
pins.servoWritePin(AnalogPin.P14, elbow)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    serial.writeValue("y", pins.analogReadPin(AnalogPin.P1))
    serial.writeValue("x2", pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P0) > 900) {
        if (base < 180) {
            base += 1
        }
        pins.servoWritePin(AnalogPin.P12, base)
    } else if (pins.analogReadPin(AnalogPin.P0) < 600) {
        if (base > 0) {
            base += -1
        }
        pins.servoWritePin(AnalogPin.P12, base)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 900) {
        if (shoulder < 135) {
            shoulder += 1
        }
        pins.servoWritePin(AnalogPin.P13, shoulder)
    } else if (pins.analogReadPin(AnalogPin.P1) < 600) {
        if (shoulder > 45) {
            shoulder += -1
        }
        pins.servoWritePin(AnalogPin.P13, shoulder)
    }
    if (shoulder > 90) {
        if (pins.analogReadPin(AnalogPin.P2) > 900) {
            if (elbow < 180) {
                elbow += 1
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 600) {
            if (elbow > 90) {
                elbow += -1
            }
        }
        pins.servoWritePin(AnalogPin.P14, elbow)
    }
})
