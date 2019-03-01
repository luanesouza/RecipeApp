import axios from 'axios';
const BASE_URL = `https://www.food2fork.com/api/search?key=`;
const REACT_APP_API = process.env.REACT_APP_API_KEY;

  async function getRecipes(mainIngredient){
  try {
    const recipes = await axios.get(`${BASE_URL}${REACT_APP_API}&q=${mainIngredient}&page=1`);
    return recipes.data.recipes;
  }
  catch(error) {
    console.log(error);
  }
}

export default getRecipes;
