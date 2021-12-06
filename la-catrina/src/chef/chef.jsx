import { Fragment, useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import Order from './order'
import './chef.scss';
//import Timer from './timer';

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

  //console.log(stateOrder.stateOrder, 'estado orden');

  return (
    <Fragment>
      <section className='orders-chef'>
        <a href='/'>Ir a home</a>
        {ordersData.filter(order => (order.state !== 'Entregado' && order.state !== 'Para entregar')).map((orderObject) => (
        <Order orderObject = {orderObject}/>))
        }
      </section>
    </Fragment>
  )
}

export default Chef;