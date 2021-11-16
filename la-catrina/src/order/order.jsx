import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig'
import './order.scss';

const Order = () => {

  const [array, setArray] = useState([]);
  // console.log(array);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'pedidos'));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // doc.data() is never undefined for query doc snapshots
        let { personName, tableSelect, ...myUpdatedObject } = doc.data();

        setArray(myUpdatedObject)
      });
    }
    getData()
  }, []);


  return (
    <div className='App'>
      <header className='App-header'>

        {Object.entries(array).forEach(([key, value]) => (
          <div key={value.id}>
            <p>{}</p>

          </div>
        ))
        }
        

        <a href='/menu'>Ir a Menú</a>
      </header>
    </div>
  );
}

export default Order;