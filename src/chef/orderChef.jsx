import db from '../firebase/firebaseConfig';
import { updateDoc, doc } from "firebase/firestore";
import { Fragment, useState, useEffect } from 'react';

const OrderChef = (orderObject) => {
    const updateStateOrder = (order) => {
        const stateOrder = doc(db, "pedidos", order.id);
        if (order.state === 'Enviar a cocina') {
            return updateDoc(stateOrder, {
                state: 'En preparación'
            });
        }
        if (order.state === 'En preparación') {
            return updateDoc(stateOrder, {
                state: 'Para entregar'
            });
        }
    }

    const prueba = (product) => {
        return Object.values(product).filter(item => typeof item === 'object')
    }

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
    }, [timeOn]);

    return (
        <Fragment>
            {Object.values(orderObject).map((product) =>
                <div key={product.id} className='card-order'>
                    <div className='timer' >
                        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
                        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} </span>
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
                                {productInOrder.category === 'Comidas' && productInOrder.type === 'lunch' ? productInOrder.additional.map(additional =>
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
                                    setTimeOn(true)
                                })
                            }}>
                                Preparar
                            </button> : ''}
                        {product.state === 'En preparación'
                            ? <button onClick={() => updateStateOrder(product)}>
                                Para entregar
                            </button> : ''}
                    </section>
                </div>
            )
            }
        </Fragment>
    )
}

export default OrderChef;