import './index.css'
import './App.css'
import React from 'react' //para usar componente e divs

import Primeiro from './components/testes/Primeiro'
import NumeroAleatorio from './components/testes/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/testes/Familia'
import FamiliaMembro from './components/testes/FamiliaMembro'

export default props => {

    

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#03 -Familia com Membros" color="#e1b12c">
                    <Familia sobrenome="Ivo">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Katryanne"/>
                        <FamiliaMembro nome="Lobão" sobrenome="cachorro"/>
                    </Familia>
                </Card> 
                <Card titulo="#02 -Desfio Aleatório" color="#44bd32">
                    <NumeroAleatorio max={60} min="1" />
                    <NumeroAleatorio max={60} min="1" />
                </Card>  
                <Card titulo="#01 - Primeiro Componente" color="#273c75">
                    <Primeiro/>
                </Card>
                
            </div>
        </div>
    )    
}
