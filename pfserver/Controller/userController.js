

const users=require('../Models/userSchema')
const jwt=require("jsonwebtoken")

//register

exports.register= async (req,res)=>{
    console.log("inside register controller function");
    const {username,email,password} = req.body

   try {
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("user already exists ...please login!!!")
    }else{
        const newUser = new users({
            username,email,password,github:"",linkedin:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}
catch(err){
    res.status(401).json(`Register API failed, Error :${err}`)
}

   
}

// login

exports.login=async (req,res)=>{
    console.log("inside login controller function");
    const {email,password} = req.body
    try{
        const exisitingUser = await users.findOne({email,password})
        if(exisitingUser){
            const token= jwt.sign({userId:exisitingUser._id},"secret123")
            res.status(200).json({
                exisitingUser,token
            });
        }else{
            res.status(404).json("incorrect email/password")
        }
    }
    catch(err){
        res.status(401).json(`login API Failed , Error:${err}`)
    }
}

