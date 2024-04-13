import caisseRepositorie from '../../repositories/Caisse/caisseRepositorie.js';


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

async function readCaisse() {

  return ;
}

async function deleteCaisse() {

  return ;
}

async function updateCaisse() {

  return ;
}
export default {
    createCaisse,
    readCaisse,
    deleteCaisse,
    updateCaisse
};
