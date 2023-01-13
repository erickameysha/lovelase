import React from 'react';
import test from './images/test.png'
import './CatalogItem.css'
import {Link} from "react-router-dom";

export const CatalogItem = (props) => {


     let setId = () => {

       return  setId(props.id)
    }
    return (
        <div className={'item'}>
          <Link to={'/item'}>
            <div className="catalog-images">
              <img src={props.img} alt=""/>
          </div>
          </Link>
            <div className={'catalog-subtitle'}>
                <span className={'catalog-subtitle__title'}>{props.title}</span>
                <span className={'catalog-subtitle__color'}>{props.color}</span>
                <span className={'catalog-subtitle__subtitle'}>{props.price}</span>
            </div>
        </div>
    );
};
