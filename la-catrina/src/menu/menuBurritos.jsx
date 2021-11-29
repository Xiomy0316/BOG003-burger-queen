import { Fragment, useState } from "react";
import plusSign from '../img/signo-mas.png';
import ModalMenu from "./modalMenu";

const MenuBurritos = ({ productByCategory, addOrder, setAddOrder }) => {
    const [openModal, setOpenModal] = useState(false);
    console.log(productByCategory);

    return (
        <Fragment>
            <div>
                <img src={productByCategory.img} alt='' />
                <p>{productByCategory.name}</p>
                <p>$ {productByCategory.price}</p>
                <section className='plus-open-modal'>
                    <img src={plusSign} alt='agregar'
                        onClick={() => setOpenModal(true)}
                    />
                    {openModal && < ModalMenu setOpenModal={setOpenModal} burritoProduct={productByCategory} addOrder={addOrder} setAddOrder={setAddOrder} />}
                </section>
            </div>
        </Fragment>
    )
}

export default MenuBurritos;