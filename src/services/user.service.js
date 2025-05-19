const prisma = require('../prisma/client');

const getAllUser = ()=>{

    return prisma.user.findMany();

}


const createUser = (data)=> {

    return prisma.user.create({data});

}

module.exports = {

    getAllUser,
    createUser,
}