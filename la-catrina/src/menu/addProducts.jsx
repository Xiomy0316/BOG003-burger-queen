import { Fragment, useState } from "react";

const AddProducts = ({ dataProduct, array , setArray }) => {

    const [count, setCount] = useState(0);
    console.log(array)

    // console.log('dataproduct', dataProduct)

    dataProduct.amount = count;

    const addToCart = (idDataProduct) => {
        if (array.length === 0) {
            setArray([...array, dataProduct])
        } else {
            array.forEach((product) => {
                if (product.id === idDataProduct) {
                    setCount(count + 1)
                    console.log('mismo producto');
                } else {

                    setArray([...array, dataProduct])
                    console.log('producto difrente');
                }
            })
        }
    }

    const removeToCart = () => (
        count > 0 ? setCount(count - 1) : '')


    return (
        <Fragment>
            <button onClick={() => addToCart(dataProduct.id)}>+</button>
            <p>{count}</p>
            <button onClick={removeToCart}>-</button>
            {/* <button onClick={} className=''>
                Agregar
            </button> */}
        </Fragment>
    )
}

export default AddProducts;
