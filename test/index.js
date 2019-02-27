const assert = require('assert')

const smartSize = require('../')

const smartSizeDefaults = require('../')

describe('smartSize', function() {
  it('should return 0 when no params passed', function() {
    assert.equal(smartSize(), 0)
  })
  it('should return same value when string passed', function() {
    assert.equal(smartSize('10px'), '10px')
  })
  it('should return 1em when number passed', () => {
    assert.equal(smartSize(1), '1em')
  })
  it('should return string with 4 values when object passed', () => {
    assert.equal(smartSize({ top: 1, bottom: 2, left: '1px' }), '1em 0 2em 1px')
  })
  it('should return string when array passed', () => {
    assert.equal(smartSize([1, 2]), '1em 2em')
  })
  it('should return string with 4 values when vertical and horizontal values passed', () => {
    assert.equal(smartSize({ vertical: 1, horizontal: 2 }), '1em 2em 1em 2em')
  })
  it('should return 1px when number and unit passed', () => {
    assert.equal(smartSize(1, { unit: 'px' }), '1px')
  })
  it('should return 2px when number, unit and scale passed', () => {
    assert.equal(smartSize(1, { unit: 'px', scale: 1 }), '1px')
  })
})

describe('smartSize.defaults', () => {
  it('should use defaults', () => {
    smartSizeDefaults.defaults.unit = 'px'
    smartSizeDefaults.defaults.scale = 2
    assert.equal(smartSizeDefaults(1), '2px')
  })
})
