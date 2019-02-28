import React from 'react';
import GetEachTitle from './GetEachTitle';

function HomePage(props) {
  const { mainIngredient, getInput, logInput } = props
  return (
    <div className="inputArea">
      <form className="fixedInput">
        <h3 className="inputTitle">
        SEARCH RECIPES BY INGREDIENTS
        </h3>
        <input
        className="inputIngredient"
        type="text"
        placeholder="Get Inspired..."
        name='mainIngredient'
        value={mainIngredient}
        onChange={getInput} />

        <input
        className="submitIngredient"
        type="submit"
        value="Search"
        onClick={(ev) => {
          ev.preventDefault();
          logInput(mainIngredient);
        }} />
      </form>
      <GetEachTitle recipes={props.recipes} />
    </div>
  )
}

export default HomePage;
