import { Fragment } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddToCart = ({ addOrder, personName, tableSelect }) => {

    const createOrder = () => {
        uploadOrder();
        console.log('guardado');
        savedOrderAlert()
    }

    const uploadOrder = async () => {
        console.log('Se crea pedido');
        const docRef = await addDoc(collection(db, "pedidos"),
            { ...addOrder, personName, tableSelect, state: 'Enviar a cocina' }
        )
        console.log("Document written with ID: ", docRef.id);
    }

    const validateInputName = () => {
        if (personName === '' || tableSelect === 'Mesa') {
            Swal.fire({
                title: '<strong>Por favor rellena todos los campos</strong>',
                icon: 'info'
            })
        } else if (addOrder.length === 0) {
            Swal.fire({
                title: '<strong>Por favor agrega un producto</strong>',
                icon: 'error'
            })
        }
        else {
            createOrder()
        }
    }

    const savedOrderAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido guardado',
            showConfirmButton: false,
            timer: 2500
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.reload(false)
            }
        })
    }

    return (
        <Fragment>
            <section className='save-order'>
                <button
                    className='btn-save-order'
                    onClick={() => {
                        validateInputName()
                    }}
                >
                    Guardar Pedido
                </button>
            </section>
        </Fragment>
    )
}

export default AddToCart;