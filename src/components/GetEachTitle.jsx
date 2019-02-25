import React from 'react';

function GetEachTitle(props) {
  const { recipes } = props
  return (
    <div className="EachRecipe">
      {recipes.map((recipes) => (
        <div key={recipes.recipe_id}>
          <p>{recipes.title}</p>
          <img src={recipes.image_url} alt="" />
        </div>
      ))}
  </div>
)};

export default GetEachTitle;
