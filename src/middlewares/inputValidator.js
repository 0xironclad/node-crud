import Joi from "joi"

const createUserSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required()
})

const updateUserSchema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email()
})

export const validateCreateUser = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

export const validateUpdateUser = (req, res, next) => {
    const { error } = updateUserSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}
