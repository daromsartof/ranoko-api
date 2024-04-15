import prisma from '../../config/prismaClient.js';

async function addTransactionHistory(debit, credit, res_id, caisse) {
    return prisma.transaction_history.create({
        data: {
            debit,
            credit,
            responsable_id: res_id,
            caisse_id: caisse.id,
            last_amout: caisse.amount
        }
    })
}


async function deleteTransactionHistoryBy(id) {
    return prisma.transaction_history.delete({
        where: {
            id
        }
    })
}

export default {
    addTransactionHistory,
    deleteTransactionHistoryBy
}