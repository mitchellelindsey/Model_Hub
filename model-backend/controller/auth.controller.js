const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createUser = async function(req, res) {
    try {
        let {firstName, lastName, username, email, password} = req.body

        if (!firstName || !lastName || !username || !email || !password)
            return res.status(400).json({message: 'One of the values you provided is incorrect'})

        if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string')
            return res.status(400).json({message: 'One of the values you provided is invalid, it should be a string'})

        const findExistingUser = await User.findOne({email, username})
        if (findExistingUser) return res.status(400).json({message: 'The user already exists'})

        password = bcrypt.hash(password, 10)
        
        const user = await User.create({firstName, lastName, username, email, password})
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.status(201).json({token})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {createUser}