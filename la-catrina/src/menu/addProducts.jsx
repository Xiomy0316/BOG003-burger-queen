import { useState } from "react";

const AddProducts = ({dataProduct}) => {
    //console.log(dataProduct)
    const [add, setAdd] = useState([]);
    console.log(add)
    return (
        <button onClick={() => {
        setAdd([...add, dataProduct]);
        
        }} className=''>
            Agregar
        </button>
    )
}

export default AddProducts;
