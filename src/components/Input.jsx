import React, { Component } from 'react';

class Input extends Component {
    constructor() {
      super();
      this.state = {
        mainIngredient: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(ev) {
    this.setState({
      mainIngredient: ev.target.value
    })
  }
  render(props) {
  return(

    <form className="fixedInput">
      <h3>Get Recipes by Main Ingredient or by Preparation Time </h3>
      <input
      className="inputIngredient"
      type="text"
      placeholder="Get Inspired..."
      name='mainIngredient'
      value={this.state.mainIngredient}
      onChange={this.handleChange} />

      <input
      className="submitIngredient"
      type="submit"
      value="Submit"
      onClick={(ev) => {
        ev.preventDefault();
        props.logInput();
      }} />
    </form>
  )
}}
export default Input;
