
const ShowOrders = ({ordersData, setOrdersData}) => {
  
    /* const dataProducts = Object.values(ordersData);*/
    console.log('OrdersData', ordersData); 
 return (
    <section className='order-container'>
    {ordersData.map(orderProducts => /* Object.values(orderProducts).map(order => */ (
        <div key={orderProducts.id}>
          <p>{orderProducts.name}</p>
          <p>{orderProducts.price}</p>
        </div>
    ))}
    </section>
 )
}

export default ShowOrders;