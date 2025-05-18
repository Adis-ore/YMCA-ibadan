import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const adminLogin = async (req,res) => {
    // res.json({msg:"Admin Api working"})
    try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            return res.json({success:true,token})
        } else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Invalid Credentials"})
        
    }
}

export default adminLogin