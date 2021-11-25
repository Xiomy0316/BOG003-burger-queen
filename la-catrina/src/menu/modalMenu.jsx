import  { Fragment } from "react";

const ModalMenu = ({setOpenModal}) => {


    return (
        <Fragment>
            <p>HOLA</p>
        <button onClick ={() => setOpenModal(false)}>
            X
        </button>
        </Fragment>
    )
}

export default ModalMenu;