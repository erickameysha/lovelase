import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <div className={s.containerIr}>
                    <div className={s.container}>

                        <div className={s.wrap}>


                            <div className={s.items}>
                                <Link className={s.item} to={'/aboutUS'}>
                                    О нас gf
                                </Link>
                                <Link className={s.item} to={'/'}>
                                    MAIN
                                </Link>
                                <Link className={s.item} to={'/catalog'}>
                                 CATALOG
                                </Link>
                            </div>
                        
                        <div className={s.logo}>
                            <img  className={s.ks} src="https://lovelace.by/image/catalog/logo.png" alt=""/>
                        </div>
                            <div
                            className={s.temp}>
                                <Link to={'/reg'}>Registration </Link>
                            </div>
                        </div>
                   
     




                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;