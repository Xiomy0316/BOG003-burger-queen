import { Fragment, /* useState */ } from "react";

const OrderSummary = ({ addOrder, setAddOrder }) => {

    console.log(addOrder);

    return (
        <Fragment>
            <section>
                {addOrder.map(product =>
                    <div key={product.id} className='product-summary'>
                        <p>{product.name}</p>
                        <p>{product.amount}</p>
                        <p>{product.price}</p>
                    </div>
                )}
            </section>
        </Fragment>
    )

}

export default OrderSummary;