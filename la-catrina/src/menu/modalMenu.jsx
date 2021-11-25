import { Fragment } from "react";

const ModalMenu = ({ setOpenModal, idProduct }) => {
    console.log(idProduct);

    return (
        <Fragment>
            <div className='background-modal'>
                <section className='container-modal'>
                    <p>{idProduct.name}</p>
                    <li>
                        {idProduct.additional}
                    </li>
                    <button onClick={() => setOpenModal(false)}>
                        X
                    </button>
                </section>
            </div>
        </Fragment>
    )
}

export default ModalMenu;