import React, { Component, Fragment } from 'react';

export default class Botonera extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    handleClick = (e) => {
        this.props.onSelect(e.target.id);    //el target pasa en formato obj que evento se disparó, yo lo necesito porque tengo 2 botones que pueden dispararse con el mismo evento onClick
    }

    render(){
        const {optionA, optionB} = this.props;  //desestructuración
        return(
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" id="A" onClick={this.handleClick}>A</button>
                    <h2>{optionA}</h2>  {/* es lo mismo que this.props.optionA */}
                </div>
                <div className="opcion">
                    <button className="botones" id="B" onClick={this.handleClick}>B</button>
                    <h2>{optionB}</h2>
                </div>                       
            </div>
        );
    }

}