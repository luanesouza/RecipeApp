import React, { Component } from 'react';
import getRecipes from './services/api-helper';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import MyRecipes from './components/MyRecipes';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipes: [],
      mainIngredient:'',
      myRecipes: []
    }
    this.getInput = this.getInput.bind(this);
    this.logInput = this.logInput.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
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
  }

  saveRecipe(recipe) {
    this.setState(prevState => ({
      myRecipes: [
        ...prevState.myRecipes,
        recipe
      ]
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="icons">
            <Link to="/">
              <img
              className="home"
              src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"
              alt="home"/>
            </Link>

            <Link to="/searchRecipes" >
              <img
              className="home"
              src="https://static.thenounproject.com/png/43533-200.png"
              alt="search" />
            </Link>

            <Link to="/myRecipes">
              <img
              className="home"
              src="http://cdn.onlinewebfonts.com/svg/img_328479.png"
              alt="" />
            </Link>
          </div>
          <main>
              <Route exact path="/" component={HomePage}/>
              <Route path="/searchRecipes" render={(props) => (
                <SearchPage
                {...props}
                getInput={this.getInput}
                logInput={this.logInput}
                mainIngredient={this.state.mainIngredient}
                recipes={this.state.recipes}
                saveRecipe={this.saveRecipe}
                />
              )}/>
              <Route path="/myRecipes" render={(props) => (
                <MyRecipes {...props}
                myRecipes={this.state.myRecipes} />
              )} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
