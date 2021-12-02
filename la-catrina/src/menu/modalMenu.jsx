import { Fragment, useState } from "react";
import x from '../img/x.png'
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
                    <section className='close-modal'>
                        <img src={x} alt='img-x' onClick={() => setOpenModal(false)} />
                    </section>
                    <p>{burritoProduct.name}</p>
                    <form>
                        <ul className='sect-protein-additionals'> Proteína:
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
                        Adicionales:
                        <ul className='sect-additionals'>
                            <li><input
                                type="checkbox"
                                id="aditional1"
                                value="Queso"
                                onChange={handleValueAditionals} />
                                
                                <p>
                                    {burritoProduct.additional[0].name}
                                </p>
                                <p>
                                    $ {burritoProduct.additional[0].price}
                                </p>
                                </li>
                            <li><input
                                type="checkbox"
                                id="aditional2"
                                value="Jalapeños"
                                onChange={handleValueAditionals} />
                                 
                                <p>
                                    {burritoProduct.additional[1].name}
                                </p>
                                <p>
                                    $ {burritoProduct.additional[1].price}
                                </p>
                                </li>
                           
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