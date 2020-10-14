const SerialPort = require('serialport')
const MLX90614 = require('mlx90614-driver')

const MLXSensor = new MLX90614()


const port = new SerialPort('/dev/ttyAMA0', {
    baudRate: 57600
})

port.on('data', function (data) {
    if (data) {
        const userTemp = MLXSensor.readObject()

    }
})
