import React from 'react';

function GetEachTitle(props) {
  const { recipes } = props;
  return (
    <div className="EachRecipe wrapper">
      {recipes.map((recipes) => (
        <div key={recipes.recipe_id}>
          <div className="images">
            <img className="EachImage" src={recipes.image_url} alt="" />
          </div>
          <div className="whiteBg">
            <p className="recipeTitle">{recipes.title}</p>
            <a className="link" href={recipes.source_url}> Get Full Recipe</a>
            <p className="recipeTitle">Social Rank: {recipes.social_rank.toFixed(2)}</p>
            <button onClick={() => {props.saveRecipe(recipes)}}> Save Recipe </button>
          </div>
        </div>
      ))}
    </div>
)};
export default GetEachTitle;
