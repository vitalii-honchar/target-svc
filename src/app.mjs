import Fastify from "fastify";
import routes from './infrastructure/web/routes.mjs'
import repositoryPlugin from "./infrastructure/database/repository-plugin.mjs";

export default async (opts = {}) => {
    const app = Fastify(opts)
    app.register(repositoryPlugin)
    app.register(routes)
    return app
}
