// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ip2long = require('../../../../src/php/network/ip2long.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/network/ip2long.js (tested in test/languages/php/network/test-ip2long.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 3221234342
    var result = ip2long('192.0.34.166')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 11259375
    var result = ip2long('0.0xABCDEF')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = false
    var result = ip2long('255.255.255.256')
    expect(result).to.deep.equal(expected)
    done()
  })
})
