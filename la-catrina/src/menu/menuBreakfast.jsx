import './menu.scss';
import { Fragment } from 'react';
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';

const MenuBreakfast = () => (
    <Fragment>
        <main className='sect-menu'>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
            </header>
            <div className='container-menu'>
                <section className='sect-input'>
                    <input type='text' placeholder='Nombre' className='input-name'></input>
                    <select name='' className='num-table'>
                        <option disabled selected>Mesa</option>
                        <option value=''>Mesa 1</option>
                        <option value=''>Mesa 2</option>
                        <option value=''>Mesa 3</option>
                        <option value=''>Mesa 4</option>
                        <option value=''>Mesa 5</option>
                    </select>
                </section>
                <section className='sect-buttons'>
                    <a href='/menu' className='btn-principal'>Principal</a>
                    <a href='/break-menu' className='btn-breakfast'>Desayunos</a>
                </section>
                <div className='products'>
                    <section className='food-break'>
                        <h3>Comidas</h3>
                    </section>
                    <section className='drinks-break'>
                        <h3>Bebidas</h3>
                    </section>
                </div>
                <nav className = 'go-order'>
                    <a href='/order' className='btn-order'>Ir a Pedidos</a>
                </nav>
            </div>
        </main>
    </Fragment>
);

export default MenuBreakfast;