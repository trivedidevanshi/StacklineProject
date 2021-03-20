import React, {useState} from 'react';
import './ProductsContainer.scss';
import ProductSalesGraph from './ProductSalesGraph';

const ProductDetails = ({productData}) => {
    const [sales, setSales] = useState(productData.sales);
    const headers = ["week Ending", "retail Sales", "wholesale Sales", "units Sold", "retailer Margin"];

    function numberWithCommas(x) {
        return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const renderTableHeader = () => {
        return (headers.map(header =>
            <th>
                {header}
            </th>))
    };
    const renderTableData = () => {
        return (!!sales && sales.map(sale => (
            <tr>
                <td>{sale.weekEnding}</td>
                <td>{numberWithCommas(sale.retailSales)}</td>
                <td>{numberWithCommas(sale.wholesaleSales)}</td>
                <td>{sale.unitsSold}</td>
                <td>{numberWithCommas(sale.retailerMargin)}</td>
            </tr>
        )))
    };
    return (
        <div className='ProductDetailsContainer'>
            <ProductSalesGraph productData={productData}/>
            <div className='ProductDetails'>
                <div className='ProductDetails__TableContainer'>
                    <table id='sales' className='ProductDetails__TableContainer__Table'>
                        <tbody>
                        <tr className='ProductDetails__TableContainer__Table__Header'>{renderTableHeader()}</tr>
                        {renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
export default ProductDetails;
