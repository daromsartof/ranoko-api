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

async function findHistoryBYUserId(user_id) {
    return findAllBy({
        caisse: {
            user_id
        }
    })
}

async function findAllBy(clause) {
    return prisma.transaction_history.findMany({
        where: clause,
        include: {
            caisse: {
                select: {
                    id: true,
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    })
}

export default {
    addTransactionHistory,
    deleteTransactionHistoryBy,
    findAllBy,
    findHistoryBYUserId
}