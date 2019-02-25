import React from 'react';

function GetEachImage(props) {

  const { recipes } = props
  return (
  <div>
    {recipes.map((recipes) =>
      <div key={recipes.recipe_id}>
      </div>
    )}
  </div>
)};
export default GetEachImage;
