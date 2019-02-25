import React from 'react';
import GetEachTitle from './GetEachTitle';
import GetEachImage from './GetEachImage';

function DisplayRecipes(props) {
  const {
    recipes,
    mainingredient,
    handleSubmit,
    handleChange
  } = props;
  return(
    <form onSubmit={handleSubmit}>
    <label htmlFor="input"> Input: </label>
    <input
    type="text"
    name="input"
    value={mainingredient}
    onChange={handleChange} />
    <input
    className="submitIngredient"
    type="submit"
    value="Submit"
    onClick={(e) => {e.preventDefault(); this.logInput(this.state.mainIngredient)}} />
    <GetEachTitle recipes={this.state.recipes} />
    <div>

    </div>
  )
}

export default DisplayRecipes;
