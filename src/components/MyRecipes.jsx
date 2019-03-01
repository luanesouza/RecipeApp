import React from 'react';

function MyRecipes(props) {
  const { myRecipes } = props;

  return(
    <div className="EachRecipe MyRecipes" key={myRecipes.length}>
      {myRecipes.map((recipe) => (
        <div className="myRecipes">
          <div className="images">
            <img className="EachImage" src={recipe.image_url} />
          </div>
          <p className="myRecipeTitle">{recipe.title}</p>
          <a className="link" href={recipe.source_url}> Full Recipe </a>
          <p>Social Rank: {recipe.social_rank.toFixed(2)} </p>

        </div>
      ))}
    </div>

    )
}
export default MyRecipes;
