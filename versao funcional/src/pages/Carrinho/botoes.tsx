import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

interface Store {
    carrinho: number
  }
const Botoes = () => {



    const  [produtos, setProdutos] = useState<any>([])

  useEffect(() =>{
    async function getBebidas(){
      try{
        const produtos = await axios.get(`http://localhost:4000/beers/${params.id}`)
        setProdutos(produtos.data)
      } catch(erro){
        if(erro) {
          toast.error('Não foi possível carregar o produto no carrinho')}
      }}
      getBebidas()
  }, [])
  
  const params = useParams<any>()

    const disp = useDispatch()

    const valorDoCarrinho = useSelector((estado: Store) => estado.carrinho)

    function alerta(){
        alert("Seu pedido foi realizado!")
    }
    return (
        <div className="bg-carrinho">
            <div className="card">
            <Toaster />
            <Link to="/Home" style={{ textDecoration: 'none' }}><h2 className="comprar" onClick={alerta}>Meu carrinho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight /></h2></Link>
                <hr />
                <div className="div-flex">
                <div className="edit-img">
                <img src={produtos.image}/>
                </div>
                 <p>  {produtos.title}</p> 
                </div>
                <div className="icon-edit">
                <Link  style={{ color: '#7F878A' }} to="/Home"><BsFillTrashFill/></Link>
                </div>
                {produtos.price}
                
                
                <div className="div-flex">
                <button className="btn-add" onClick={() => disp({ type: 'REMOVER_UNIDADE' })}> - </button>
                <p>{valorDoCarrinho}</p>
                <button className="btn-add" onClick={() => disp({ type: 'ADICIONAR_UNIDADE' })}> + </button>
                </div>
                
                
            </div>
        </div>
    )

}
export default Botoes;