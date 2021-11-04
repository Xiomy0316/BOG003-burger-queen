import AddProducts from './addProducts';

const ProductCategory = ({ data }) => {
    return (
        <div className='products'>
            <h3>Comidas</h3>
            <section className='food'>
                {data.filter(item => item.category.includes('Comidas')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                        <AddProducts/>
                    </div>
                ))
                }
            </section>
            <h3>Bebidas</h3>
            <section className='drinks'>
                {data.filter(item => item.category.includes('Bebidas')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                        <AddProducts/>
                    </div>
                ))
                }
            </section>
            {/* find funciona trayendo el primer elemento que cumpla con la condicion dada */}
            {data.find(item => item.category === 'Acompañamientos') ? <h3>Acompañamientos</h3> : ''}
            <section className='food-accompaniment'>
                {data.filter(item => item.category.includes('Acompañamientos')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                        <AddProducts/>
                    </div>
                ))
                }
            </section>
        </div >)
}

export default ProductCategory;