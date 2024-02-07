import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecipesCard from "../pages/RecipesCard";
import recipesData from "../assets/recipes.json";

function List() {
  const [recipes, setRecipes] = useState(recipesData);
  const [editableRecipe, setEditableRecipe] = useState(null);

  const handleDelete = (currentId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== currentId));
  };

  const handleEdit = (recipeId) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);
    setEditableRecipe(recipeToEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableRecipe({
      ...editableRecipe,
      [name]: value
    });
  };

  const handleSave = () => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === editableRecipe.id) {
        return editableRecipe;
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
    setEditableRecipe(null);
  };

  return (
    <div className="list">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {editableRecipe && editableRecipe.id === recipe.id ? (
            <div>
              <input type="text" name="name" value={editableRecipe.name} onChange={handleInputChange} />
              <input type="text" name="calories" value={editableRecipe.calories} onChange={handleInputChange} />
              <input type="text" name="servings" value={editableRecipe.servings} onChange={handleInputChange} />
              <input type="text" name="instructions" value={editableRecipe.instructions} onChange={handleInputChange} />
              <button type="button" onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <Link key={`/recipes/{recipe.id}`}><RecipesCard {...recipe}/>
              <div className="recipe-card">
                <h3>{recipe.name}</h3>
                <img src={recipe.image} alt={recipe.name} />
                <p>Calories: {recipe.calories}</p>
                <p>Servings: {recipe.servings}</p>
                <p>Instructions: {recipe.instructions}</p>
                <button id="button" type="button" onClick={() => handleDelete(recipe.id)}>Delete</button>
                <button id="button2" type="button" onClick={() => handleEdit(recipe.id)}>Edit</button>
              </div>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default List;
