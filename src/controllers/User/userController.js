import userService from '../../services/User/userService.js ';

async function getUser(req, res) {
    const { userId } = req.query;
    const user = await userService.getOneUser(userId);
    return  res.json({
        user,
        message: "succes"
    });
}



export default { getUser };
