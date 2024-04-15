import prisma from '../../config/prismaClient.js';

/**
 * create on cassaise by define default amount
 * @param {number} amout 
 * @returns 
 */
async function createOneCaisse(amout = 0) {
    return prisma.caisse.create({
        data: {
            amout,
            created_at: new Date(),
        }
    });
}

/**
 * update on caisse by id
 * @param {number} id 
 * @param {Object} data 
 * @returns 
 */
async function updateOnCaiseById(id, data) {
    return prisma.caisse.update(
        {
            where: {
                id
            },
            data,
            select: {
                id: true,
                amount: true,
                transaction_history: true,
                user: {
                    select: {
                        slug: true,
                        name: true,
                    }
                }
            }
        }
    )
}

/**
 * delete caisse by id
 * @param {number} id 
 * @returns 
 */
async function deleteCaisseById(id) {
    return prisma.caisse.delete(
        {
            where: {
                id
            }
        }
    )
}
/**
 * 
 * @param {number} id 
 * @returns 
 */
async function findOnCaisseById(id) {
    return prisma.caisse.findUnique({
        where: {
            id
        }
    })
}

/**
 * 
 * @param {number} user_id 
 * @returns 
 */
async function findOneCaisseByUser(user_id) {
    return prisma.caisse.findUnique({
        where: {
            user_id
        }
    })
}

export default {
    createOneCaisse,
    updateOnCaiseById,
    findOnCaisseById,
    deleteCaisseById,
    findOneCaisseByUser
};
