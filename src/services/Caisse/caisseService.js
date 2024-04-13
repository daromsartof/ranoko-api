import caisseRepositorie from '../../repositories/Caisse/caisseRepositorie.js';
import transactionHistory from '../../repositories/TransactionHistory/transactionHistory.js';


async function createCaisse(callbackFuctionForUser = async () => {}) {
  const caisse = await caisseRepositorie.createOneCaisse();
  try {
    const user = await callbackFuctionForUser(caisse);
    return await caisseRepositorie.updateOnCaiseById(caisse.id, {
      user_id: user.id
    });
  } catch (error) {
    console.error('error', error)
    await caisseRepositorie.deleteCaisseById(caisse.id);
    throw error;
  }
}

async function giveAmountOnACaisse(amount, caisse_id, responsable) {
  const caisse = await caisseRepositorie.findOnCaisseById(caisse_id);
  try {
    if (!caisse) return {
      message: "caisse not found"
    }
    const newCaisse = await caisseRepositorie.updateOnCaiseById(caisse.id, {
      amount: caisse.amount + amount
    })
    await transactionHistory.addTransactionHistory(0, amount,responsable, caisse)
    return newCaisse;
  } catch (error) {
    throw error
  }
}

async function deleteCaisse() {

  return ;
}

async function updateCaisse() {

  return ;
}
export default {
    createCaisse,
    giveAmountOnACaisse,
    deleteCaisse,
    updateCaisse
};
