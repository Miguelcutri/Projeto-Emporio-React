import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import logo from '../images/logo.png'
import { FaRegUser } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from  'react-router-dom'


const Header = () => {

  return (
    <div>
      
        <div className="div-flex">
          <div className="logo"><img src={logo} /></div>
            <div className="usuario"><FaRegUser /> <b>Login</b></div>
            <div className="carrinho"><TiShoppingCart /> <Link to ={`/Carrinho/`}><b> Vazio :(</b></Link></div>
          
        </div>

      <nav>

        <div className="menu">´
        
          <li><a href="#">Cervejas</a></li>
          <li><a href="#">Marcas</a></li>
          <li><a href="#">Acessórios e outros</a></li>
          <li><a href="#">Destilados</a></li>
          <li><a href="#">Kits</a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#">Promoção</a></li>
          <li className="fale"><a href="#">Fale conosco</a></li>
        </div>
      </nav>
      <br/><br/> <br/><br/>
    
      
    </div>
  );
}

export default Header;