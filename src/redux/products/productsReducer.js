import {FETCH_PRODUCT_FROM_ID_FAILURE, FETCH_PRODUCT_FROM_ID_REQUEST, FETCH_PRODUCT_FROM_ID_SUCCESS} from './productsActionTypes'

const initialState = {
    loading: false,
    product: {},
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_FROM_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCT_FROM_ID_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                error: ''
            };
        case FETCH_PRODUCT_FROM_ID_FAILURE:
            return {
                loading: false,
                product: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer;