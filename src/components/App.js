import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';

import { validarPresupuesto } from '../helper';

class App extends Component {

    state = {
        presupuesto: '',
        restante: '',
        gastos: {}
    }

    componentDidMount() {
        this.obtenerPresupuesto();
    }

    obtenerPresupuesto = () => {
        let presupuesto = prompt('¿Cual es tu presupuesto?');

        let resultado = validarPresupuesto(presupuesto);

        if (resultado) {
            this.setState({
                presupuesto: presupuesto,
                restante: presupuesto
            })
        } else {
            this.obtenerPresupuesto();
        }
    }


    // agregar un nuevo gasto
    agregarGasto = gasto => {
        // Crear una copia del state actual
        const gastos = {...this.state.gastos }

        // console.log(gasto);
        // agregar al gasto al objeto del state
        gastos[`gasto${Date.now()}`] = gasto;
        // console.log(gastos);

        // restar al presupuesto

        this.restarPresupuesto(gasto.cantidadGasto);

        // ponerlo en state
        this.setState({
            gastos: gastos
        })

    }

    // restar el presupuesto cuando un gasto se crea
    restarPresupuesto = cantidad => {
        // leer el gasto
        let restar = Number(cantidad);

        // copia del state
        let restante = this.state.restante;

        // lo restamos
        restante -= restar;


        // agregamos al nuevo state
        this.setState({
            restante
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
                        <ControlPresupuesto
                            presupuesto={this.state.presupuesto}
                            restante = {this.state.restante}
                        ></ControlPresupuesto>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;