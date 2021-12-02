import { Fragment, useState, useEffect } from 'react';
import { collection, onSnapshot, query, updateDoc, doc, orderBy } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import './chef.scss';
//import Timer from './timer';

const Chef = () => {

  const [ordersData, setOrdersData] = useState([]);

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

  const updateStateOrder = async (order) => {
    const stateOrder = doc(db, "pedidos", order.id);
    if (order.state === 'Enviar a cocina') {
      await updateDoc(stateOrder, {
        state: 'En preparación'
      });
    }
    if (order.state === 'En preparación') {
      await updateDoc(stateOrder, {
        state: 'Para entregar'
      });
    }
  }


  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  const time = () => {
    setDiff(new Date(+new Date() - initial))
  };

  const startTime = () => { setInitial(+new Date()) }

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(time);
    }
  }, [initial]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(time);
    }
  }, [diff]);
  //console.log(stateOrder.stateOrder, 'estado orden');




  return (
    <Fragment>
      <section className='orders-chef'>
        <a href='/'>Ir a home</a>
        {ordersData.filter(order => (order.state !== 'Entregado' && order.state !== 'Para entregar')).map((orderObject) => (
          <div key={orderObject.id} className='card-order'>
            <div className='timer' >
              <h3>{timeFormat(diff)} </h3>
            </div>
            {/* <div><Timer stateOrder={orderObject.state} /> </div> */}
            <section className='info-order'>
              <p>{orderObject.personName}</p>
              <p>{orderObject.tableSelect}</p>
            </section>
            {Object.values(orderObject).map((productInOrder) =>
              <div key={productInOrder.id} className='product-order'>
                <p> {productInOrder.name}</p>
                <p> {productInOrder.protein}</p>
                <p> {productInOrder.amount}</p>
                {productInOrder.category === 'Comidas' && productInOrder.type === 'lunch' ? productInOrder.additional.map(additional =>
                  <div className='additional-burritos'>
                    <p>•{additional.name}</p>
                  </div>)
                  : ''}
              </div>
            )}
            <section className='btn-prepare'>
              {orderObject.state === 'Enviar a cocina'
                ? <button onClick={() => { updateStateOrder(orderObject); startTime() }}>
                  Preparar
                </button> : ''}
              {orderObject.state === 'En preparación'
                ? <button onClick={() => updateStateOrder(orderObject)}>
                  Para entregar
                </button> :
                ''}

            </section>
          </div>
        ))
        }
      </section>
    </Fragment>
  )
}

const timeFormat = (date) => {
  if (!date) return '00:00';

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();

  mm = mm < 10 ? '0' + mm : mm;
  ss = ss < 10 ? '0' + ss : ss;

  return `${mm}:${ss}`;

}


export default Chef;