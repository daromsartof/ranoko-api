import prisma from '../../config/prismaClient.js';

async function createRano(number, user_id, responsable_id) {
    return prisma.rano_nalaiko.create({
        data: {
            number,
            responsable_id,
            user_id
        }
    })
}

async function findRanoByUser(user_id) {
    return prisma.rano_nalaiko.findMany({
        where: {
            user_id
        },
        include: {
            user_rano_nalaiko_responsable_idTouser: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

export default {
    createRano,
    findRanoByUser
};
