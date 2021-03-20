import React from 'react';
import './ProductsContainer.scss';

const SideBar = ({productData}) => {
    const {
        image:image,
        title:title,
        subtitle:subtitle,
        tags:tags
    } = productData;
    return (
        <div className='SideBar'>
            <div className='SideBar__ProductInfo'>
                <img src={image}/>
                <p className='SideBar__ProductInfo__Title'>{title}</p>
                <p className='SideBar__ProductInfo__Subtitle'>{subtitle}</p>
            </div>

            <hr/>
            <div className='SideBar__Tags'>
                {!!tags && tags.map(tag=><span>{tag}</span>)}
            </div>
            <hr/>
        </div>
    )
};
export default SideBar;
