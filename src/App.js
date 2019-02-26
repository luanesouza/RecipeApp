import React, { Component } from 'react';
import getRecipes from './services/api-helper';
import Header from './components/Header';
import MyRecipes from './components/MyRecipes';
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
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }

  async logInput(mainIngredient) {
    const recipes = await getRecipes(mainIngredient);
    this.setState({
      recipes
    })
    console.log(recipes);
    console.log(this.state.mainIngredient);
  }

  render() {
    return (
      <div className="App">
        <Link to="/">
          <img
          className="home"
          src="http://www.clker.com/cliparts/u/j/K/w/1/5/home-icon-md.png"/>
        </Link>

        <nav>
          <div className="Inspiration">
            <Link to="/getInspired"> NEED INSPIRATION? </Link>
          </div>
            <br/>
          <div className="Inspiration">
            <Link to="/myRecipes"> YOUR RECIPES </Link>
          </div>
        </nav>
        <main>
            <Route exact path="/" />
            <Route path="/myRecipes" component={MyRecipes} />
            <Route path="/getInspired"
              component={(props) => (
                <GetEachTitle {...props}
                  recipes ={this.state.recipes}
                  mainIngredient={this.state.mainIngredient}
                  onSubmit={this.logInput}
                  onChange={this.getInput} />
            )}/>

        </main>
      </div>
    );
  }
}

export default App;
