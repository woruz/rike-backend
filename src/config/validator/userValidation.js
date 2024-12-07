const Joi = require('joi')

let validate = (params, schema) => {
    return schema.validate(params)
}

const validate_user_register = (params) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

    return validate(params,schema)
}

const validate_user_login = (params) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

    return validate(params,schema)
}


module.exports = {
    validate_user_register,
    validate_user_login
}