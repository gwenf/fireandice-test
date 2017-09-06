import React, { Component } from 'react';

//validation - each poll should have at least two options

class CreatePoll extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      options: [
        {
          text: ''
        },
        {
          text: ''
        }
      ]
    };
  }
  handleInput (i, e) {
    let newOptions = [...this.state.options];
    newOptions[i].text = e.target.value
    this.setState({
      options: newOptions
    });
  }
  handleTitleInput (e) {
    this.setState({
      title: e.target.value
    });
  }
  addInputs () {
    let newOptions = [...this.state.options];
    newOptions.push({text: ''});
    this.setState({
      options: newOptions
    });
  }
  removeInputs () {
    let newOptions = [...this.state.options];
    newOptions.pop();
    this.setState({
      options: newOptions
    });
  }
  render () {
    var inputNodes = this.state.options.map((input, i) => {  
      return (
        <div className="form-group" key={i}>
          <label htmlFor={"Input" + (i+1)}>{"Poll Item " + (i+1)}</label>
          <input
            key={i}
            className="form-control input-lg" 
            id={"Input" + (i+1)} 
            type="text" 
            value={this.state.options[i].text}
            onChange={this.handleInput.bind(this, i)}
            placeholder={"Poll Item " + (i+1)} 
          />
        </div>
      );
    });
    return (
        <div>
          <h1>Create New Polls</h1>
          <form>
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control input-lg" value={this.state.title} placeholder="Title" onChange={this.handleTitleInput.bind(this)}/>
            {inputNodes}
            <label >{"Adjust Number of Options"}</label><br/>
            <input type="button" className="btn btn-primary" value="+" onClick={this.addInputs.bind(this)}/>
            <input type="button" className="btn btn-danger" value="-" onClick={this.removeInputs.bind(this)}/>
            <input type="button" className="btn btn-success pull-right" value="Create Poll" onClick={() => console.log('submitted')}/>
          </form>
        </div>
    )
  }
};

export default CreatePoll;
