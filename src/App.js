import React, { Component } from 'react';
import getRecipes from './services/api-helper';

import GetEachTitle from './components/GetEachTitle';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipes: []
    }
  }

  async componentDidMount(){
    const recipes = await getRecipes();
    this.setState({
      recipes
    })
    console.log(recipes);
  }
  render() {
    return (
      <div className="App">
        <GetEachTitle recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
