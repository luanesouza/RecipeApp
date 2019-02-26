import React from 'react';

function Input(props){
  return(
    <div className="fixedInput">
      <h3>Get Recipes by Main Ingredient or by Preparation Time </h3>
      <input className="inputIngredient" type="text" placeholder="Get Inspired..." mainIngredient={props.mainIngredient} onChange={props.getInput}/>
      <input className="submitIngredient" type="submit" value="Submit" onClick={() => props.logInput(props.mainIngredient)} />
    </div>
  )
}

export default Input;
