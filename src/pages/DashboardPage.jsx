import { useState } from "react";

import recipesData from "../assets/recipes.json";
import List from "../components/List";
import Form from "../components/Form";

function DashboardPage() {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className="main-container">
      <h1>Recipes</h1>
      <div>
        <List />
      </div>
    </div>
  );
}

export default DashboardPage;