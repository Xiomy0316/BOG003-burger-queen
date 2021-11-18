import { Fragment, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

const AddToCart = ({ addOrder, setAddOrder, personName, tableSelect }) => {

    const [disabledButton, setDisabledButton] = useState(true);

    const messageInput = document.getElementById('messageInput');
    const messageSaveOrder = document.getElementById('messageSaveOrder')
    // console.log(addOrder, 'addToCart');

    const createOrder = () => {
        uploadOrder();
        messageSaveOrder.innerText = `¡Pedido guardado!`;

    }


    const uploadOrder = async () => {
        console.log('Se crea pedido');
        const docRef = await addDoc(collection(db, "pedidos"),
            { ...addOrder, personName, tableSelect }
        )
        console.log("Document written with ID: ", docRef.id);
    }

    const validateInputName = () => {
        if (personName === '' || tableSelect === 'Mesa') {
            messageInput.innerHTML = `Por favor rellene todos los campos`;
        } else if (addOrder.length === 0) {
            alert('No has hecho un pedido')
        }
        else {
            createOrder()
        }
    }
    

    return (
        <Fragment>
            <section className='save-order'>
                <p id='messageSaveOrder'></p>
                <button disabled = {
                    disabledButton === false ? true : false
                }
                    className='btn-save-order' 
                    onClick={() => {
                        validateInputName()
                        setDisabledButton(false)}}
                    >
                    Guardar Pedido
                </button>
            </section>
        </Fragment>
    )
}

export default AddToCart;