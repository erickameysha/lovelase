import React, {useContext, useEffect, useState} from 'react';
import './Catalog.css'
import CatalogIMG from './CatalogImages/colection.png'
import {CatalogItem} from "./CatalogsItem/CatalogItem";
import {catalogData} from "./CatalogFakeData";
import Item from "../Item/Item";
import {Link} from "react-router-dom";


const Catalog = () => {
    let [catalog, setCatalog] = useState(catalogData)
    let [catalogItem, setCatalogItem] = useState()
    let [isActive, setIsActive] = useState(false)

    let [filter, setFilter] = useState('All')


    const filterProperty = (array, filter) => {
        if (filter === 'All') return array

        return array.filter((el) => el.filter === filter)
    }
    let hookCatalogItem = (id) => {
        let hook = catalog.filter(el => el.id === id)
        return hook
    }

    let dataType = filterProperty(catalog, filter)

    return (
        <div className={'container'}>

            <div>
                <Link to={'/item'}>
                    <img className={'catalog-img'} src={CatalogIMG} alt=""/>
                </Link>
                <div className="containere">

                    <div className={'flex-container'}>
                        <a className={filter === 'All' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('All')}>Всё</a>
                        <a className={filter === 'Underwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Underwear')}>Нижнее белье</a>
                        <a className={filter === 'BodyJewelry' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('BodyJewelry')}>Украшения для тела</a>
                        <a className={filter === 'clothing' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('clothing')}>Одежда</a>
                        <a className={filter === 'Swimwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Swimwear')}>Купальники</a>

                    </div>


                    <div className="catalog-items">
                        {

                            dataType.map((el) => {

                                return (

                                    <CatalogItem
                                        img={el.img}
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    color={el.color}
                                    price={el.price}
                                    filter={el.filter}
                                    hookCatalogItem={hookCatalogItem}
                                />

                                )   })
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Catalog;