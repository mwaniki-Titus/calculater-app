import joi from 'joi';

export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
        UserID: joi.string().required(),
        UserName: joi.string().alphanum().min(3).max(30).required(),
        Email: joi.string().email().required(),
        Password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        TagName: joi.string().required(),
        Location: joi.string().required()
    });
    return userValidatorSchema.validate(user);
};
 