const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test(`return an array`, () => {
        expect(shuffleArray("arrCopy")).toBeTruthy()
    })
    test(`return an array of the same length as the argument sent in`, () => {
        expect(['a', 'b', 'c']).toHaveLength(3)
    })
})