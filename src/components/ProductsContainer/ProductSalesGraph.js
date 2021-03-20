import React, {useEffect, useState} from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const graphAxis = {
    x: {
        type: 'timeseries',
        tick: {
            format: function (x) {
                return months[x.getMonth()] + ' ' + x.getFullYear();
            }
        }
    }
};
const initialState = {
    x: 'x',
    columns: [
        ['x'],
        ['Product']
    ]
};

const ProductSalesGraph = ({productData}) => {
    const {
        id: id,
        title: title,
        sales: sales
    } = productData;
    console.log('title:', title);

    const [productSaleData, setProductSaleData] = useState(initialState);
    useEffect(() => {
        if (!!sales) {
            let dataMonth = ['x'];
            let dataValue = [title];
            sales.forEach(sale => {
                dataMonth.push(sale.weekEnding);
                dataValue.push(sale.retailSales);
            });
            let data = {
                x: 'x',
                columns: [
                    dataMonth,
                    dataValue
                ],
                type: 'spline'
            };
            setProductSaleData(data);
        }
    }, [sales]);
    return (
        <div className='ProductSalesGraph'>
            <p>Retail Sales</p>
            <div id='ProductSalesGraph'><C3Chart data={productSaleData} axis={graphAxis}/></div>

        </div>
    )
};
export default ProductSalesGraph;