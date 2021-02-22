import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import '../../index.css'
import Header from '../../Components/Header'
import Cervejas from '../../Components/Cervejas'
// correto
    

const Home = () => {




  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="pad-10"> <h6>A Maior  <div className="bg">Loja Especializada em Cervejas</div> do Brasil</h6></div>
      <Header />
      <Cervejas/>
    </div>
  );
}


export default Home;