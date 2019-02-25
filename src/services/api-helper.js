import axios from 'axios';

  async function getRecipes(){
  try {
    const recipes = await axios.get(`https://www.food2fork.com/api/search?key=6598e71afb10fe0eb40b8e86b29cd0c6&q=chicken%20breast&page=2`);
    return recipes.data.recipes;
  }
  catch(error) {
    console.log(error);
  }
}

export default getRecipes;
