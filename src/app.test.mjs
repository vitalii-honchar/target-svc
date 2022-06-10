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
})
