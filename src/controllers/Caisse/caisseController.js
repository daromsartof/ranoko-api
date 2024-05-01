import caisseService from '../../services/Caisse/caisseService.js';

async function getMeCaisse(req, res) {
    const user = req.user;
    const caisse = await caisseService.getCaisseByUserId(user.id);
    return res.json(caisse);
}

async function addAmountOnCaisseUser(req, res) {
    const { amount, caisse_id } = req.body;
    const user = req.user;
    if (!amount || isNaN(parseInt(amount) || !caisse_id || isNaN(parseInt(caisse_id)))) {
        return res.status(403).json({
            message: "amount is not found or caisse_id is not found"
        })
    }
    const caisse = await caisseService.giveAmountOnACaisse(amount, caisse_id, user.id);
    return res.json(caisse)
}



export default { getMeCaisse, addAmountOnCaisseUser };
