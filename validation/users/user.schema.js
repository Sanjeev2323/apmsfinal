const joi = require('joi');
const user = require('../../models/user');


const schema =
    joi.object({
        first_name: joi.string().alphanum().max(100).required(),
        last_name: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()

    })


exports.validateUser = async (req, res, next) => {
    console.log('hi');


    const value = user.validate(schema, req.body);
    if (value.error) {
        res.send(error);
    } else {
        next();
    }
}


