const axios = require('axios').default

import { deviceName, mobilesOnSale, offers, logPrice, logDeviceName } from  './test.js'

console.log(deviceName)
console.log(mobilesOnSale)
console.log(offers)
console.log(logPrice(600))
console.log(logDeviceName('galaxy'))

console.log(axios)