import prisma from '../../config/prismaClient.js';

async function createOneCaisse(amount_total = 0) {
    return prisma.caisse.create({
        data: {
            amount_total,
            created_at: new Date()
        }
    });
}
export default {
    createOneCaisse
};
