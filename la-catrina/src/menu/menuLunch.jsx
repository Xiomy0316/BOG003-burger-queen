import './menu.scss';
import { Fragment } from 'react';

const MenuLunch = () => (
    <Fragment>
    <section className="sect-menu">
        <header>
            <p>
                MENU DEl DÍA
            </p>
            <a href='/'>Ir a Home</a> <br></br>
            <a href='/order'>Ir a Pedidos</a> <br></br>
            <a href='/break-menu'>Ir a Desayuno</a>
        </header>
    </section>
    </Fragment>
);

export default MenuLunch;