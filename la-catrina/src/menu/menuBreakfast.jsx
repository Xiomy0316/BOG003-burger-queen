import './menu.scss';
import { Fragment, useEffect, useState } from 'react';
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';
//import products from'../data.json'

const MenuBreakfast = () => (
    <Fragment>
        <section className='sect-menu'>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
            </header>
            <main className='container-menu'>
                <div className='sect-input'>
                    <input type='text' placeholder='Nombre' className='input-name'></input>
                    <select name='' className='num-table'>
                        <option disabled selected>Mesa</option>
                        <option value=''>Mesa 1</option>
                        <option value=''>Mesa 2</option>
                        <option value=''>Mesa 3</option>
                        <option value=''>Mesa 4</option>
                        <option value=''>Mesa 5</option>
                    </select>
                </div>
                <div className='sect-buttons'>
                    <a href='/menu' className='btn-principal'>Principal</a>
                    <a href='/break-menu' className='btn-breakfast'>Desayunos</a>
                </div>
                {/* <div className='products'>
                    <div className='food-break'>
                        <h3>Comidas</h3>
                    </div>
                    <div className='drinks-break'>
                        <h3>Bebidas</h3>
                    </div>
                </div> */}
                <nav className = 'go-order'>
                    <a href='/order' className='btn-order'>Ir a Pedidos</a>
                </nav>
            </main>
        </section>
    </Fragment> 
);

const ProductCategory = ({category}) => {
    fetch
    return (<div className='products'>
    <div className='food-break'>
        <h3>{category}</h3>
    </div>
    <div className='drinks-break'>
        <h3>{category}</h3>
    </div>
</div>)
}

/*const ProductsMenu = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("../data.json")
        .then(res => res.json())
        .then(datos => {
            setProducts(datos)
        }) 
    }, [])
    return products;
}
export default Products = () => {
    const products = ProductsMenu
};*/

export default MenuBreakfast;