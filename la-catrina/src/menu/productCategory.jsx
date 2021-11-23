import { Fragment, useState } from "react";
import AddProducts from './addProducts';
import AddToCart from './addToCart';
import Header from './header';
import OrderSummary from './orderSummary';

const ProductCategory = ({ data, setMenu }) => {
    const [addToOrder, setAddToOrder] = useState([]);
    const [person, setPerson] = useState('');
    const [table, setTable] = useState('Mesa');
    const [colorBtnBlue, setColorBtnBlue] = useState('#04BFAD');
    const [colorBtnGray, setColorBtnGray] = useState('#818181');

    const onCustomerName = (event) => {
        setPerson(event.target.value);
    }

    const onTableSelect = (event) => {
        setTable(
            event.target.value
        );
    }

    const changeColorPrincipal = () => {
        setColorBtnBlue('#04BFAD');
        setColorBtnGray('#818181');
    }
    const changeColorBreakfast = () => {
        setColorBtnBlue('#818181');
        setColorBtnGray('#04BFAD');
    }


    return (
        <Fragment>
            <Header
                personName={person}
                onCustomerName={onCustomerName}
                tableSelect={table}
                onTableSelect={onTableSelect}
            />
            <section className='sect-buttons'>
                <button className='btn-principal' style={{background:colorBtnBlue}} 
                    onClick={() => {
                        changeColorPrincipal()
                        setMenu('lunch')
                    }}>
                    Principal
                </button>

                <button className='btn-breakfast' style={{background:colorBtnGray}} 
                    onClick={() => {
                        changeColorBreakfast()
                        setMenu('breakfast')
                    }}>
                    Desayuno
                </button>
            </section>
            <section className='products-container'>
                <div className='products'>
                    <h3>Comidas</h3>
                    <section className='cards-food-container'>
                        {data.filter(product => product.category.includes('Comidas')).map(productByCategory => (
                            <div key={productByCategory.id} className='card-product'>
                                {/* productByCategory.type.includes('breakfast') ? */
                                    <AddProducts
                                        dataProduct={productByCategory}
                                        addOrder={addToOrder}
                                        setAddOrder={setAddToOrder}
                                        personName={person}
                                    /> /* :
                                    <div>
                                        <img src={productByCategory.img} alt='' />
                                        <p>{productByCategory.name}</p>
                                        <p>$ {productByCategory.price}</p>
                                    </div> */
                                }
                            </div>
                        ))
                        }
                    </section>
                    <h3>Bebidas</h3>
                    <section className='drinks'>
                        {data.filter(item => item.category.includes('Bebidas')).map(productByCategory => (
                            <div key={productByCategory.id} className='card-product'>
                                <AddProducts
                                    dataProduct={productByCategory}
                                    addOrder={addToOrder}
                                    setAddOrder={setAddToOrder}
                                    personName={person}
                                />
                            </div>
                        ))
                        }
                    </section>
                    {/* Find funciona trayendo el primer elemento que cumpla con la condicion dada */}
                    {data.find(item => item.category === 'Acompañamientos') ? <h3>Acompañamientos</h3> : ''}
                    <section className='food-accompaniment'>
                        {data.filter(item => item.category.includes('Acompañamientos')).map(productByCategory => (
                            <div key={productByCategory.id} className='card-product'>
                                <AddProducts
                                    dataProduct={productByCategory}
                                    addOrder={addToOrder}
                                    setAddOrder={setAddToOrder}
                                />
                            </div>
                        ))
                        }
                    </section>
                </div >
                <div className='order-summary'>
                    <OrderSummary
                        addOrder={addToOrder}
                        setAddOrder={setAddToOrder}
                    />
                </div>
            </section>
            <AddToCart
                addOrder={addToOrder}
                setAddOrder={setAddToOrder}
                personName={person}
                tableSelect={table}
            />
        </Fragment>)
}

export default ProductCategory;