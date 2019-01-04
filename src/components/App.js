import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';

class App extends Component {

    state = {
        presupuesto: '',
        restante: '',
        gastos: {}
    }

    // agregar un nuevo gasto
    agregarGasto = gasto => {
        // Crear una copia del state actual
        const gastos = {...this.state.gastos}

        // console.log(gasto);
        // agregar al gasto al objeto del state
        gastos[`gasto${Date.now()}`] = gasto;
        // console.log(gastos);
        
        // ponerlo en state
        this.setState({
            gastos: gastos
        })
        
    }

    render() {
        return (
        <div className="App container">
            <Header titulo='Gasto semanal'>

            </Header>
            <div className="contenido contenido-principal">
                <div className="row">
                    <div className="one-half column">
                        <Formulario agregarGasto={this.agregarGasto}></Formulario>
                    </div>
                    <div className="one-half column">
                        <Listado gastos={this.state.gastos}></Listado>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
