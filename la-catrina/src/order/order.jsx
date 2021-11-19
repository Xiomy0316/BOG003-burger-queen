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
        //console.log('doc data', doc.data());
        // doc.data() is never undefined for query doc snapshots
        let { personName, tableSelect, ...updatedObjectProducts } = doc.data();
        let newOrders = Object.values(updatedObjectProducts)
        //console.log(updatedObjectProducts);
        // for (const newOrders in updatedObjectProducts) {
        //   updatedObjectProducts[newOrders].uid = doc.id
        //   orders.push(updatedObjectProducts)
        // }
        //orders.push(updatedObjectProducts)
        /* setOrdersData( updatedObjectProducts) */
        newOrders.map(orderProducts => (
          orderProducts.uid = doc.id
          
        ))
        orders.push(...newOrders);
        //console.log('updatedObjectProducts', newOrders);
      });
      console.log(orders, 'newOrders');
      setOrdersData(orders)


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