const assert = require('assert')

const smartSize = require('../').default

const createSmartSize = require('../').create

describe('smartSize', function () {
  it('should be function', () => {
    assert.equal(typeof smartSize, 'function')
  })
  it('should return 0 when no params passed', function () {
    assert.equal(smartSize(), 0)
  })
  it('should return 0 when 0 passed', () => {
    assert.equal(smartSize(0), 0)
  })
  it('should return ${n}em when number passed', () => {
    assert.equal(smartSize(1), '1em')
  })
  it('should return same value when string with units passed', function () {
    assert.equal(smartSize('10px'), '10px')
  })
  it('should return ${s}em when string no units passed', function () {
    assert.equal(smartSize('1'), '1em')
  })
  it('should return value multiplied by scale when string passed', function () {
    assert.equal(smartSize('10px', { scale: 2 }), '20px')
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
  it('should return 0 when empty array passed', () => {
    assert.equal(smartSize([]), 0)
  })
  it('should return 0 when empty object passed', () => {
    assert.equal(smartSize({}), 0)
  })
  it('should use provided units', () => {
    assert.equal(smartSize(1, { unit: 'px' }), '1px')
  })
  it('should use provided scale', () => {
    assert.equal(smartSize('1px', { scale: 32 }), '32px')
  })
})

describe('create SmartSize', () => {
  const smartSizeDefaults = createSmartSize({ unit: 'rem', scale: 2 })

  it('should return function', () => {
    assert.equal(typeof smartSizeDefaults, 'function')
  })
  it('should use provided defaults', () => {
    assert.equal(smartSizeDefaults(1), '2rem')
  })
})
