import React from 'react';

function MyRecipes(props) {
  const { myRecipes } = props;

  return(
    <div className="MyRecipes" key={myRecipes.length}>
      {myRecipes.map((recipe) => (
        <div>
          <p className="myRecipeTitle">{recipe.title}</p>
          <img className="myRecipeImg" src={recipe.image_url} />
          <a href={recipe.source_url} />
          <p>Social Rank: {recipe.social_rank} </p>

        </div>
      ))}
    </div>

    )
}
export default MyRecipes;
