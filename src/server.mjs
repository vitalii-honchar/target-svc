import Fastify from 'fastify'
import routes from './infrastructure/web/routes.mjs'

const fastify = Fastify({
    logger: {
        prettyPrint: {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname'
        }
    }
})

fastify.register(routes)

await fastify.listen(3000)
