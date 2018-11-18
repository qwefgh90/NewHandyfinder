export class NotImplementedError extends Error{
    constructor(msg: string = ''){
        super(`This function is not implemented.\n ${msg}`)
    }
}