const Joi = require('joi')

let validate = (params, schema) => {
    return schema.validate(params)
}

const validate_project_add = (params) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        created_by: Joi.string().required(),
        assigned_to: Joi.array().items(Joi.string()),
        priority: Joi.string().valid('high', 'medium', 'low').default('high'),
        status: Joi.string().valid('new', 'pending', 'completed', 'deleted').default('new'),
        start_date: Joi.date(),
        end_date: Joi.date(),
    })

    return validate(params,schema)
}

const validate_task_add = (params) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        created_by: Joi.string().required(),
        project_id: Joi.string().required()
    })

    return validate(params,schema)
}

const validate_subtask_add = (params) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        created_by: Joi.string().required(),
        task_id: Joi.string().required()
    })

    return validate(params,schema)
}


module.exports = {
    validate_project_add,
    validate_task_add,
    validate_subtask_add
}