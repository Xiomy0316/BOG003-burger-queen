import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const MenuBreakfast = () => {
    const [products, setProducts] = useState([]);
    const dataBreakfast = products.filter(product => product.type.includes('breakfast'));
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
                <ProductCategory data={dataBreakfast} />
            </section>
        </Fragment>)
};

export default MenuBreakfast;
