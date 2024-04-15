import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prismaClient.js';
import userService from './User/userService.js';

async function register(user_name, password, name) {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {    
    return await userService.createUser(user_name, hashedPassword, name);
  } catch (error) {
    console.error(error);
    return error
  }
  
}

async function login(username, password) {
  const user = await prisma.user.findUnique({
    where: { username }
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
}

export default { register, login };
