import React from 'react';
import 'materialize-css';
import {Navbar} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import MySection from './mySection';

const Navigation = () => {
    return (
        <>
        <Navbar className="nav-wrapper black"
  alignLinks="right"
  brand={<a className="brand-logo" href="/"><img src="/pearls.jpg" alt="pearls" width="50" height="60" /></a>}
  id="mobile-nav"
  //menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavLink to='/'>
    Home
  </NavLink>
  <a href='#card'>
    About
  </a>
  <NavLink to='/'>
    Skills
  </NavLink>
  <NavLink to='/'>
    Contact
  </NavLink>
</Navbar>
<MySection /> 
</>
 )
}

export default Navigation;