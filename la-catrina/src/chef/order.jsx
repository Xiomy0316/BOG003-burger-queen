import db from '../firebase/firebaseConfig';
import { updateDoc, doc } from "firebase/firestore";
import { Fragment, useState, useEffect } from 'react';

const Order = (orderObject) => {
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

    return (
        <Fragment>
            {Object.values(orderObject).map((product) =>
            <div key={product.id} className='card-order'>
                {console.log(product.state)}
                <div className='timer' >
                    <h3>{timeFormat(diff)} </h3>
                </div>
                {/* <div><Timer stateOrder={orderObject.state} /> </div> */}
                <section className='info-order'>
                    <p>{product.personName}</p>
                    <p>{product.tableSelect}</p>
                </section>
                <>{
                  prueba(product).map((productInOrder) =>
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
                )}</>
                <section className='btn-prepare'>
                    {product.state === 'Enviar a cocina' 
                        ? <button onClick={() => {
                            updateStateOrder(product).then(() => {
                                startTime()
                            })
                        }}>
                            Preparar
                        </button> : product.state}
                    {product.state === 'En preparación'
                        ? <button onClick={() => updateStateOrder(product)}>
                            Para entregar
                        </button> :
                        ''}

                </section>
            </div>
        )
    }</Fragment>
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

export default Order;