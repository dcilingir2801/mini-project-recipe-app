import { useState } from "react";

import recipesData from "../assets/recipes.json";
import List from "../components/List";
import Form from "../components/Form";

function Form() {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className="main-container">
      <h1>Add a new</h1>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default DashboardPage;