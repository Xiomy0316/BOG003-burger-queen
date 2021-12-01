import { Fragment } from "react";
import whiteWaiter from "../img/mesero-blanco.png";
import blueWaiter from "../img/mesero-azul.png";
import whiteChef from "../img/chef-blanco.png";
import blueChef from "../img/chef-azul.png";

const OrderProgress = ({ orderObject }) => {
    return (
        <Fragment>
            <section className='container-progress-bar'>
                {orderObject === 'En preparación'
                 ? <img src={blueChef} alt="In preparation" />
                 : <img src={whiteChef} alt="In preparation" />}
                 {orderObject === 'Para entregar'
                 ? <img src={blueWaiter} alt="To deliver" />
                 : <img src={whiteWaiter} alt="To deliver" />}
            </section>
        </Fragment>
    )
};

export default OrderProgress;