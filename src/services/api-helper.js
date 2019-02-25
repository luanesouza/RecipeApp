import axios from 'axios';
const BASE_URL = `https://www.food2fork.com/api/search?key=`;
const API_KEY = `78df59383247d284adbe0d6d8a40e094`;

  async function getRecipes(mainingredient){
  try {
    const recipes = await axios.get(`${BASE_URL}${API_KEY}&q=${mainingredient}&page=1`);
    return recipes.data.recipes;
  }
  catch(error) {
    console.log(error);
  }
}

export default getRecipes;
