import transHistoryService from "../../services/TransactionHistory/transHistoryService.js";

async function getMyTransactionHistory(req, res) {
    const {id} = req.user
   const response = await transHistoryService.myTransactionHistory(id)
    return res.json(response);
}


export default {
    getMyTransactionHistory
}
