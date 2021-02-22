import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entrar from './pages/Entrar/'
import Carrinho from './pages/Carrinho/'



function Rotas() {
  return(
    <Switch>
      <Route path="/" exact component={Entrar} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Carrinho/:id" exact component={Carrinho} />
    </Switch>
  )
}

export default Rotas