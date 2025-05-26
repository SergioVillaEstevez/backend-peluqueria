const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');

const getAllUser = ()=>{

    return prisma.user.findMany();

}


const createUser = async (data)=> {

  if (!data.password || !data.userName || !data.email) {
    throw new Error('Faltan datos obligatorios');
  }
 const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
        
        data : {
            name :  data.userName,
            email : data.email,
            password : hashedPassword,
            rol: data.rol

        }
    
    
    
    });

}

module.exports = {

    getAllUser,
    createUser,
}