
/* import { doc, deleteDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
 */
const ShowOrders = ({ ordersData, setOrdersData }) => {
  console.log(ordersData, 'orderdata');

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

  /* const deleteOrder = async (docId) => {
    await deleteDoc(doc(db, "pedidos", docId));
} */

  return (
    <section className='orders-container'>
      {ordersData.filter(order => order.state !== 'Entregado').map((orderObject) => (
        <div key={orderObject.id} className='card-order'>
          <section className='info-order'>
            <p>{orderObject.personName}</p>
            <p>{orderObject.tableSelect}</p>
          </section>
          {/*  <section className='delete-order'>
            <img src={trash} alt="trash" onClick={() => deleteOrder(orderObject.id)} />
          </section> */}
          {Object.values(orderObject).map((productInOrder) =>
            <div key={productInOrder.id} className='product-order'>
              <p> {productInOrder.name}</p>
              <p> {productInOrder.protein}</p>
              <p> {productInOrder.amount}</p>
              <p> {productInOrder.price !== undefined ? `$ ` + (productInOrder.price * productInOrder.amount) : ''}</p>
              {productInOrder.category === 'Comidas' && productInOrder.type === 'lunch' ? productInOrder.additional.map(additional =>
                <div className='additional-burritos'>
                  <p>•{additional.name}</p>
                  <p>$ {additional.price}</p>
                </div>)
                : ''}
            </div>

          )}
          <section className='total-price-order'>
            <p> Total $ {priceProducts(orderObject)}</p>
          </section>
          {/* <section className='btn-send-kitchen'>
            <button>Enviar a cocina</button>
          </section> */}
        </div>
      ))
      }
    </section>
  )
}

export default ShowOrders;
