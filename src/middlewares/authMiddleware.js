import jwt from 'jsonwebtoken';
import userService from '../services/User/userService.js';
import utilsService from '../services/utilsService.js';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Pas de token, non autorisé

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token non valide
    userService.getOneUser(user.userId).then(user => {
      req.user = user;
      next();
    })
   // req.user = userData;
   
  });
};

const requireRole = (requiredRole) => {
  return (req, res, next) => {
      const { role } = req.user;  
      if (utilsService.isGrated(role, requiredRole)) {
          
          next();
      } else {
          res.status(403).json({ message: "Access forbidden: insufficient privileges" });
      }
  };
};


export {
  requireRole
}
export default authenticateToken;
