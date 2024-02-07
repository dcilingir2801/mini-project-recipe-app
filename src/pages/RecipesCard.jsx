import { Link, Navigate, useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json";

function RecipesCard() {
  const { recipeId } = useParams();
  const recipeProfile = recipesData.find((recipes) => recipes.id == recipeId);
  if (!recipeProfile) {
    return <Navigate to="/" />;
  }
  console.log(recipeProfile);
  return (
    <div className="recipeDetails">
      <img src={recipeProfile.image} />
      <h1>{recipeProfile.name}</h1>
      <h4>Calories:{recipeProfile.calories}</h4>
      <h4>{recipeProfile.instructions}</h4>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
export default RecipesCard;
