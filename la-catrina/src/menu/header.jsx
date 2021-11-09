import { Fragment, useState } from "react";
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';

const Header = ({ personName, onCostumerName }) => {

    const [table, setTable] = useState('Mesa');

    /* const onCostumerName = (event) => {
        setPerson(
            event.target.value
        );
    } */

    const onTableSelect = (event) => {
        setTable(
            event.target.value
        );
    }

    return (
        <Fragment>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
            </header>
            <div className='sect-input'>
                <input
                    type='text'
                    placeholder='Nombre'
                    className='input-name'
                    onBlur={onCostumerName}
                   defaultValue={personName} 
                />
                <select
                    name='numTable'
                    className='num-table'
                    onChange={onTableSelect}
                    value={table}
                >
                    <option disabled value='Mesa'>Mesa</option>
                    <option value='Mesa1'>Mesa 1</option>
                    <option value='Mesa2'>Mesa 2</option>
                    <option value='Mesa3'>Mesa 3</option>
                    <option value='Mesa4'>Mesa 4</option>
                    <option value='Mesa5'>Mesa 5</option>

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