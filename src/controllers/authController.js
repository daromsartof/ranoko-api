import authService from '../services/authService.js';

async function register(req, res) {
  const { username, password, name } = req.body;
  try {
    const user = await authService.register(username, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


async function login(req, res) {
  const { username, password } = req.body;
  try {
    const { user, token } = await authService.login(username, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

export default { register, login };
