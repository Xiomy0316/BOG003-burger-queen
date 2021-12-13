import { Fragment } from 'react';
import blueWaiter from '../img/mesero-azul.png';
import blueChef from '../img/chef-azul.png';

const OrderProgress = ({ orderObject }) => {

    const timeInKitchen = () => {
        if (orderObject.finalTime && orderObject.startTime !== undefined) {
            let diffTime = orderObject.finalTime.seconds - orderObject.startTime.seconds;

            let minutes = Math.floor(((diffTime * 1000) / (1000 * 60)) % 60),
                hours = Math.floor(((diffTime * 1000) / ((1000 * 60 * 60)) % 24));

            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;

            return hours + ' h ' + minutes + ' m';
        }

    }

    return (
        <Fragment>
            {orderObject.state === 'En preparación'
                ? <div className='container-progress-bar'> <img src={blueChef} alt='In preparation' />
                    <p>{orderObject.state}</p>
                </div>
                : ''
            }
            {orderObject.state === 'Para entregar'
                ?
                <section>
                    <div className='time-kitchen'>
                        <p>Tiempo: {timeInKitchen()}</p>
                    </div>
                    <div className='container-progress-bar'>
                        <img src={blueWaiter} alt='To deliver' />
                        <p>{orderObject.state}</p>
                    </div>
                </section>
                : ''
            }

        </Fragment>
    )
};

export default OrderProgress;