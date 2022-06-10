import Fastify from "fastify";
import routes from './infrastructure/web/routes.mjs'

export default async (opts = {}) => {
    const app = Fastify(opts)
    app.register(routes)
    return app
}
