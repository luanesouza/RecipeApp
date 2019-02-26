import React from 'react';
import Input from './Input';

function GetEachTitle(props) {
  const { recipes, mainIngredient } = props;
  return (
    <div className="EachRecipe">
      {recipes.map((recipes) => (
        <div key={recipes.recipe_id}>
          <div className="images">
            <img src={recipes.image_url} alt="" />
          </div>
          <p>{recipes.title}</p>
        </div>
      ))}
      <Input
        onSubmit={props.onSubmit}
        mainIngredient={mainIngredient}
        onChange={props.onChange} />
    </div>
)};
export default GetEachTitle;
