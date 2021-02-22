
import '../../index.css'
import React from 'react'

import Header from '../../Components/Header';

import Botoes from '../Carrinho/botoes'
import { createStore} from 'redux'
import {Provider} from 'react-redux'

interface IntStore{
  carrinho: number
}

const EstadoInicial: IntStore ={
  carrinho: 0
}
function reducer (estado = EstadoInicial, acao: any){
  switch(acao.type){
    case 'ADICIONAR_UNIDADE':
      return{
        carrinho: estado.carrinho + 1
      }
    case 'REMOVER_UNIDADE':
      return{
        carrinho: estado.carrinho - 1
      }
      default: return estado
  }
}
const store = createStore(reducer)

const Carrinho = () => {

  
  return (
    <div>
      <Provider store={store}>
       <Header/>
        <Botoes/>
      </Provider>



    </div>
  );
}


export default Carrinho;
