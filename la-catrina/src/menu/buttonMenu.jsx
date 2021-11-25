import { Fragment, useState } from "react";

const ButtonMenu = ({ setMenu }) => {
    const [colorBtnPrincipal, setColorBtnPrincipal] = useState('#04BFAD');
    const [colorBtnBreakfast, setColorBtnBreakfast] = useState('#818181');

    const changeColorPrincipal = () => {
        setColorBtnPrincipal('#04BFAD');
        setColorBtnBreakfast('#818181');
    }
    const changeColorBreakfast = () => {
        setColorBtnPrincipal('#818181');
        setColorBtnBreakfast('#04BFAD');
    }

    return (
        <Fragment>
            <section className='sect-buttons'>
                <button className='btn-principal' style={{ background: colorBtnPrincipal }}
                    onClick={() => {
                        changeColorPrincipal()
                        setMenu('lunch')
                    }}>
                    Principal
                </button>

                <button className='btn-breakfast' style={{ background: colorBtnBreakfast }}
                    onClick={() => {
                        changeColorBreakfast()
                        setMenu('breakfast')
                    }}>
                    Desayuno
                </button>
            </section>
        </Fragment>
    )
}

export default ButtonMenu;