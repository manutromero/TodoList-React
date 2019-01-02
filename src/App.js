import React, { Component } from 'react';
import './App.css';
import List from './Components/List'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    }
  }

  onChange = (event) =>{
    this.setState({
      term: event.target.value
    }) 
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
         <input value={this.state.term} onChange={this.onChange}/>
          <button>Enviar</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
