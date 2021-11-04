import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';

import axios from 'axios';
import Header from './header';
//import dataJson from '../data/data.json';
//console.log(dataJson.products[0].category);

const MenuBreakfast = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setProducts(res.breakfast)
            })
    }, [])
    return (
        <Fragment>
            <section className='sect-menu'>
                <Header />
                <main className='container-menu'>
                    <div>
                        <ProductCategory data={products} />
                    </div>
                    <nav className='go-order'>
                        <a href='/order' className='btn-order'>Ir a Pedidos</a>
                    </nav>
                </main>
            </section>
        </Fragment>)
};

export default MenuBreakfast;
