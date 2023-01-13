import React, {useState} from 'react';

import {catalogData} from "../Catalog/CatalogFakeData";
import './Item.css'
import {Link} from "react-router-dom";

export const fakeDate = [
    {
        id: 13,
        img: 'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',
        title: 'Трусы стринги "Гуд карма"',
        color: 'Цвет: Чёрно-белый',
        price: '12 byn',
        filter: 'Underwear'
    },]
const Item = (props) => {
    const [state, setState] = useState(catalogData)
const [size, setSize]= useState('')
const [active, setActive]= useState('')
    console.log(active)
    return (
        <div  className={'containerMap'}>

            {fakeDate.map(el => {
                return (
                    <div key={el.id}>
                        <img src={el.img}/>

                    </div>

                )
            })}
            <div className={'getterIMG'}>
                <h1 className={'mapTitle'}><span>Бра "Ля Мэр";</span>
                    <span>Цвет: Чёрный</span>
                </h1>
                <p className={'mapPrice'}>130.00 BYN</p>
                <div>
                    <button className={'colorItem'}>

                    </button>
                </div>
                <div >
                    <p> Размеры</p>
                    <button  onClick={()=> setActive('80C')} className={'sizes'}>80C</button>
                    <button onClick={()=> setActive('70D')} className={'sizes'}> 70D</button>
                    <button onClick={()=> setActive('80F')} className={'sizes'}> 80F</button>
                    <button onClick={()=> setActive('80D')} className={'sizes'}>80D</button>
                    <button onClick={()=> setActive('70C')} className={'sizes'}>70C</button>
                    <button onClick={()=> setActive('80E')} className={'sizes'}> 80E</button>


                </div>
                <Link to={"/basket"}>
                <button className={'btn'}>
                 Добавить в карзину
                </button>

                </Link>
            </div>
        </div>
    );
};

export default Item;