import Joi from 'joi';

const schema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required(),

    id: Joi.number()
        .integer()
        .min(1).required(),

    description: Joi.string().min(3).max(500),
    category: Joi.string().min(3).max(100).required(),
    rate: Joi.number().min(0).required(),
    featured: Joi.boolean().required(),
    images: Joi.array().items(Joi.object({
        img1: Joi.string().required(),
        img2: Joi.string(),
        img3: Joi.string(),
    })).required(),
    classifier: Joi.array().items(Joi.string().valid("most popular", "recommended"))

})

export function ValidateGameObject(game) {

    const result = schema.validate(game ? game : {})
    if (result.error) { console.log(result.error); return false }
    return true;

}