/*import prisma from '../../config/prismaClient.js';

async function getRanoByDate(date) {
    return prisma.rano.findMany({
        where: {
            created_at: new Date(date)
        },
        include: {
            user: true,
            bar: true
        }
    })
}   

async function createRano(user) {
    return prisma.rano.create({
        data: {

        }
    })
}


export default {
    getRanoByDate
};
*/