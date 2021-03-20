import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchProductFromId} from '../../redux/actions'
import SideBar from './SideBar';
import ProductDetails from "./ProductDetails";
import './ProductsContainer.scss';

const ProductsContainer = ({fetchProductFromIdAction, productData, isLoading, receivedError}) => {
    useEffect(() => {
        fetchProductFromIdAction('B007TIE0GQ');
    }, []);
    console.log(productData);

    return (
        <div className='ProductsContainer'>
            {!!isLoading && (<h2>Loading</h2>)}
            {!isLoading && (
                <>
                    <SideBar productData={productData}>Products:{productData.title}</SideBar>
                    <ProductDetails productData={productData}></ProductDetails>
                </>
            )}
        </div>
    )
};
const mapStateToProps = state => {
    return {
        productData: state.product.product,
        isLoading: state.product.loading,
        receivedError: state.product.error,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchProductFromIdAction: (id) => dispatch(fetchProductFromId(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
