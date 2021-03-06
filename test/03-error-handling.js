const tap = require('tap')
const test = tap.test

const getLicenseInfo = require('../')

test('invokes callback on module not found error', (t) => {
  const f = '/fooo/bar/baz'

  getLicenseInfo(f, (err, res) => {
    tap.ok(/Module not found/.test(err.message))

    t.end()
  })
})

test('rejects promise on module not found error', (t) => {
  const f = '/fooo/bar/baz'

  getLicenseInfo(f).then(() => {}).catch((err) => {
    tap.ok(/Module not found/.test(err.message))

    t.end()
  })
})
