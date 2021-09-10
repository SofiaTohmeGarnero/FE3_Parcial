import React, { Component, Fragment } from 'react';
import data from '../data.json'

export default class Historial extends React.Component{

    render(){
        const {historiaAnterior, historial} = this.props;
        return(
            <div className="recordatorio">
                <h3>Selección anterior: {historiaAnterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>
                    {historial.map((e,i) => <li key={data[i].id}>{e}</li>)}
                </ul>
            </div>
        );
    }

}