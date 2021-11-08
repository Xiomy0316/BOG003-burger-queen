import { Fragment, useState } from "react";

const AddProducts = ({dataProduct}) => {
  
    // const [add, setAdd] = useState([]);
    const [count, setCount] = useState(0);
    //console.log(count)

    console.log('dataproduct', dataProduct)

    dataProduct.amount = count;
    // setAdd([...add, dataProduct]);
    // const addToCart = () => {
        
        
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
