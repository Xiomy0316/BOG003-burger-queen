import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig'
import './order.scss';

const Order = () => {

  useEffect(() => {

    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "pedidos"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
      });
    }
    getData()

  }, []);

  return (
  <div className="App">
    <header className="App-header">
      <p>
        ORDERRR ¡¡¡¡¡¡
      </p>
      <a href='/menu'>Ir a Menú</a>
    </header>
  </div>
);}

export default Order;