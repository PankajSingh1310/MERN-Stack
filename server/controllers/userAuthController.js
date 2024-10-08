const userModel = require("../models/user/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const homeUser = async (req, res) => {

    try{
        res.status(200).send("hello this is the home page");
    }catch(error){
        res.send(error.message);
    }
}

const registerUser = async (req, res) => {

    try{
        const {name, email, password, contact} = req.body;

        const userExist = await userModel.findOne({email});
        if(userExist) return res.status(409).json("User already exists try sign up using different email");

        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                const user = await userModel.create({
                    name,
                    email,
                    password: hash,
                    contact
                })

                const token = generateToken(user);
                res.status(201).json({message: "user created successfully", user, token});
            });
        });
    }catch(error){
        res.json(error.message);
    }
    
}

const login = async (req, res) => {

    try{
        const { email, password } = req.body;

        const userExist = await userModel.findOne({email});
        if(!userExist) return res.status(401).json("email or password is wrong");

        bcrypt.compare(password, userExist.password, function(err, result) {
            
            if(err) return res.status(500).json("Something went wrong");
            
            if(result){
                const token = generateToken(userExist);
                res.status(200).json({message: "you can login", user: userExist, token});
            }

            else{
                res.status(401).json("email or password is wrong");
            }

        });
    }catch(error){
        res.json(error.message);
    }
    
}

module.exports = {homeUser, registerUser, login};