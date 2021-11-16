// import './menu.scss';
// import ProductCategory from './productCategory';
// import { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';

// const Menu = () => {
//     const [data, setData] = useState([]);
//     const [menu, setMenu] = useState('lunch');
//     const filterMenu = data.filter(product => product.type.includes(menu));

//     useEffect(() => {
//         axios
//             .get('data.json')
//             .then(res => res.data)
//             .then(res => {
//                 setData(res.products)
//             })
//     }, [])

//     return (
//         <Fragment>
            
//             <section className='sect-menu'>
//             <section>
//                 <button 
//                 onClick={() => {
//                     setMenu('lunch')
//                 }}>
//                 Principal
//                 </button>

//                 <button 
//                 onClick={() => {
//                     setMenu('breakfast')
//                 }}>
//                 Desayuno
//                 </button>
//             </section>
//                 <div>
//                 <ProductCategory data={filterMenu} />
//                 </div>
//             </section>
//         </Fragment>
//     )
// };

// export default Menu;