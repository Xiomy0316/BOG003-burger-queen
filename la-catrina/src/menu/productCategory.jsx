import { Fragment, useEffect, useState } from 'react';


const ProductCategory = ({data}) => {
    
    console.log('products', data)
    return (<div className='products'>
     <div className='food-break'>
         <ul>
         {data.map((item) => (
             <div key= {item.id}>
             <h3>{item.category}</h3>
             <img src={item.img} alt=''/>
             </div>
         ))
     }
     </ul>
     </div>
     <div className='drinks-break'>
         <h3>Bebidas</h3>
     </div>
 </div>)
 }

 export default ProductCategory;