import chai from 'chai'
import * as f from '../lib/futil-js'
chai.expect()
const expect = chai.expect

describe('Basic Functions', function () {
    it('maybeCall', function () {
        expect(f.maybeCall(() => 5)).to.deep.equal(5)
        expect(f.maybeCall(null)).to.deep.equal(false)
    })
    it('maybeCall should call fn with parameters', function () {
        const fn = (x, y) => x + y
        expect(f.maybeCall(fn, 5, 6)).to.deep.equal(fn(5, 6))
    })
})

describe('String Functions', function () {
    it('wrap', function () {
        expect(f.wrap('(', ')', 'asdf')).to.equal('(asdf)')
    })
    it('quote', function () {
        expect(f.quote('asdf')).to.equal('"asdf"')
    })
    it('parens', function () {
        expect(f.parens('asdf')).to.equal('(asdf)')
    })
})
