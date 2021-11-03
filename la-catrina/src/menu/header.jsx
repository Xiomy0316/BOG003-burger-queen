import { Fragment } from "react";
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';

const Header = () => {
    return (
        <Fragment>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
            </header>
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
        </Fragment>
    )
}
export default Header;