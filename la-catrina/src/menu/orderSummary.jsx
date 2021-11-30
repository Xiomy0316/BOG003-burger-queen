import { Fragment } from "react";

const OrderSummary = ({ addOrder }) => {

    //console.log(addOrder, 'hola');

    /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */
    const priceProducts = addOrder.map(product => {
        if(product.category === 'Comidas' && product.type === 'lunch') {
           let sumPrice =  product.additional.reduce((additional, sumPriceAdditional) => additional.price + sumPriceAdditional, 0)

            console.log(sumPrice)
            }
    }) /* product.price !== undefined ? product.price * product.amount : 0) */

    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    return (
        <Fragment>
            <section>
                <h3>Resumen de pedido</h3>
                {addOrder.map(product =>
                    <div key={product.id} className='product-summary'>
                        <section>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                            <p>$ {product.price !== undefined ? product.price * product.amount : ''}</p>
                        </section>
                        <section>
                            {product.category === 'Comidas' && product.type === 'lunch' ? product.additional.map(additional =>
                                <div>
                                    <p>{additional.name}</p>
                                    <p>$ {additional.price}</p> </div>)
                                : ''}
                        </section>
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