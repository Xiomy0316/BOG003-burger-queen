import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';

import axios from 'axios';
import Header from './header';
//import dataJson from '../data/data.json';
//console.log(dataJson.products[0].category);

const MenuBreakfast = () => {
    const [products, setProducts] = useState([]);
    const databreakfast = products.filter(product => product.type.includes('breakfast'));
    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                console.log(res);
                setProducts(res.products)
            })
    }, [])
    
    return (
        <Fragment>
            <section className='sect-menu'>
                <Header />
                <main className='container-menu'>
                    <div>
                        <ProductCategory data={databreakfast}/>
                    </div>
                    <nav className='go-order'>
                        
                    
                        <a href='/order' className='btn-order'>Ver Carrito</a>
                    </nav>
                </main>
            </section>
        </Fragment>)
};

export default MenuBreakfast;
