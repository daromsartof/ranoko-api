import moment from 'moment';
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

async function myWater(userId) {
  try {
    const ranokos = await ranoRepositorie.findRanoByUser(userId)
    const res = {
      all: 0,
      today: 0,
      details: []
    }
    ranokos.map(ranoko => {
      res.all += ranoko.number
      if (moment(ranoko.created_at).format("DD/MM/YYYY") === moment(new Date()).format("DD/MM/YYYY")) {
        res.today += ranoko.number
      }
      res.details.push(ranoko)
    })

    return res
  } catch (error) {
    return []
  }
}

async function deleteRano() {

  return ;
}

async function updateRano() {

  return ;
}
export default {
    takeWaterToday,
    myWater,
    deleteRano,
    updateRano
};
