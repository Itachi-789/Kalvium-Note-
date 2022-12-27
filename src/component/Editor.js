import React, { Component } from 'react'
import './Editor.css'

export default class Editor extends Component {
    constructor(){
        super()

        this.handleChange = this.handleChange.bind(this)

        this.state={
            note: "Type something here!"
        }
    }

    handleChange(e){
        this.setState({
            note: e.target.value
        })
    }
    
  render() {
    return (
        <div className="container">
            <div className="input">
                <h3>Input</h3>
                <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.note}/>
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <div className="output-text">{this.state.note}</div>
            </div>                
        </div>
    )
  }
}
