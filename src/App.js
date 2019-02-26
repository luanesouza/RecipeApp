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
        <GetEachTitle recipes={this.state.recipes} />
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
            <Route exact path="/" />
            <Route path="/myRecipes" component={MyRecipes} />
        </main>
          <div className="inputArea">
            <form className="fixedInput">
              <h3 className="inputTitle">
              Get Recipes by
              <br/>
               Main Ingredient or by
               <br/>
               Preparation Time </h3>
              <input
              className="inputIngredient"
              type="text"
              placeholder="Get Inspired..."
              name='mainIngredient'
              value={this.state.mainIngredient}
              onChange={this.getInput} />

              <input
              className="submitIngredient"
              type="submit"
              value="Submit"
              onClick={(ev) => {
                ev.preventDefault();
                this.logInput(this.state.mainIngredient);
              }} />
            </form>
          </div>
      </div>
    );
  }
}

export default App;
