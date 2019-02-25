import React from 'react';

function GetEachTitle(props) {

  const { recipes } = props;
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
    </div>
)};
export default GetEachTitle;
