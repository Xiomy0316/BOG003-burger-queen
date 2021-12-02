import { Fragment, useState } from "react";
import plusSign from '../img/signo-mas.png';
import minusSign from '../img/signo-menos.png';
import ModalMenu from "./modalMenu";

const MenuBurritos = ({ productByCategory, addOrder, setAddOrder }) => {
    const [openModal, setOpenModal] = useState(false);

    const removeToCart = (idDataProduct) => {
        /* Cuando el valor de amount llegue a 0 se elimina el elemento del array */
        const indexFound = addOrder.findIndex(item => item.id === idDataProduct)
        setAddOrder(addOrder.filter(item => item.amount >= 1));
        if (indexFound !== -1) {
            const orderFound = addOrder[indexFound];
            const leftArray = addOrder.slice(0, indexFound);
            const rightArray = addOrder.slice(indexFound + 1, addOrder.length);
            if (orderFound.amount >= 1) {
                setAddOrder([...leftArray, { ...orderFound, amount: orderFound.amount - 1 }, ...rightArray])
            }
        }
    }

    return (
        <Fragment>
            <div>
                <img src={productByCategory.img} alt='' />
                <p>{productByCategory.name}</p>
                <p>$ {productByCategory.price}</p>
                <section className='plus-open-modal'>
                    <img src={minusSign} alt='minus' onClick={() => {
                        removeToCart(productByCategory.id)
                    }}></img>
                    <img src={plusSign} alt='agregar'
                        onClick={() => setOpenModal(true)}
                    />
                    {openModal && < ModalMenu
                        setOpenModal={setOpenModal}
                        burritoProduct={productByCategory}
                        addOrder={addOrder}
                        setAddOrder={setAddOrder}
                    />}
                </section>
            </div>
        </Fragment>
    )
}

export default MenuBurritos;