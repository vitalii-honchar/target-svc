import {Target} from "../../domain/target.mjs";
import targetRepository from "../database/target-repository.mjs";

export default async (fastify, options) => {

    fastify.post('/target', async (req, reply) => {
        const target = new Target(null, req.body.description)
        return targetRepository.create(target);
    })
}
