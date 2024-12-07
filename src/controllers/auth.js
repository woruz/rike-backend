const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const User = require('../models/user')
const error = require('../utils/error')


module.exports = {
    register: (req,res,next) => {
        const postData = req.body

        const validation = validate_user_register(postData)

        if(validation.error){
            next(error(400,validation.error.details[0].message))
        }

        try {
            const { password } = postData
            password = bcryptjs.hashSync(password,10)
            const newUser = new User(postData)

            newUser.save().then(response => {
                res.json({success: true,reponse})
            }).catch(err => {
                next(err)
            })
        } catch (error) {
            next(error)
        }
    },

    login: () => {

    }
}