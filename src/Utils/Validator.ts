import * as ValidatorJs from "validatorjs"
class Validator {
    static make(inputs: object, rules: object, messages: object) {
        return new ValidatorJs(inputs, rules, messages)
    }
}
