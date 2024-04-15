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

export default {
    createRano
};
