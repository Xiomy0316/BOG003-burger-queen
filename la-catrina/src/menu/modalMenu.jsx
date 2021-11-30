import { Fragment, useState } from "react";

const ModalMenu = ({ setOpenModal, burritoProduct, addOrder, setAddOrder }) => {
    const [typeOfProtein, setTypeOfProtein] = useState('Res');
    const [productAditionals, setProductAditionals] = useState([]);
    // console.log(productAditionals, 'afuera');

    const handleValueProtein = e => {
        setTypeOfProtein(e.target.value)
    }

    const handleValueAditionals = e => {
        const searchPosition = productAditionals.findIndex(item => item.name === e.target.value)
        let newProduct = productAditionals;

        if (searchPosition !== -1) {
            newProduct.splice(searchPosition, 1)
            setProductAditionals(newProduct)
            //console.log('if', e.target.value, productAditionals);
        } else {
            setProductAditionals(productAditionals => [...productAditionals, { name: e.target.value, price: 1 }])
            //console.log('else', e.target.value, productAditionals);
        }
    }

    const sendBurritoToObject = () => setAddOrder([...addOrder, { ...burritoProduct, protein: typeOfProtein, additional: productAditionals, amount: 1 }])

    return (
        <Fragment>
            <div className='background-modal'>
                <section className='container-modal'>
                    <p>{burritoProduct.name}</p>
                    <button onClick={() => setOpenModal(false)}>
                        X
                    </button>
                    <form>
                        <ul>Proteína:
                            <li><input
                                id="protein1"
                                value="Res"
                                type="radio"
                                checked={typeOfProtein === 'Res' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein1">
                                    {burritoProduct.protein[0]}
                                </label></li>
                            <li><input
                                id="protein2"
                                value="Pollo"
                                type="radio"
                                checked={typeOfProtein === 'Pollo' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein2">
                                    {burritoProduct.protein[1]}
                                </label></li>
                            <li><input
                                id="protein3"
                                value="Vegano"
                                type="radio"
                                checked={typeOfProtein === 'Vegano' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein3">
                                    {burritoProduct.protein[2]}
                                </label></li>
                        </ul>
                        <ul>Adicionales:
                            <li><input
                                type="checkbox"
                                id="aditional1"
                                value="Queso"
                                onChange={handleValueAditionals} />
                                {burritoProduct.additional[0].name}
                                $ {burritoProduct.additional[0].price}</li>
                            <li><input
                                type="checkbox"
                                id="aditional2"
                                value="Jalapeños"
                                onChange={handleValueAditionals} />
                                {burritoProduct.additional[1].name}
                                $ {burritoProduct.additional[1].price}</li>
                        </ul>
                    </form>
                    <section className="btn-add-burrito">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                                sendBurritoToObject()
                            }}>
                            Agregar
                        </button>
                    </section>
                </section>
            </div>
        </Fragment>
    )
}

export default ModalMenu;