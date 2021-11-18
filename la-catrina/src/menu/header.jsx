import { Fragment } from "react";
import logoWhite from '../img/burrito-blanco.png';
import cart from '../img/carrito-de-compras.png';
import logoPlus from '../img/mas.png';

const Header = ({ personName, onCustomerName, onTableSelect, tableSelect }) => {

    return (
        <Fragment>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='logo-plus' src={logoPlus} alt='plus' /></a>
                <a href='/order'><img className='go-order' src={cart} alt='cart' /></a>
            </header>
            <div className='sect-input'>
                <input
                    type='text'
                    placeholder='Nombre'
                    className='input-name'
                    onChange={onCustomerName}
                    defaultValue={personName}
                />
                <select
                    name='numTable'
                    className='num-table'
                    onChange={onTableSelect}
                    value={tableSelect}
                >
                    <option disabled value='Mesa'>Mesa</option>
                    <option value='Mesa1'>Mesa 1</option>
                    <option value='Mesa2'>Mesa 2</option>
                    <option value='Mesa3'>Mesa 3</option>
                    <option value='Mesa4'>Mesa 4</option>
                    <option value='Mesa5'>Mesa 5</option>
                </select>
            </div>
            <section className= 'message-input'>
                <p id='messageInput'></p>
            </section>
            <div className='sect-buttons'>
                <a href='/menu' className='btn-principal'>Principal</a>
                <a href='/break-menu' className='btn-breakfast'>Desayunos</a>
            </div>
        </Fragment>
    )
}
export default Header;