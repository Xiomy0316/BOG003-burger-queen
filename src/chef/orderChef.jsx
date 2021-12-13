import db from '../firebase/firebaseConfig';
import { updateDoc, doc } from "firebase/firestore";
import { Fragment } from 'react';

const OrderChef = (orderObject) => {

    const filterByObject = (product) => {
        return Object.values(product).filter(item => typeof item === 'object')
    }

    const startTime = (seconds) => {
        let minutes = Math.floor(((seconds * 1000) / (1000 * 60)) % 60),
            hours = Math.floor(((seconds * 1000) / ((1000 * 60 * 60)) % 24) - 5);

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

    return (
        <Fragment>
            {Object.values(orderObject).map((product) =>
                <div key={product.id} className='card-order'>
                    <div className='timer' >
                        {product.startTime !== undefined ? <span>Hora inicio: {startTime(product.startTime.seconds)}</span> : <span>Hora inicio: 0</span>}
                    </div>
                    <section className='info-order'>
                        <p>{product.personName}</p>
                        <p>{product.tableSelect}</p>
                    </section>
                    <section className='line-orders-section'>
                        <canvas className='line-orders'> </canvas>
                    </section>
                    <>{filterByObject(product).map((productInOrder) =>
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
                            ? <button onClick={() =>
                                updateStateOrder(product)
                            }>
                                Preparar
                            </button> : ''}
                        {product.state === 'En preparación'
                            ? <button onClick={() =>
                                updateStateOrder(product)
                            }>
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