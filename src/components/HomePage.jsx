import React from 'react';

function HomePage(props) {
  const { mainIngredient, getInput, logInput } = props
  return (
    <div className="inputArea">
      <form className="fixedInput">
        <h3 className="inputTitle">
        Search Recipes </h3>
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
        value="Submit"
        onClick={(ev) => {
          ev.preventDefault();
          logInput(mainIngredient);
        }} />
      </form>
    </div>
  )
}

export default HomePage;
