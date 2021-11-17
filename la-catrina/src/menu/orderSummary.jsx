import { Fragment, useState } from "react";

const OrderSummary = ({ addOrder, setAddOrder }) => {

    const priceProducts = addOrder.map(product => product.amount * product.price);

    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    return (
        <Fragment>
            <section>
                <h3>Resumen de pedido</h3>
                {addOrder.map(product =>
                    <div key={product.id} className='product-summary'>
                        <p>{product.name}</p>
                        <p>{product.amount}</p>
                        <p>$ {product.price * product.amount}</p>
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