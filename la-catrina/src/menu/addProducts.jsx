import { Fragment, useState } from "react";

const AddProducts = ({dataProduct}) => {
    //console.log(dataProduct)
    const [add, setAdd] = useState([]);
    const [count, setCount] = useState(0);
    console.log(add)
    return (
        <Fragment>
        <button onClick={() => setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={() => count>0 ? setCount(count-1): ''}>-</button>
        <button onClick={() => {
        setAdd([...add, dataProduct]);
        }} className=''>
            Agregar
        </button>
        </Fragment>
    )
}

export default AddProducts;
