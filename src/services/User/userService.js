import userRepositorie from '../../repositories/User/userRepositorie.js';
async function createUser() {

  return ;
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
