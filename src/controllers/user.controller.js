const userService = require('../services/user.service')


const getUsers = async (req, res)=> {

    const users = await userService.getAllUser();

    res.json(users);

}


const createUser= async (req, res)=> {

    const {name, email, rol } = req.body

    const user = await userService.createUser({name, email,rol});

    res.json(user);



}

module.exports={
getUsers,
createUser

}