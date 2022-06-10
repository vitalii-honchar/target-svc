import { Target, TargetIsAlreadyCompletedError } from './target.mjs'

describe('test mark completed Target', () => {

    it('should throws TargetIsAlreadyCompletedError when target was already completed', () => {
        const target = new Target(null, 'test', true)

        expect(() => target.markCompleted()).toThrow(new TargetIsAlreadyCompletedError())
    })

    it('should mark target completed when target is not completed yet', () => {
        const target = new Target(null, 'test', false)

        expect(target.markCompleted()).toEqual(new Target(null, 'test', true))
    })
})
