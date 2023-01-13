import React from 'react';
import {fakeDate} from "../Item/Item";
import './Basket.css'

const Basket = ({props}) => {
    return (
        <div>
            <div className={'container'}>

                {/*    <div>*/}
                {/*        <h3 className={'mapTitle'}><span>Бра "Ля Мэр";</span>*/}
                {/*            <span>Цвет: Чёрный</span></h3>*/}
                {/*        <p className={'mapPrice'}>130.00 BYN</p>*/}
                {/*        color:   <button className={'colorItem'}>*/}

                {/*    </button>*/}
                {/*        size: 80C*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Price: 130.00 BYN*/}
                {/*</div>*/}
                <div className={'pises'}>

                    <div>
                        <h3 className={'mapTitle'}><span>Бра "Ля Мэр";</span>
                            <span>Цвет: Чёрный</span></h3>
                        <p className={'mapPrice'}>130.00 BYN</p>
                      <div className={'re'}>
                         <span>color: </span> <button className={'colorItem'}></button>
                      </div>


                    </div>
                    <div className={'prisesType'}>
                        Price: 130.00 BYN
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Basket;