import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';
import axios from 'axios';

const MenuLunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                console.log('res de axios', res.lunch)
                setLunch(res.lunch)
            })
    }, [])
    return (
        <Fragment>
            <section className="sect-menu">
                <header >
                    <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                    <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
                </header>
                <p>
                    MENU DEl DÍA
                </p>
                <a href='/'>Ir a Home</a> <br></br>
                <a href='/order'>Ir a Pedidos</a> <br></br>
                <a href='/break-menu'>Ir a Desayuno</a>
                <div>
                    <ProductCategory data={lunch} />
                </div>
            </section>
        </Fragment>
    )
};

export default MenuLunch;