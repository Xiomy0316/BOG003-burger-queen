import { Fragment, useState } from "react";

const ModalMenu = ({ setOpenModal, burritoProduct, addOrder, setAddOrder }) => {
    const [typeOfProtein, setTypeOfProtein] = useState('res');
    const [productAditionals, setProductAditionals] = useState([]);
    console.log(addOrder, 'addorder');

    const handleValueProtein = e => {
        setTypeOfProtein(e.target.value)
        //setAddOrder([...addOrder, { ...burritoProduct, protein: e.target.value }])

        console.log(typeOfProtein);
    }

    const handleValueAditionals = e => {
        
        //console.log(searchPosition, 'buscador');
        if (productAditionals.length === 0){
            setProductAditionals(productAditionals.push(e.target.value))
        } else {
            const searchPosition = productAditionals.indexOf(e.target.value)
            setProductAditionals( productAditionals.splice(searchPosition))
        }
        //setProductAditionals(e.target.value)
        /*  if(productAditionals.includes(e.target.value)){
             setProductAditionals( productAditionals.splice(searchPosition))
         } else {
             setProductAditionals(productAditionals.push(e.target.value))
         }  */
    }

    const sendBurritoToObject = () => setAddOrder([...addOrder, { ...burritoProduct, protein: typeOfProtein , additional: productAditionals}])


    return (
        <Fragment>
            <div className='background-modal'>
                <section className='container-modal'>
                    {/* <AddProducts dataProduct={burritoProduct} addOrder={addOrder} setAddOrder={setAddOrder}/> */}
                    <p>{burritoProduct.name}</p>
                    <button onClick={() => setOpenModal(false)}>
                        X
                    </button>
                    <form>
                        <ul>Proteína:
                            <li><input
                                id="protein1"
                                value="res"
                                type="radio"
                                checked={typeOfProtein === 'res' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein1">
                                    {burritoProduct.protein[0]}
                                </label></li>
                            <li><input
                                id="protein2"
                                value="pollo"
                                type="radio"
                                checked={typeOfProtein === 'pollo' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein2">
                                    {burritoProduct.protein[1]}
                                </label></li>
                            <li><input
                                id="protein3"
                                value="vegetariano"
                                type="radio"
                                checked={typeOfProtein === 'vegetariano' ? true : false}
                                onChange={handleValueProtein} />
                                <label form="protein3">
                                    {burritoProduct.protein[2]}
                                </label></li>
                        </ul>
                        <ul>Adicionales:
                            <li><input
                                type="checkbox"
                                id="aditional1"
                                value="queso"
                                onChange={handleValueAditionals} />
                                {burritoProduct.additional[0].name}
                                $ {burritoProduct.additional[0].price}</li>
                            <li><input
                                type="checkbox"
                                id="aditional2"
                                value="jalapeños"
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