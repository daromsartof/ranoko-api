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
            include:{
                user: true
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

export default {
    createOneCaisse,
    updateOnCaiseById,
    deleteCaisseById
};
