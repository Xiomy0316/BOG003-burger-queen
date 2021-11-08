import { Fragment, useState } from "react";

const AddProducts = ({dataProduct}) => {
  
    // const [add, setAdd] = useState([]);
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]);
    dataProduct.amount = count;
    

    console.log('dataproduct', dataProduct)

    setOrder([...order]);
    // setAdd([...add, dataProduct]);
    // const addToCart = () => {
        console.log(order)
        
        
    // }
    return (
        <Fragment>
        <button onClick={() => setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={() => count>0 ? setCount(count-1): ''}>-</button>
        {/* <button onClick={addToCart} className=''>
            Agregar
        </button> */}
        </Fragment>
    )
}

export default AddProducts;
