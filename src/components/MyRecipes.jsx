import React, { Component } from 'react';


class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: ''
    }
  }
  render() {
  return(
    <div className="MyRecipes">
        <p className="MyRecipesTitle">Title ✎ </p>
        <input className="titleInput" type="text" />
        <p className="MyRecipesTitle">Ingredients ✎ </p>
        <input className="ingInput" type="text" />
        <p className="MyRecipesTitle">Instructions ✎ </p>
        <textarea className="instInput"/>
        <input className="MyRecipesButton" type="submit" value="Submit"/>
    </div>
    )
  }
}
export default MyRecipes;
