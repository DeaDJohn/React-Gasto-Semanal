import React, { Component } from 'react';

export default class Presupuesto extends Component{ 
    render(){
        const {presupuesto} = this.props;
        return(
            <div className="alert alert-primary">
                Presupuesto: {presupuesto} €
            </div>
        )
    }
}