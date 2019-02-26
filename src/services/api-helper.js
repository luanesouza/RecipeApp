import axios from 'axios';
const BASE_URL = `https://www.food2fork.com/api/search?key=`;
const API_KEY = `6598e71afb10fe0eb40b8e86b29cd0c6`;

  async function getRecipes(mainIngredient){
  try {
    const recipes = await axios.get(`${BASE_URL}${API_KEY}&q=${mainIngredient}&page=1`);
    return recipes.data.recipes;
  }
  catch(error) {
    console.log(error);
  }
}

export default getRecipes;
