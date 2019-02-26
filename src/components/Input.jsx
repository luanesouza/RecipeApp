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
  render() {
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
      onSubmit={props.onSubmit()}
      onClick={(ev, props) => {
        ev.preventDefault();
        props.onSubmit();
      }} />
    </form>
  )
}}
export default Input;
