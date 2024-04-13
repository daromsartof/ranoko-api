import caisseService from '../../services/Caisse/caisseService.js';
import authService from '../../services/Caisse/caisseService.js ';

async function getCaisse(req, res) {

}

async function addAmountOnCaisseUser(req, res) {
    const { amount, caisse_id } = req.body;
    const user = req.user;
    if (!amount || isNaN(parseInt(amount) || !caisse_id || isNaN(parseInt(caisse_id)))) {
        return res.status(503).json({
            message: "amount is not found or caisse_id is not found"
        })
    }
    const caisse = await caisseService.giveAmountOnACaisse(amount, caisse_id, user.id);
    return res.json(caisse)
}



export default { getCaisse, addAmountOnCaisseUser };
