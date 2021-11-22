
const ShowOrders = ({ ordersData, setOrdersData }) => {

  /* const dataProducts = Object.values(ordersData);*/
  //console.log('OrdersData', ordersData
  /* Si el precio está definido retorna el precio multiplicado por cantidad en cada producto, si no retorna 0 */


  const priceProducts  = (oneOrder) => {
    const multiply = Object.values(oneOrder).map(product => product.price * product.amount)
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = multiply.reduce((price, sumPrice) => price + sumPrice, 0);
    return totalOrderPrice;
  } 
 

  return (
    <section className='orders-container'>
      {ordersData.map((element) => (
        <div key={element.id} className='order-list'>
          <p> {priceProducts(element)}</p>
          {Object.values(element).map((item) => 
          <div key={item.id}>
          <p> {item.name}</p>
          <p> {item.amount}</p>
          <p> {item.price * item.amount}</p>
          
          </div>
          )}
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