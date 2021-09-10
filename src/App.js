import React, { Component, Fragment } from 'react';
import data from './components/data.json'
import Botonera from './components/botonera/botonera'
import Historial from './components/historial/historial'

let historial =[]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      contador:0,
      historiaAnterior:"",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state.contador){
      historial.push(this.state.historiaAnterior)
    }
  }

  handleClick = (miSeleccion) => {

    let n = 0;
    if(this.state.contador % 2 == 0){
        miSeleccion === "A" ? n = 1 : n = 2; 
    }else{
        miSeleccion === "A" ? n = 2 : n = 3;
    }

    this.setState((valorActual) => {
      return{
        contador: valorActual.contador + n,
        historiaAnterior: miSeleccion,
      }
    })

    if(this.state.contador >= 7){
      this.setState({
        contador: 0,
        historiaAnterior:""
      });
      historial=[]
      alert("Volveremos a contar la historia!")
    }

  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Botonera 
          onSelect={this.handleClick}
          optionA={data[this.state.contador].opciones.a}
          optionB={data[this.state.contador].opciones.b}
        />
        <Historial
          historiaAnterior={this.state.historiaAnterior}
          historial={historial}
        />
      </div>
    );
  }
}

export default App;
