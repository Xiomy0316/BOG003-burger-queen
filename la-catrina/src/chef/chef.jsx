import { Fragment, useState } from 'react';
import './chef.scss';

const Chef = () => {
  const [orderProgressBar, setOrderProgressBar] = useState(false);
  console.log(orderProgressBar);
  return (
    <Fragment>
      <a href='/'>Ir a home</a>
      <button onClick={() => setOrderProgressBar(true)}>
        Preparar
      </button>

{/*       <button onClick={() => setOrderProgressBar(true)}>
        Para entregar
      </button> */}
    </Fragment>
  )
};

export default Chef;