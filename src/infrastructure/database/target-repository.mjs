import {Target} from "../../domain/target.mjs";

const targets = []

const nextId = () => targets.length === 0 ? 0 : targets[targets.length - 1].id + 1

export default {

    create(target) {
        const created = new Target(nextId(), target.description, target.completed)
        targets.push(created)
        return created
    }
}
