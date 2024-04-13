import prisma from '../../config/prismaClient.js';
import utilsService from '../../services/utilsService.js'
async function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id:true,
            role: true,
            name: true,
            slug: true,
            caisse: true 
        }
    })
};

async function createOneUser(username, hashedPassword, name, caisse) {
    return await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          name,
          caisse_id: caisse.id,
          slug: utilsService.createSlug(name)
        }
    });
}



export default {
    getUserById,
    createOneUser
};
