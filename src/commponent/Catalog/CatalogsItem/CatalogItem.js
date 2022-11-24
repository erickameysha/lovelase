import React from 'react';
import test from './images/test.png'
import  './CatalogItem.css'

const CatalogItem = (props) => {
    return (
        <div  className={'item'}>
            <div >
                <img className={'catalog-images'} src={test} alt="gglglg"/>
            </div>
            <div className={'catalog-subtitle'}>
                <span className={'catalog-subtitle__title'}>{props.title}</span>
                <span className={'catalog-subtitle__color'}>{props.color}</span>
                <span className={'catalog-subtitle__subtitle'}>{props.price}</span>
            </div>
        </div>
    );
};

export default CatalogItem;