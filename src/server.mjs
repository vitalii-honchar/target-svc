import build from './app.mjs'

const fastify = await build({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname'
            }
        }

    }
})

await fastify.listen(3000)
