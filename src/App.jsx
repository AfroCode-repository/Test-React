import './index.css'
import './App.css'
import React from 'react' //para usar componente e divs

import Primeiro from './components/testes/Primeiro'
import NumeroAleatorio from './components/testes/NumeroAleatorio'
import Card from './components/layout/Card'

export default props => {

    

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" color="#273c75">
                    <Primeiro/>
                </Card>
                <Card titulo="#02 -Desfio Aleatório" color="#44bd32">
                    <NumeroAleatorio max={60} min="1" />
                    <NumeroAleatorio max={60} min="1" />
                </Card>  
            </div>
        </div>
    )    
}
