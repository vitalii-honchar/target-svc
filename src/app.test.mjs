import build from './app.mjs'
import {Target} from "./domain/target.mjs";

describe('test app', () => {

    it('should create a target', async () => {
        const app = await build()
        const target = await createTarget(app, new Target(null, 'My target'))

        expect(target.description).toEqual('My target')
        expect(target.id).not.toBeNull()
    })

    it('should create a target with id greater than previous', async () => {
        const app = await build()

        const target1 = await createTarget(app, new Target(null, 'test'))
        const target2 = await createTarget(app, new Target(null, 'test'))
        expect(target2.id).toEqual(target1.id + 1)
    })

    it('should receive an empty list of targets', async () => {
        const app = await build()
        const response = await app.inject({
            method: 'GET',
            url: '/target'
        })

        const targets = JSON.parse(response.body)
        expect(targets.length).toEqual(0)
    })

    it('should receive a list with targets', async () => {
        const app = await build()

        const target1 = await createTarget(app, new Target(null, 'test 1'))
        const target2 = await createTarget(app, new Target(null, 'test 2'))
        const response = await app.inject({
            method: 'GET',
            url: '/target'
        })

        const targets = JSON.parse(response.body)
        expect(targets.length).toEqual(2)
        expect(targets[0].id).toEqual(target1.id)
        expect(targets[1].id).toEqual(target2.id)
    })
})

async function createTarget(app, target) {
    const response = await app.inject({
        method: 'POST',
        url: '/target',
        payload: target
    })
    return JSON.parse(response.body)
}
