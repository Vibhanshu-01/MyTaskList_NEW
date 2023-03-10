const Joi = require("joi") 
const express = require("express")
const {User} = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/" , async(req,res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email:Joi.string().email().required(),
        password: Joi.string().min(6).max(200).required()
    })
    const {error} = schema.validate(req.body)

    if(error) return res.status(400).send(error.details[0].message)

    try{
        let user = await User.findOne({email:req.body.email})
        if(user) return res.status(400).send("User with that email already exist..")

        const {name, email, password} = req.body

        user = new User({
            name, email, password
        })
        const salt = await bcrypt.genSalt(10); 
        user.password = await bcrypt.hash(user.password , salt);
        await user.save()
        const secretKey = process.env.SECRET_KEY
        const token = jwt.sign({_id :user._id , name : user.name , email : user.email}, secretKey)
        res.send(token)
    } catch(error){
        res.status(500).send(error.message); 
        console.log(error.message);
    }


})

module.exports = router