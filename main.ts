function _2SensorLF_BlackWhite () {
    if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, 80)
    } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.Black)) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 218)
    } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.Black) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinRight, 216)
    } else {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, 80)
    }
}
basic.showLeds(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # # # # #
    `)
while (true) {
    if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.Black) || mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.Black)) {
        break;
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    }
}
while (true) {
    _2SensorLF_BlackWhite()
}
