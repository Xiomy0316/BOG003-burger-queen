import { Fragment } from "react";
import logoWhite from '../img/burrito-blanco.png';
import add from '../img/mas.png';

const Header = ({ personName, onCostumerName, addOrder, setAddOrder, onTableSelect, tableSelect }) => {

    

    /* const onCostumerName = (event) => {
        setPerson(
            event.target.value
        );
    } */



    /* Añadir el nombre del usuario al array de set add (me traje set add y add como props ) */
    /* const addCustomerName = () =>  setAddOrder([...addOrder, { person: personName }, {table: tableSelect}]) */
   

    return (
        <Fragment>
            <header >
                <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
                <a href='/menu'><img className='add-order' src={add} alt='logo' /></a>
            </header>
            <div className='sect-input'>
                {/* <p>{personName === '' ? 'error' : ''}</p> */}
                <input
                    type='text'
                    placeholder='Nombre'
                    className='input-name'
                    /* Agregué el evento onchange que obtiene el valor del imput y onblur que lo añade al array */
                    onChange={onCostumerName}
                    /* onBlur={addCustomerName} */
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
            <div className='sect-buttons'>
                <a href='/menu' className='btn-principal'>Principal</a>
                <a href='/break-menu' className='btn-breakfast'>Desayunos</a>
            </div>
        </Fragment>
    )
}
export default Header;