import {
    FETCH_PRODUCT_FROM_ID_FAILURE,
    FETCH_PRODUCT_FROM_ID_REQUEST,
    FETCH_PRODUCT_FROM_ID_SUCCESS
} from './productsActionTypes';
import {products} from '../../data/stackline_frontend_assessment_data_2021';

const mimicApiFetchCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({data: products[0]});
    }, 0);
});

export const fetchProductFromId = (id) => {
    return (dispatch) => {
        dispatch(fetchProductFromIdRequest());
        mimicApiFetchCall
            .then(response => {
                const product = response.data;
                dispatch(fetchProductFromIdSuccess(product));
            })
            .catch(error => {
                dispatch(fetchProductFromIdFailure(error))
            })
    }
};

export const fetchProductFromIdRequest = () => {
    return {
        type: FETCH_PRODUCT_FROM_ID_REQUEST
    }
};

export const fetchProductFromIdSuccess = product => {
    return {
        type: FETCH_PRODUCT_FROM_ID_SUCCESS,
        payload: product
    }
};

export const fetchProductFromIdFailure = error => {
    return {
        type: FETCH_PRODUCT_FROM_ID_FAILURE,
        payload: error
    }
};