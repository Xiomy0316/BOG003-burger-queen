import React, { Fragment, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import ShowOrders from "./showOrders";
import logoWhite from '../img/burrito-blanco.png';
import './order.scss';

const Order = () => {

  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      onSnapshot(query(collection(db, 'pedidos')), (querySnapshot) => {
        let orders = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          orders.push(data);
        });
        setOrdersData(orders);
      })
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
        <section className='go-menu'>
          <a className='btn-save-order' href='/menu'>
            Ir a Menú
          </a>
        </section>
      </section>
    </Fragment>
  );
}

export default Order;