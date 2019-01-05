import React, { Component } from 'react';

export default class Formulario extends Component{

    // ref para los campos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {

        // prevenir de default
        e.preventDefault();

        // crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value,
        }

        // agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        // resetear el formulario
        e.currentTarget.reset();
    }
    
    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGastoRef} />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGastoRef}/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}