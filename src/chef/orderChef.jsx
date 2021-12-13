import db from '../firebase/firebaseConfig';
import { updateDoc, doc } from "firebase/firestore";
import { Fragment, useState, useEffect } from 'react';

const OrderChef = (orderObject) => {

    const prueba = (product) => {
        return Object.values(product).filter(item => typeof item === 'object')
    }
   const [startHour, setStartHour] = useState(0);
    let hora = 0;
    const currentDate = new Date();
    const startTime = () => {
        let minutes = Math.floor((currentDate / (1000 * 60)) % 60),
            hours = Math.floor((currentDate / ((1000 * 60 * 60)) % 24) - 5);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return hours + ":" + minutes;
    }

    const updateStateOrder = (order) => {
        const stateOrder = doc(db, "pedidos", order.id);
        if (order.state === 'Enviar a cocina') {
            return updateDoc(stateOrder, {
                state: 'En preparación',
                startTime: new Date()
            });
        }
        if (order.state === 'En preparación') {
            return updateDoc(stateOrder, {
                state: 'Para entregar',
                finalTime: new Date()
            });
        }
    }

    /* const preparationTime = (order) => {
    currentDate.getHours() + ':' + currentDate.getMinutes();
    } */

    /*
        const [time, setTime] = useState(0);
        const [timeOn, setTimeOn] = useState(false);
    
        useEffect(() => {
            let interval = null;
            if (timeOn) {
                interval = setInterval(() => {
                    setTime(prevTime => prevTime + 10)
                }, 10)
            } else {
                clearInterval(interval)
            }
            return () => clearInterval(interval)
        }, [timeOn]); */

    return (
        <Fragment>
            {Object.values(orderObject).map((product) =>
                <div key={product.id} className='card-order'>
                    <div className='timer' >
                        <span>Hora inicio: {startHour}</span>
                    </div>
                    <section className='info-order'>
                        <p>{product.personName}</p>
                        <p>{product.tableSelect}</p>
                    </section>
                    <section className='line-orders-section'>
                        <canvas className='line-orders'> </canvas>
                    </section>
                    <>{
                        prueba(product).map((productInOrder) =>
                            <div className='container-product-order'>
                                <div key={productInOrder.id} className='product-order'>
                                    <p> {productInOrder.name}</p>
                                    <p className='num-order'> {productInOrder.protein}</p>
                                    <p className='num-order'> {productInOrder.amount}</p>
                                </div>
                                {productInOrder.category === 'Comidas' && productInOrder.type === 'lunch' ? productInOrder.additional
                                    .map(additional =>
                                        <div className='additionals-order'>
                                            <p>•{additional.name}</p>
                                        </div>)
                                    : ''}
                            </div>
                        )}</>
                    <section className='btn-deliver'>
                        {product.state === 'Enviar a cocina'
                            ? <button onClick={() => {
                                updateStateOrder(product).then(() => {
                                    hora = startTime()
                                })
                            }}>
                                Preparar
                            </button> : ''}
                        {product.state === 'En preparación'
                            ? <button onClick={() => {
                                updateStateOrder(product).then(() => {
                                    //preparationTime()
                                })
                            }}>
                                Para entregar
                            </button> : ''}
                            <button onClick={ () => {
                                setStartHour(startTime())
                            }} >prueba</button>
                    </section>
                </div>
            )
            }
        </Fragment>
    )
}

export default OrderChef;