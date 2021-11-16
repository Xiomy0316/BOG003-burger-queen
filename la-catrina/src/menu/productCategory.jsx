import AddProducts from './addProducts';
import AddToCart from './addToCart';
import { Fragment, useState } from "react";
import Header from './header';

const ProductCategory = ({ data }) => {
    const [addToOrder, setAddToOrder] = useState([]);
    const [person, setPerson] = useState('');
    const [table, setTable] = useState('Mesa');

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
            <div className='products'>
                <h3>Comidas</h3>
                <section className='food'>
                    {data.filter(product => product.category.includes('Comidas')).map(productByCategory => (
                        <div key={productByCategory.id}>
                            {productByCategory.type.includes('breakfast') ?
                                <AddProducts
                                    dataProduct={productByCategory}
                                    addOrder={addToOrder}
                                    setAddOrder={setAddToOrder}
                                    personName={person}
                                /> :
                                <div>
                                    <img src={productByCategory.img} alt='' />
                                    <p>{productByCategory.name}</p>
                                    <p>{productByCategory.price}</p>
                                </div>
                            }
                        </div>
                    ))
                    }
                </section>
                <h3>Bebidas</h3>
                <section className='drinks'>
                    {data.filter(item => item.category.includes('Bebidas')).map(productByCategory => (
                        <div key={productByCategory.id}>

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
                        <div key={productByCategory.id}>
                            <AddProducts
                                dataProduct={productByCategory}
                                addOrder={addToOrder}
                                setAddOrder={setAddToOrder}
                            />
                        </div>
                    ))
                    }
                </section>
                <div>
                    <AddToCart
                        addOrder={addToOrder}
                        setAddOrder={setAddToOrder}
                        personName={person}
                        tableSelect={table}
                    />
                </div>
            </div >
        </Fragment>)
}

export default ProductCategory;