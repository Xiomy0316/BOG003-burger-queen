import React, { Fragment } from 'react';
import logo from '../img/burrito.png';
import waiter from '../img/camarero.png';
import chef from '../img/cocinero.png';
import './home.scss';


const Home = () => (
  <Fragment>
    <header className='header-home'>
      <section className='sect-logo'>
        <h1><img className='logo-home' src={logo} alt='Logo La Catrina'/>La Catrina
        </h1>
      </section>
      <nav className='sect-nav'>
        <section className='btn-nav'>
          <a href='/menu'><img className='btn-menu' src={waiter} alt='Menú' /></a>
          <h3>Mesero</h3>
        </section>
        <section className='btn-nav'>
          <a href='/chef'><img className='btn-chef' src={chef} alt='Chef' /></a>
          <h3>Chef</h3>
        </section>
      </nav>
    </header>
  </Fragment>
);

export default Home;