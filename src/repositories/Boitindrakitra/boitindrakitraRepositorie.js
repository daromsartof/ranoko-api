import prisma from '../../config/prismaClient.js';

async function findBoitindrakitra() {
    return prisma.boit_ndrakitra.findFirst({
        where: {
            id: 1
        }
    });
}

export default {
    findBoitindrakitra
};
