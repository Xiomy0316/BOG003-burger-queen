import { Fragment } from "react";

const OrderSummary = ({ addOrder }) => {


    const priceProducts = addOrder.map(product => {
        let totalPriceAdditional;
        /* Valida si el producto es burrito y realiza la suma de sus adicionales + el precio del producto */
        if (product.category === 'Comidas' && product.type === 'lunch') {
            totalPriceAdditional = product.additional.map(additional => additional.price)
                .reduce((sum, value) => (sum + value), 0);
            let sumProductAdditional = (product.price * product.amount) + totalPriceAdditional;
            return sumProductAdditional;
            /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */
        } if (product.price !== undefined) {
            return product.price * product.amount;
        }
        return 0;
    })
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    return (
        <Fragment>
            <section>
                <h3>Resumen de pedido</h3>
                {addOrder.map(product =>
                    <div key={product.id} >
                        <section className='product-summary'>
                            <p>{product.name}</p>
                            <p>{product.protein}</p>
                            <p>{product.amount}</p>
                            <p>$ {product.price !== undefined ? product.price * product.amount : ''}</p>
                        </section>
                        
                        {product.category === 'Comidas' && product.type === 'lunch' ? product.additional.map(additional =>
                            <div className='additional-burritos'>
                                <p>•{additional.name}</p>
                                <p>$ {additional.price}</p>
                            </div>)
                            : ''}
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