import build from './app.mjs'

describe('test app', () => {

    it('should create a target', async () => {
        const app = await build()

        const response = await app.inject({
            method: 'POST',
            url: '/target',
            payload: {
                description: 'My target'
            }
        })

        expect(response.statusCode).toEqual(200)

        const target = JSON.parse(response.body)

        expect(target.description).toEqual('My target')
        expect(target.id).not.toBeNull()
    })

    it('should create a target with id greater than previous', async () => {
        const app = await build()

        const response1 = await app.inject({
            method: 'POST',
            url: '/target',
            payload: {
                description: 'My target'
            }
        })
        const response2 = await app.inject({
            method: 'POST',
            url: '/target',
            payload: {
                description: 'My target'
            }
        })

        const target1 = JSON.parse(response1.body)
        const target2 = JSON.parse(response2.body)
        expect(target2.id).toEqual(target1.id + 1)
    })
})
