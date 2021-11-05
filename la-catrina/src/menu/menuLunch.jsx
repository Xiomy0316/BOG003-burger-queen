import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import Header from './header';
import axios from 'axios';

const MenuLunch = () => {
    const [lunch, setLunch] = useState([]);
    const datalunch = lunch.filter(product => product.type.includes('lunch'));
    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setLunch(res.products)
            })
    }, [])
    
    return (
        <Fragment>
            <section className="sect-menu">
                <Header />
                <div>
                    {}
                    <ProductCategory data={datalunch}/>
                </div>
                <nav className='go-order'>
                    <a href='/order' className='btn-order'>Ir a Pedidos</a>
                </nav>
            </section>
        </Fragment>
    )
};

export default MenuLunch;