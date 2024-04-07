import prisma from '../../config/prismaClient.js';
import utilsService from '../../services/utilsService.js'
async function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id
        },
        select: {
            name: true,
            slug: true,
            caisse: {
                select: {
                    amount_total: true
                }
            },
            rano: {
                include: {
                    bar: true
                }
            }
        }
    })
};

async function createOneUser(user_name, hashedPassword, name, caisse) {
    return prisma.user.create({
        data: {
          user_name,
          password: hashedPassword,
          name,
          role: "['User']",
          caisse_id: caisse.id,
          slug: utilsService.createSlug(name)
        }
    });
}

export default {
    getUserById,
    createOneUser
};
