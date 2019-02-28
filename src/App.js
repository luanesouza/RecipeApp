import React, { Component } from 'react';
import getRecipes from './services/api-helper';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MyRecipes from './components/MyRecipes';
import { Route, Link } from 'react-router-dom';
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
        <div className="wrapper">
          <div className="icons">
            <Link to="/">
              <img
              className="home"
              src="http://www.clker.com/cliparts/u/j/K/w/1/5/home-icon-md.png"
              alt=""/>
            </Link>
            <Link to="/myRecipes">
              <img
              className="home"
              src="http://icongal.com/gallery/image/43845/notes_add.png"
              alt="" />
            </Link>
          </div>
          <main>
              <Route exact path="/" render={(props) => (
                <HomePage
                {...props}
                getInput={this.getInput}
                logInput={this.logInput}
                mainIngredient={this.state.mainIngredient}
                recipes={this.state.recipes}/>
              )}/>
              <Route path="/myRecipes" component={MyRecipes} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
