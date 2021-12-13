import { Fragment, useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';
import OrderChef from './orderChef';
import logoWhite from '../img/burrito-blanco.png';
import './chef.scss';

const Chef = () => {

  const [ordersData, setOrdersData] = useState([]);
  console.log(ordersData, 'ordersData')

  useEffect(() => {
    const getData = async () => {
      onSnapshot(query(collection(db, 'pedidos'), orderBy('date')), (querySnapshot) => {
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
      <section className='orders-chef'>
        <header className='order-header'>
          <a href='/'><img className='logo-white' src={logoWhite} alt='logo' /></a>
        </header>
        <section className='orders-chef-container'>
          {ordersData.filter(order => (order.state !== 'Entregado' && order.state !== 'Para entregar')).map((orderObject) => (
            <OrderChef orderObject={orderObject} />))
          }
        </section>
      </section>
    </Fragment>
  )
}

export default Chef;