import TargetRepository from "./target-repository.mjs";
import fastifyPlugin from 'fastify-plugin'

async function repositoryPlugin(fastify) {
    const repository = new TargetRepository()

    fastify.decorate('targetRepository', repository)
}

export default fastifyPlugin(repositoryPlugin)
