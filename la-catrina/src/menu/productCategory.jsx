
const ProductCategory = ({ data }) => {

    console.log('products', data)
    return (
        <div className='products'>
            <h3>Comidas</h3>
            <section className='food-break'>
                {data.filter(item => item.category.includes('Comidas')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                    </div>
                ))
                }
            </section>
            <h3>Bebidas</h3>
            <section className='drinks-break'>
                {data.filter(item => item.category.includes('Bebidas')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                    </div>
                ))
                }
            </section>
            <section className='food-accompaniment'>
                {data.filter(item => item.category.includes('Acompañamientos')).map(filterCategory => (
                    <div key={filterCategory.id}>
                        <img src={filterCategory.img} alt='' />
                        <p>{filterCategory.name}</p>
                        <p>{filterCategory.price}</p>
                    </div>
                ))
                }
            </section>
        </div >)
}

export default ProductCategory;