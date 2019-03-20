;(() => {
  const defaults = { unit: 'em', scale: 1 }

  const smartSize = (size, { unit, scale } = {}) => {
    unit = unit == null ? defaults.unit : unit
    scale = scale == null ? defaults.scale : scale
    if (typeof size === 'string') {
      const a = size.split(' ')
      if (a.length > 1) {
        return smartSize(a, { unit, scale })
      } else if (a.length > 0) {
        const n = parseInt(size.replace(/[^-\d.]/g, ''))
        const u = size.replace(/[-\d.]/g, '')
        if (!Number.isNaN(n)) {
          return smartSize(n, { unit: u == null || u === '' ? unit : u, scale })
        }
      }
    } else if (typeof size === 'number') {
      if (size !== 0) {
        return `${size * scale}${unit}`
      }
    } else if (Array.isArray(size)) {
      return size.map(v => smartSize(v, { unit, scale })).join(' ')
    } else if (size && typeof size === 'object') {
      if (Object.keys(size).length > 0) {
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
    }
    return 0
  }

  const create = defaults => (size, config) =>
    smartSize(size, { ...defaults, ...config })

  module.exports = { __esModule: true, default: smartSize, create }
})()
