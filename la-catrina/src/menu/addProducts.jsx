import { Fragment, useState } from "react";

const AddProducts = ({ dataProduct, addOrder, setAddOrder, personName, addCustomerName }) => {
    const [count, setCount] = useState(0);

    //console.log(addOrder)
    // console.log('customer' , addCustomerName);
    // console.log('personname', personName);

    const addToCart = (idDataProduct) => {
        /* Devuelve el índice del primer elemento del array que cumpla con el id seleccionado */
        const indexFound = addOrder.findIndex(item => item.id === idDataProduct)
        /* Comprueba si índice del elemento se encuentra en el array */
        if (indexFound !== -1) {
            /* Se trae el elemento que se encuentra en la posición indexFound */
            const orderFound = addOrder[indexFound];
            /* Toma los elementos del lado izquierdo y derecho del elemento que cumple con la condición */
            const leftArray = addOrder.slice(0, indexFound);
            const rightArray = addOrder.slice(indexFound + 1, addOrder.length);
            /* Agregamos los elementos a un array y sumamos 1 al conteo del elemento que cumple con la condición */
            setAddOrder([...leftArray, { ...orderFound, amount: orderFound.amount + 1 }, ...rightArray])
        } else {
            /* Si el elemento no se encuentra en el array agrega el elemento al array con amount = 1 */
            setAddOrder([...addOrder, { ...dataProduct, amount: 1 }])
        }

    }

    const removeToCart = (idDataProduct) => {
        const indexFound = addOrder.findIndex(item => item.id === idDataProduct)
        if (indexFound !== -1) {
            const orderFound = addOrder[indexFound];
            const leftArray = addOrder.slice(0, indexFound);
            const rightArray = addOrder.slice(indexFound + 1, addOrder.length);
            if (orderFound.amount > 0) {
                setAddOrder([...leftArray, { ...orderFound, amount: orderFound.amount - 1 }, ...rightArray])
            }
            /* Cuando el valor de amount llegue a 0 se elimina el elemento del array */
            else if (orderFound.amount === 0) {
                addOrder.splice(indexFound, 1)
            }
        }
    }

    const subtractCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <Fragment>

            <img src={dataProduct.img} alt='' />
            <p>{dataProduct.name}</p>
            <p>{dataProduct.price}</p>

            <button onClick={() => {
                addToCart(dataProduct.id);
                setCount(count + 1)
            }}>+</button>
            <p>{count}</p>
            <button onClick={() => {
                removeToCart(dataProduct.id);
                subtractCount()
            }}>-</button>
            {/* <button onClick={} className=''>
                Agregar
            </button> */}

        </Fragment>
    )

}

export default AddProducts;

/* FUNCIONA SIN CONTADOR

const addToCart = (idDataProduct) => {

    if (addOrder.length === 0) {
        setAddOrder([...addOrder, dataProduct])
    } else {
        // Si el id
        if (addOrder.find(item => item.id === idDataProduct)) {
            setCount(count + 1)
            console.log('mismo')
        } else {
            setAddOrder([...addOrder, dataProduct])
            console.log('no es el mismo');
        }
    }

} */
