import axios from 'axios'

export const getTransactions = id_user => {
    return {
        type: 'GET_TRANSACTIONS',
        payload: axios.get(`https://mobile-provider-clone.herokuapp.com/transaction/?UserId=${id_user}`)
    }
}

export const createTransaction = (transaction, token) => {
    console.log(transaction)
    console.log(token)
    return{
        type: 'CREATE_TRANSACTION',
        payload: axios.post('https://mobile-provider-clone.herokuapp.com/transaction/', transaction, {
            headers: {
                header_key : 'PR0V1D3R',
                token: token,
            }
        })
    }
}

export const deleteTransaction = (id, token) => {
    return {
        type: 'DELETE_TRANSACTION',
        payload: axios.delete(`https://mobile-provider-clone.herokuapp.com/transaction/${id}`, {
            headers: {
                header_key: 'PR0V1D3R',
                token: token,
            }
        })
    }
}