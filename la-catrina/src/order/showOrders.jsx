
const ShowOrders = ({ordersData, setOrdersData}) => {
    /* const dataProducts = Object.values(ordersData);*/
    console.log(ordersData); 
 return (
    <section className='order-container'>
    {ordersData.map(orderProducts => (
        <div key={orderProducts.id}>
          <p>{orderProducts.name}</p>
        </div>
      ))}
    </section>
 )
}

export default ShowOrders;