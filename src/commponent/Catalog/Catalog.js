import React, {useState} from 'react';
import './Catalog.css'
import CatalogIMG from './CatalogImages/colection.png'
import CatalogItem from "./CatalogsItem/CatalogItem";
import {catalogData} from "./CatalogFakeData";


const Catalog = () => {
    let [catalog, setCatalog] = useState(catalogData)
    let [isActive, setIsActive] = useState(true)
    let [filter, setFilter] = useState('All')


    const filterProperty = (array, filter) => {
        if (filter === 'All') return array

        return array.filter((el) => el.filter === filter)
    }
    let dataType = filterProperty(catalog, filter)
    return (
        <div className={'container'}>

            <div>
                <div>
                    <img className={'catalog-img'} src={CatalogIMG} alt=""/>
                </div>
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

                                return <CatalogItem
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    color={el.color}
                                    price={el.price}
                                    filter={el.filter}
                                />
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Catalog;