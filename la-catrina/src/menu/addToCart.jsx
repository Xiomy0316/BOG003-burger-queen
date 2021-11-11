import { Fragment, /* useState */ } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig'

const AddToCart = ({ addOrder, setAddOrder, personName, tableSelect }) => {

    // const [addCart, setAddCart] = useState([]);

    const createOrder = () => {
        setAddOrder([...addOrder, { person: personName }, { table: tableSelect }]);
        uploadOrder(); 
    }

    const uploadOrder = async () => {
        // Add a new document in collection "cities"
        const docRef = await addDoc(collection(db, "pedidos"),
        {...addOrder, personName ,  tableSelect }
        ).catch((error) => console.log('error en upload', error));
        
        console.log("Document written with ID: ", docRef.id);
    }

    const validateImputName = () => {
        if (personName === '' || tableSelect === 'Mesa'){
            alert('No puede ingresar campo vacío')
        } else {
            createOrder()
        }
    }


    return (
        <Fragment>
            <button onClick={validateImputName}>
                Guardar Pedido
            </button>
        </Fragment>
    )
}

export default AddToCart;