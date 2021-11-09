import { Fragment, useState } from "react";

const AddToCart = ({data}) => {
  
    const [addCart, setAddCart] = useState([]);
    
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