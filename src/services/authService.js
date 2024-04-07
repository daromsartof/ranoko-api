import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prismaClient.js';
import caisseRepositorie from '../repositories/Caisse/caisseRepositorie.js';
import userRepositorie from '../repositories/User/userRepositorie.js';
async function register(user_name, password, name) {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const caisse = await caisseRepositorie.createOneCaisse();
    const user = await userRepositorie.createOneUser(user_name, hashedPassword, name, caisse)
    
    return user;
  } catch (error) {
    console.error(error);
    return error
  }
  
}

async function login(user_name, password) {
  const user = await prisma.user.findUnique({
    where: { user_name }
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
}

export default { register, login };
