import React, { Component } from 'react';
import getRecipes from './services/api-helper';
import Header from './components/Header';
import { Route, Link } from 'react-router-dom';
import GetEachTitle from './components/GetEachTitle';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipes: [],
      mainIngredient:''
    }
    this.getInput = this.getInput.bind(this);
    this.logInput = this.logInput.bind(this);
  }
  getInput(ev){
    this.setState({
      mainIngredient: ev.target.value
    })
    console.log(this.state.mainIngredient);
  }

  async logInput(mainIngredient) {
    const recipes = await getRecipes(mainIngredient);
    this.setState({
      recipes
    })
    console.log(recipes);
    console.log(this.state.mainIngredient);
  }

  async componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <Header />
        <h3>Get Recipes by Main Ingredient or by Preparation Time </h3>
        <input className="inputIngredient" type="text" placeholder="Get Inspired..." mainingredient={this.state.mainIngredient} onChange={this.getInput}/>
        <input className="submitIngredient" type="submit" value="Submit" onClick={(e) => {e.preventDefault(); this.logInput(this.state.mainIngredient)}} />
        <GetEachTitle recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
