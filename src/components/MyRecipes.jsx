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
      Title:
      <input type="text" />
      Ingredients:
      <input type="text" />
      Instructions:
      <input type="text" />
      <input type="submit" value="Submit"/>
    </div>
    )
  }
}
export default MyRecipes;
