import prisma from '../../config/prismaClient.js';
import transactionHistory from '../TransactionHistory/transactionHistory.js';

async function findBoitindrakitra() {
    return transactionHistory.findAllBy({
        debit: 0
    })
}

export default {
    findBoitindrakitra
};
