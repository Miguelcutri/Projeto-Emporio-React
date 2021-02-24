import axios from 'axios'
import { Beers } from '../types/beers'
import  { useEffect, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const Cervejas = () =>{
    const [beers, setBeers] = useState<any>([])
    const [addCarrinho, setAddCarrinho] = useState<any>()


    useEffect(() => {
      const token = localStorage.getItem("token")
  
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      async function getBebidas(){
        try{
        const beers = await axios.get("http://localhost:4000/beers", { headers: headers })
        setBeers(beers.data)
      } catch(erro){
        if(erro.response.status === 404) {
          toast.error('Não foi possível carregar as cervejas')}
      }
      
      }
      
      getBebidas()
    }, [])
    return(
      
        <div>
          <Toaster />
        <h3>Destaques da Empório</h3>
        <div className="div-flex2">
        {beers.map((item: Beers) => (
          
          <div className="card" key={item.id}>
            <img src={item.image} />
            <div className="descricao">
             {item.description}
            </div>
              <div className="titulo">
              <h4>{item.title}</h4>
              </div>
              
            
            <div className="preco">
              <h3>{item.price}</h3>
            </div>
            <Link to={`/Carrinho/${item.id}`}><button className="botoes" onClick={() => setAddCarrinho(item.contador)}> <p><TiShoppingCart/> Adicionar</p></button></Link>
  
          </div>
          
        
        ))}
  </div>
  </div> 
  )
}

export default Cervejas;