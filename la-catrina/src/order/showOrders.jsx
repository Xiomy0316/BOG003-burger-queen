
const ShowOrders = ({ ordersData, setOrdersData }) => {
  console.log(ordersData, 'orderdata');

  const priceProducts = (objectOrder) => {
    /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */
    const priceByQuantity = Object.values(objectOrder).map(product => product.price !== undefined ? product.price * product.amount : 0)
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceByQuantity.reduce((price, sumPrice) => price + sumPrice, 0);
    return totalOrderPrice;
  }

  return (
    <section className='orders-container'>
      {ordersData.filter(order => order.state !== 'Entregado').map((orderObject) => (
        <div key={orderObject.id} className='card-order'>
          <section className='info-order'>
            <p>{orderObject.personName}</p>
            <p>{orderObject.tableSelect}</p>
          </section>
          {Object.values(orderObject).map((productInOrder) =>
            <div key={productInOrder.id} className='product-order'>
              <p> {productInOrder.name}</p>
              <p> {productInOrder.amount}</p>
              <p> {productInOrder.price !== undefined ? `$ ` + (productInOrder.price * productInOrder.amount) : ''}</p>
            </div>
          )}
          <section className='total-price-order'>
            <p> Total $ {priceProducts(orderObject)}</p>
          </section>
        </div>
      ))
      }
    </section>
  )
}

export default ShowOrders;

/* {ordersData.filter(products => products.uid.includes('avfXccoKYrhS44uvbYFF', 'MT1W8EZ0se8y7Iip0GDJ')).map(orderProducts => (
  <div key={orderProducts.id} className='div-order'>
    <p>{orderProducts.name}</p>
    <p>{orderProducts.price}</p>
  </div>
))} */


/* {ordersData.map((orderProducts) => (
  <div key={orderProducts.id} className='div-order'>
    {ordersData.map(products => (
       (orderProducts.uid === products.uid) ?
        <div>
          <p>{orderProducts.name}</p>
          <p>{orderProducts.price}</p>
        </div> :
        ''
     )
    )}
  </div>
))} */