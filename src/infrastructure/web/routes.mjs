import {Target} from "../../domain/target.mjs";

export default async (fastify) => {

    fastify.post('/target', async (req) => {
        const target = new Target(null, req.body.description)
        return fastify.targetRepository.create(target);
    })

    fastify.get('/target', async (req) => {
        return fastify.targetRepository.findAll()
    })
}
