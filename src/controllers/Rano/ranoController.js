import ranoService from '../../services/Rano/ranoService.js';
import userService from '../../services/User/userService.js';
import constantService from '../../services/constantService.js';
import utilsService from '../../services/utilsService.js';

async function takeWaterAction(req, res) {
  const {
    user_id,
    number
  } = req.body
  const {
    role,
    id
  } = req.user
  const caissierGrated = utilsService.isGrated(role, constantService.ROLE.CAISSIER)
  const user = caissierGrated ? await userService.getOneUser(user_id || 0) : {
    id
  }
  if (caissierGrated && !user) {
    return res.status(503).json({
      message: "user is not found"
    })
  }
  const rano = await ranoService.takeWaterToday(number, user.id, id)
  return res.json(rano)
}



export default { takeWaterAction };
