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
      <p>Title ✎ </p>
      <input className="titleInput" type="text" />
      <p>Ingredients ✎ </p>
      <input className="ingInput" type="text" />
      <p>Instructions ✎ </p>
      <textarea className="instInput"/>
      <input type="submit" value="Submit"/>
    </div>
    )
  }
}
export default MyRecipes;
