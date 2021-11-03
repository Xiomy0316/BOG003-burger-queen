import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import Header from './header';
import axios from 'axios';

const MenuLunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setLunch(res.lunch)
            })
    }, [])
    return (
        <Fragment>
            <section className="sect-menu">
                <Header />
                <div>
                    <ProductCategory data={lunch} />
                </div>
                <nav className='go-order'>
                    <a href='/order' className='btn-order'>Ir a Pedidos</a>
                </nav>
            </section>
        </Fragment>
    )
};

export default MenuLunch;