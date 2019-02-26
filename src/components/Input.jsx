import React from 'react';

function Input(props){
  return(
    <form className="fixedInput">
      <h3>Get Recipes by Main Ingredient or by Preparation Time </h3>
      <input
      className="inputIngredient"
      type="text"
      placeholder="Get Inspired..."
      name='mainIngredient'
      value={props.mainIngredient}
      onChange={props.onChange} />
      <input
      className="submitIngredient"
      type="submit"
      value="Submit"
      onClick={(ev) => {
        ev.preventDefault();
        props.onSubmit(props.mainIngredient);
      }} />
    </form>
  )
}

export default Input;
