import { useState } from "react";

const AddProducts = () => {

    const [add, setAdd] = useState([]);

    return (
        // Cuando damos click dos veces al mismo nos sale error
        // Como es más recomendable -Poner la función afuera o declarla adentro como estamos haciendo
        <button onClick={() => {
        setAdd(add.push('azucar'));
        console.log(add)
        }} className=''>
            Agregar
        </button>
    )
}

export default AddProducts;