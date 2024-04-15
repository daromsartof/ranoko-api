import prisma from '../../config/prismaClient.js';
import ranoRepositorie from '../../repositories/Rano/ranoRepositorie.js';
import caisseService from '../Caisse/caisseService.js';
import transHistoryService from '../TransactionHistory/transHistoryService.js';
import utilsService from '../utilsService.js';
async function takeWaterToday(number, user_id, responsable_id) {
  try {
      const rano = await ranoRepositorie.createRano(number,user_id, responsable_id)
      const rano_price = utilsService.getRanoPriceByNumber(rano.number)
      const caisse = await caisseService.debitCaisse(user_id, rano_price, responsable_id)
      return {
        rano,
        caisse : {
          ...caisse,
          transaction_history: transHistoryService.transactionHistoryToday(caisse.transaction_history)
        },
        rano_price
      }
  } catch (error) {
    console.error(error)
    return {
      message : "une erreur c'est produit"
    }
  }
}

async function readRano() {

  return ;
}

async function deleteRano() {

  return ;
}

async function updateRano() {

  return ;
}
export default {
    takeWaterToday,
    readRano,
    deleteRano,
    updateRano
};
