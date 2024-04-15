/**
 * 
 * @param {Array} transactions 
 * @returns 
 */
const transactionHistoryToday = (transactions) => {
    return transactions.filter(tran => {
        const today = new Date().formatDate()
        const transactionDate = new Date(tran.created_at).formatDate()
        return transactionDate === today
    })
}

export default {
    transactionHistoryToday
}
