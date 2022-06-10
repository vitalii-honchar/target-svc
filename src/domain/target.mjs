
class TargetIsAlreadyCompletedError extends Error {

    constructor() {
        super('Target is already completed!');
    }
}

class Target {

    constructor(id, description, completed) {
        this.id = id
        this.description = description
        this.completed = completed
    }

    markCompleted() {
        if (!this.completed) {
            return new Target(this.id, this.description, true)
        }
        throw new TargetIsAlreadyCompletedError()
    }
}

export { TargetIsAlreadyCompletedError, Target }
