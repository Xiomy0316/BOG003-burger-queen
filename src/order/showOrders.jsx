import OrderProgress from '../order/orderProgress';
import { doc, updateDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

const ShowOrders = ({ ordersData }) => {
  let orderPrice;
  const priceProducts = (objectOrder) => {
    /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */
    orderPrice = Object.values(objectOrder).map(product => {
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
    const totalOrderPrice = orderPrice.reduce((price, sumPrice) => price + sumPrice, 0);
    return totalOrderPrice;
  }

  const updateStateOrder = async (order) => {
    const stateOrder = doc(db, "pedidos", order.id);
    await updateDoc(stateOrder, {
      state: 'Entregado'
    });
  }

  return (
    <section className='orders-container'>
      {ordersData.filter(order => order.state !== 'Entregado').map((orderObject) => (
        <div key={orderObject.id} className='card-order'>
          <OrderProgress stateOrderObject={orderObject.state} />
          <section className='info-order'>
            <p>{orderObject.personName}</p>
            <p>{orderObject.tableSelect}</p>
          </section>
          <section className='line-orders-section'>
            <canvas className='line-orders'> </canvas>
          </section>
          {Object.values(orderObject).map((productInOrder) =>
            <div className='container-product-order'>
              <div key={productInOrder.id} className='product-order'>
                <p> {productInOrder.name}</p>
                <p className='num-order'> {productInOrder.protein}</p>
                <p className='num-order'> {productInOrder.amount}</p>
                <p className='num-order'> {productInOrder.price !== undefined ? `$ ` + (productInOrder.price * productInOrder.amount) : ''}</p>
              </div>

              {productInOrder.category === 'Comidas' && productInOrder.type === 'lunch' ? productInOrder.additional.map(additional =>
                <div className='additionals-order'>
                  <p>•{additional.name}</p>
                  <p className='num-order'>$ {additional.price}</p>
                </div>)
                : ''}
            </div>
          )}
          <section className='total-price-order'>
            <p> Total $ {priceProducts(orderObject)}</p>
          </section>
          {orderObject.state === 'Para entregar' ?
            <section className='btn-deliver'>
              <button onClick={() => updateStateOrder(orderObject)}>Entregar</button>
            </section>
            : ''
          }
        </div>
      ))
      }
    </section>
  )
}

export default ShowOrders;
