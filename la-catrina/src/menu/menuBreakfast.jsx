import './menu.scss';
import ProductCategory from './productCategory';
import { Fragment, useEffect, useState } from 'react';
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';
import axios from 'axios';
//import dataJson from '../data/data.json';


//console.log(dataJson.products[0].category);
//const data = dataJson.products;
const MenuBreakfast = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
        .get('data.json')
            .then(res => res.data)
            .then(res => {
                console.log('res de axios', res.products)
                setProducts(res.products)
            })
    }, [])
    return (
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
                    <div>
                        <ProductCategory data={products} />
                    </div>
                    {/* <div className='products'>
                    <div className='food-break'>
                        <h3>Comidas</h3>
                    </div>
                    <div className='drinks-break'>
                        <h3>Bebidas</h3>
                    </div>
                </div> */}
                    <nav className='go-order'>
                        <a href='/order' className='btn-order'>Ir a Pedidos</a>
                    </nav>
                </main>
            </section>
        </Fragment>)
};





// const ProductCategory = () => {

//     return (<div className='products'>
//     <div className='food-break'>
//         <ul>
//         {data.map((item) => (
//             <div key= {item.id}>
//             <h3>{item.category}</h3>
//             <img src={item.img} alt=''/>
//             </div>
//         ))

//     }
//     </ul>
//     </div>
//     <div className='drinks-break'>
//         <h3>Bebidas</h3>
//     </div>
// </div>)
// }

// const ProductCategory = ({category}) => {

//     return (<div className='products'>
//     <div className='food-break'>
//         <h3>{category}</h3>
//     </div>
//     <div className='drinks-break'>
//         <h3>{category}</h3>
//     </div>
// </div>)
// }

export default MenuBreakfast;

//'https://ghibliapi.herokuapp.com/films'