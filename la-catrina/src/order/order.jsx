import React, { Fragment, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import ShowOrders from "./showOrders";
import logoWhite from '../img/burrito-blanco.png';
import './order.scss';

const Order = () => {

  const [ordersData, setOrdersData] = useState([]);
  console.log(ordersData);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'pedidos'));
      querySnapshot.forEach((doc) => {
        //console.log('doc data', doc.data());
        // doc.data() is never undefined for query doc snapshots
        let { personName, tableSelect, ...updatedObjectProducts } = doc.data();
        setOrdersData(Object.values(updatedObjectProducts))
        /* setOrdersData( updatedObjectProducts) */

        // console.log('updatedObjectProducts', updatedObjectProducts);
      });
    }
    getData()
  }, []);

  return (
    <Fragment>
      <section className='sect-order'>
        <header className='order-header'>
          <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
        </header>
        <ShowOrders ordersData={ordersData} setOrdersData={setOrdersData}/>
        {/* Estilos iguales al boton save order (dejar estos, cambiar nombres o copiar nuevos estilos en order.scss?) */}
        <section className='save-order'>
          <a className='btn-save-order' href='/menu'>
            Ir a Menú
          </a>
        </section>
      </section>
    </Fragment>
  );
}

export default Order;