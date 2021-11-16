import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const MenuLunch = () => {
    const [lunch, setLunch] = useState([]);
    const dataLunch = lunch.filter(product => product.type.includes('lunch'));
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
            <section className='sect-menu'>
                <ProductCategory data={dataLunch} />
            </section>
        </Fragment>
    )
};

export default MenuLunch;
