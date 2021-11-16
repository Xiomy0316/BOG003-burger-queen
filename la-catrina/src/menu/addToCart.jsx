import { Fragment, /* useState */ } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig'

const AddToCart = ({ addOrder, setAddOrder, personName, tableSelect }) => {
    const messageInput = document.getElementById('messageInput');
    const messageSaveOrder = document.getElementById('messageSaveOrder')
    // 'const [addCart, setAddCart] = useState([]);

    const createOrder = () => {
        setAddOrder([...addOrder, { person: personName }, { table: tableSelect }]);
        uploadOrder();
        messageSaveOrder.innerText = `Pedido Guardado`;
    }

    const uploadOrder = async () => {
        console.log('Se crea pedido');
        const docRef = await addDoc(collection(db, "pedidos"),
            { ...addOrder, personName, tableSelect }
        ).catch((error) => console.log('error en upload', error));
        console.log("Document written with ID: ", docRef.id);
    }

    const validateInputName = () => {
        if (personName === '' || tableSelect === 'Mesa') {
            messageInput.innerHTML = `Por favor rellene todos los campos`;
        } if (addOrder.length === 0) {
            console.log(addOrder.length);
            alert('No has hecho un pedido')
        } else {
            createOrder()
        }
    }

    return (
        <Fragment>
            <section className='save-order'>
                <p id='messageSaveOrder'></p>
                <button className='btn-save-order' onClick={validateInputName}>
                    Guardar Pedido
                </button>
            </section>
        </Fragment>
    )
}

export default AddToCart;