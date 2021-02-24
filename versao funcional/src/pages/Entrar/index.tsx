import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import '../../index.css'
import logo2 from '../../images/logo2.png'
import toast, { Toaster } from 'react-hot-toast';

const Entrar = () =>{
    const nomeInput = useRef<HTMLInputElement>(null) 
    const emailInput = useRef<HTMLInputElement>(null)
    const senhaInput = useRef<HTMLInputElement>(null)
    const idadeInput = useRef<HTMLInputElement>(null)
    const [logado, setLogado] = useState(false)


const cadastrar= async() => {
  

  const requisicao ={
    nome: nomeInput.current?.value,
    idade: idadeInput.current?.value,
    email: emailInput.current?.value,
    password: senhaInput.current?.value
  }
  
if (Number(idadeInput.current?.value )>= 18){
  toast.success('Cadastrado com sucesso!')
  try{
  const logado = await axios.post('http://localhost:4000/register', requisicao)
  setLogado (logado.data)
  setLogado(true)
  
}catch(erro){
    if(erro) {
      toast.error('Não foi possível logar, erro na requisição')
     }
  }
}else{
  toast.error('Você é menor de idade')
}
}


return (
  
  <div className="container">
    <Toaster />
  <div className="App">
  
    <img src={logo2}/><br/>
    <input className="input1" type="text" placeholder="Nome" ref={nomeInput}/><br/>
    <input className="input2" type="number" placeholder="Idade" ref={idadeInput}/><br/>
    <input className="input3" type="email" placeholder="Email" ref={emailInput}/><br/>
    <input className="input4" type="password" placeholder="Senha" ref={senhaInput}/><br/>

    <button onClick={cadastrar}>CADASTRAR</button>
  {logado &&  <Redirect to="/Home" />}

  </div>
  </div>
);
}

export default Entrar;