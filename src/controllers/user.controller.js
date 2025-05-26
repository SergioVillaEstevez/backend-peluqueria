const userService = require('../services/user.service')


const getUsers = async (req, res)=> {

    const users = await userService.getAllUser();

    res.json(users);

}


const createUser= async (req, res)=> {

    console.log("BODY:", req.body); // <-- esto

    const {userName, email,password,rol } = req.body

    const user = await userService.createUser({userName, email, password ,rol});

    res.json(user);



}

module.exports={
getUsers,
createUser

}