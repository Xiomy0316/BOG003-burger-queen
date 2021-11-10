import { Fragment, useState } from "react";

const AddToCart = ({addOrder, setAddOrder, personName, tableSelect}) => {
  
    const [addCart, setAddCart] = useState([]);
    
    const createOrder = () => {
        setAddOrder([...addOrder, { person: personName }, {table: tableSelect} ]);
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