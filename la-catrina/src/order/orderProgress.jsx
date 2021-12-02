import { Fragment } from "react";
import blueWaiter from "../img/mesero-azul.png";
import blueChef from "../img/chef-azul.png";

const OrderProgress = ({ stateOrderObject }) => {
    return (
        <Fragment>
            <section className='container-progress-bar'>
                {stateOrderObject === 'En preparación'
                    ? <div> <img src={blueChef} alt="In preparation" />
                        <p>{stateOrderObject}</p>
                    </div>
                    : ''
                }
                {stateOrderObject === 'Para entregar'
                    ?
                    <div>
                        <img src={blueWaiter} alt="To deliver" />
                        <p>{stateOrderObject}</p>
                    </div>
                    : ''
                }
            </section>
        </Fragment>
    )
};

export default OrderProgress;