function smartSize(size, { unit, scale } = {}) {
  if (typeof size === 'string') {
    return size
  } else if (typeof size === 'number') {
    return `${size * (scale == null ? smartSize.defaults.scale : scale)}${
      unit == null ? smartSize.defaults.unit : unit
    }`
  } else if (Array.isArray(size)) {
    return size.map(v => smartSize(v, { unit, scale })).join(' ')
  } else if (size && typeof size === 'object') {
    return smartSize(
      [
        size.top || size.vertical,
        size.right || size.horizontal,
        size.bottom || size.vertical,
        size.left || size.horizontal
      ],
      { unit, scale }
    )
  }
  return 0
}

smartSize.defaults = { unit: 'em', scale: 1 }

module.exports = smartSize
