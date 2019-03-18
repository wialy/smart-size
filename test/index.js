const assert = require('assert')

const smartSize = require('../')

const smartSizeDefaults = require('../')

describe('smartSize', function () {
  it('should return 0 when no params passed', function () {
    assert.equal(smartSize(), 0)
  })
  it('should return same value when string passed', function () {
    assert.equal(smartSize('10px'), '10px')
  })
  it('should return ${n}em when number passed', () => {
    assert.equal(smartSize(1), '1em')
  })
  it('should return string with 4 values (css syntax for top, right, bottom, left) when object passed', () => {
    assert.equal(smartSize({ top: 1, bottom: 2, left: '1px' }), '1em 0 2em 1px')
  })
  it('should return string when array passed with same values amount', () => {
    assert.equal(smartSize([1, 2]), '1em 2em')
  })
  it('should return string with 4 values when vertical and horizontal values passed', () => {
    assert.equal(smartSize({ vertical: 1, horizontal: 2 }), '1em 2em 1em 2em')
  })
  it('should return use provided units', () => {
    assert.equal(smartSize(1, { unit: 'px' }), '1px')
  })
  it('should return use provided scale', () => {
    assert.equal(smartSize(1, { scale: 2 }), '2em')
  })
})

describe('smartSize.defaults', () => {
  it('should use defaults', () => {
    smartSizeDefaults.defaults.unit = 'rem'
    smartSizeDefaults.defaults.scale = 2
    assert.equal(smartSizeDefaults(1), '2rem')
  })
})
