import _ from 'lodash/fp'
import chai from 'chai'
import * as f from '../lib/futil-js'
chai.expect()
const expect = chai.expect

describe('Converted Functions', function() {
    const hero = {
        name: 'Heracles',
        father: 'Zeus',
        bornAt: 'Thebes'
    }

    it('getIn', function() {
        expect(f.getIn(hero, 'name')).to.eql(_.get('name', hero))
        expect(f.getIn(hero)('name')).to.eql('Heracles')
    })
    it('pickIn', function() {
        expect(f.pickIn(hero, 'name')).to.eql({ name: 'Heracles' })
        expect(f.pickIn(hero, ['name', 'father'])).to.eql({ name: 'Heracles', father: 'Zeus' })
        expect(f.pickIn(hero)(['name', 'father'])).to.eql({ name: 'Heracles', father: 'Zeus' })
    })
    it('includesIn', function() {
        expect(f.includesIn(hero, 'name')).to.eql(false)
        expect(f.includesIn(hero, 'Heracles')).to.eql(true)
        expect(f.includesIn(hero)('Zeus')).to.eql(true)
    })
    it('extendsOn', function() {
        const clone = _.clone(hero)
        expect(f.extendsOn(clone, { consort: 'Auge' })).to.eql(_.lodash)
        expect(f.extendsOn(clone, 'Heracles')).to.eql(true)
        expect(f.extendsOn(clone)('Zeus')).to.eql(true)
    })
})
