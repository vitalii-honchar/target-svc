
class TargetIsAlreadyCompletedError extends Error {

    constructor() {
        super('Target is already completed!');
    }
}

class Target {

    constructor(description, completed) {
        this.description = description
        this.completed = completed
    }

    markCompleted() {
        if (!this.completed) {
            return new Target(this.description, true)
        }
        throw new TargetIsAlreadyCompletedError()
    }
}

export { TargetIsAlreadyCompletedError, Target }
