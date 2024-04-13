import userRepositorie from '../../repositories/User/userRepositorie.js';
import caisseService from '../Caisse/caisseService.js';
async function createUser(username, password, name) {
  try {
    return await caisseService.createCaisse(async (caisse) => {
      const user = await userRepositorie.createOneUser(username,  password, name, caisse)
      return user
    })
  } catch (error) {
    throw error
  }
}

async function getOneUser(userId) {
  try {
    const user = await userRepositorie.getUserById(parseInt(userId));
    return user
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteUser() {

  return ;
}

async function updateUser() {

  return ;
}
export default {
    createUser,
    getOneUser,
    deleteUser,
    updateUser
};
