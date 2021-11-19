import { Fragment } from "react";

const OrderSummary = ({ addOrder }) => {

    //console.log(addOrder, 'hola');

    /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */
    const priceProducts = addOrder.map(product => product.price !== undefined ? product.price * product.amount: 0 )

    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    return (
        <Fragment>
            <section>
                <h3>Resumen de pedido</h3>
                {addOrder.map(product =>
                    <div key={product.id} className='product-summary'>
                        <p>{product.name}</p>
                        <p>{product.amount}</p>
                        <p>$ { product.price !== undefined ? product.price * product.amount: ''}</p>
                    </div>
                )}
                <div className='total-order-price'>
                    <h4>Total $ {totalOrderPrice}</h4>
                </div>
            </section>
        </Fragment>
    )

}

export default OrderSummary;