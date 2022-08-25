
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./swap-sdk-eth.cjs.production.min.js')
} else {
  module.exports = require('./swap-sdk-eth.cjs.development.js')
}
