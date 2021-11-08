import { Fragment, useState } from "react";

const AddToCart = ({data}) => {
  
    const [addCart, setAddCart] = useState([]);
    
    //console.log(count)

    console.log('data', data)

    
    
    const createOrder = () => {
        setAddCart([...addCart, data]);
     }
    return (
        <Fragment>
        <button onClick={createOrder} >
        Guardar Pedido
        </button>
        </Fragment>
    )
}

export default AddToCart;