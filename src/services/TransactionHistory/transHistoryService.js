/**
 * 
 * @param {Array} transactions 
 * @returns 
 */
const transactionHistoryToday = (transactions) => {
    const today = new Date().formatDate()
    return transactions.filter(tran => {
       
        const transactionDate = new Date(tran.created_at).formatDate()
        console.log(today, transactionDate)
        console.log(transactionDate === today);
        return transactionDate === today
    })  
}

export default {
    transactionHistoryToday
}
