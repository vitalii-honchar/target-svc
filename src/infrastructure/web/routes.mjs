export default async (fastify, options) => {

    fastify.post('/target', async (req, reply) => {
        return {
            id: 1,
            description: req.body.description
        }
    })
}
