import { produce } from 'immer';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {

        case "DELETE_TRANSACTION":
            return produce(state, (draftState) => {
                draftState.transactions = draftState.transactions.filter(transaction => transaction.id !== action.payload)
            })
        case "ADD_TRANSACTION":
            return produce(state, (draftState) => {
                draftState.transactions = [action.payload, ...state.transactions]
                console.log(draftState.transactions)
            })
        default:
            return state;
    }
}