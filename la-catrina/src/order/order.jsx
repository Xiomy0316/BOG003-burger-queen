import React, { Fragment, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import ShowOrders from "./showOrders";
import logoWhite from '../img/burrito-blanco.png';
import './order.scss';

const Order = () => {

  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let orders = [];

      const querySnapshot = await getDocs(collection(db, 'pedidos'));
      querySnapshot.forEach((doc) => {
        let { personName, tableSelect, ...updatedObjectProducts } = doc.data();
        orders.push(updatedObjectProducts);
      });
      setOrdersData(orders);
    }
    getData()
  }, []);

  return (
    <Fragment>
      <section className='sect-order'>
        <header className='order-header'>
          <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
        </header>
        <ShowOrders ordersData={ordersData} setOrdersData={setOrdersData} />
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