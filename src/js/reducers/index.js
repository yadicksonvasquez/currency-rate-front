/***
 * Root reducer
 * @author yadicksonvasquez@gmail.com
 */


const initialState = {
    dolarQuotationMessage: null,
    euroQuotationMessage: null,
    realQuotationMessage: null
};

function rootReducer(state = initialState, action) {
    console.log('rootReducer invoke');
    switch (action.type) {
        case 'REFRESH_DOLAR_QUOTATION':
            return Object.assign({}, state, { dolarQuotationMessage: action.message });
        case 'REFRESH_EURO_QUOTATION':
            return Object.assign({}, state, { euroQuotationMessage: action.message });
        case 'REFRESH_REAL_QUOTATION':
            return Object.assign({}, state, { realQuotationMessage: action.message });
        default:
            return state
    }
};

export default rootReducer;