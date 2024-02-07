import List from "../components/List";

function DashboardPage({ recipes, setRecipes }) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="main-container">
      <h1>Recipes</h1>
      <div>
        <List recipes={recipes} setRecipes={setRecipes} />
      </div>
    </div>
  );
}

export default DashboardPage;
