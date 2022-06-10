import {Target} from "../../domain/target.mjs";

class TargetRepository {
    constructor() {
        this.targets = []
    }

    create(target) {
        const created = new Target(this.nextId(), target.description, target.completed)
        this.targets.push(created)
        return created
    }

    findAll() {
        return this.targets
    }

    nextId() {
        return this.targets.length === 0 ? 0 : this.targets[this.targets.length - 1].id + 1
    }
}

export default TargetRepository
