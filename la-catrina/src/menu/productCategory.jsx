import AddProducts from './addProducts';
import AddToCart from './addToCart';
import { Fragment, useState } from "react";
import Header from './header';

const ProductCategory = ({ data }) => {
    const [add, setAdd] = useState([]);
    const [person, setPerson] = useState('');
    const [table, setTable] = useState('Mesa');

    const onCostumerName = (event) => {
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
            addOrder={add} 
            setAddOrder={setAdd} 
            personName={person} 
            onCostumerName={onCostumerName} 
            onTableSelect={onTableSelect}
            tableSelect={table}/>
            <div className='products'>
                <h3>Comidas</h3>
                <section className='food'>
                    {data.filter(item => item.category.includes('Comidas')).map(filterCategory => (
                        <div key={filterCategory.id}>
                            {filterCategory.type.includes('breakfast') ?
                                <AddProducts dataProduct={filterCategory} addOrder={add} setAddOrder={setAdd} personName={person} /> :
                                <div>
                                    <img src={filterCategory.img} alt='' />
                                    <p>{filterCategory.name}</p>
                                    <p>{filterCategory.price}</p>
                                </div>
                            }
                        </div>
                    ))
                    }
                </section>
                <h3>Bebidas</h3>
                <section className='drinks'>
                    {data.filter(item => item.category.includes('Bebidas')).map(filterCategory => (
                        <div key={filterCategory.id}>

                            <AddProducts
                                dataProduct={filterCategory}
                                addOrder={add}
                                setAddOrder={setAdd}
                                personName={person}
                                /* addCustomerName={addCustomerName} */ />
                        </div>
                    ))
                    }
                </section>
                {/* Find funciona trayendo el primer elemento que cumpla con la condicion dada */}
                {data.find(item => item.category === 'Acompañamientos') ? <h3>Acompañamientos</h3> : ''}
                <section className='food-accompaniment'>
                    {data.filter(item => item.category.includes('Acompañamientos')).map(filterCategory => (
                        <div key={filterCategory.id}>
                            <AddProducts dataProduct={filterCategory} addOrder={add} setAddOrder={setAdd} />
                        </div>
                    ))
                    }
                </section>
                <div>
                    <AddToCart addOrder={add} setAddOrder={setAdd} personName={person} tableSelect={table}/>
                </div>
            </div >
        </Fragment>)
}

export default ProductCategory;