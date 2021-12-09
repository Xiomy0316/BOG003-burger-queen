import { Fragment, useState } from "react";
import AddProducts from './addProducts';
import AddToCart from './addToCart';
import Header from './header';
import OrderSummary from './orderSummary';
import ButtonMenu from "./buttonMenu";
import MenuBurritos from "./menuBurritos";

const ProductCategory = ({ data, setMenu }) => {
    const [addToOrder, setAddToOrder] = useState([]);
    const [person, setPerson] = useState('');
    const [table, setTable] = useState('Mesa');
    //console.log(addToOrder);
    const onCustomerName = (event) => {
        setPerson(event.target.value);
    }

    const onTableSelect = (event) => {
        setTable(
            event.target.value
        );
    }

    return (
        <Fragment>
            <Header
                personName={person}
                onCustomerName={onCustomerName}
                tableSelect={table}
                onTableSelect={onTableSelect}
            />
            <ButtonMenu setMenu={setMenu} />
            <section className='products-container'>
                <div className='products'>
                    <h3>Comidas</h3>
                    <section className='cards-food-container'>
                        {data.filter(product => product.category.includes('Comidas')).map(productByCategory => (
                            <div key={productByCategory.id} className='card-product'>
                                {productByCategory.type.includes('breakfast') ?
                                    <AddProducts
                                        dataProduct={productByCategory}
                                        addOrder={addToOrder}
                                        setAddOrder={setAddToOrder}
                                        personName={person}
                                    /> :
                                    <MenuBurritos productByCategory={productByCategory} addOrder={addToOrder} setAddOrder={setAddToOrder} />
                                }
                            </div>
                        ))}
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
                        ))}
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
                        ))}
                    </section>
                </div >
                <div className='order-summary'>
                    <OrderSummary
                        addOrder={addToOrder}
                        setAddOrder={setAddToOrder}
                    />
                </div>
            <AddToCart
                addOrder={addToOrder}
                personName={person}
                tableSelect={table}
            />
            </section>
        </Fragment>)
}

export default ProductCategory;
