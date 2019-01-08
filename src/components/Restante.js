import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper';
import PropTypes from 'prop-types';

export default class Restante extends Component{ 
    render(){
        const {presupuesto,restante} = this.props;
        let clase = revisarPresupuesto(presupuesto,restante);
        console.log(clase);
        return(
            <div className={clase}>
                Restante: {restante} €
            </div>
        )
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired,
}