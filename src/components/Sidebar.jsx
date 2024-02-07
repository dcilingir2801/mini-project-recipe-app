import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Your recipes</Link>
      <Link to="/addrecipe">Add a new Recipe</Link>
      <br></br>
      <Link to="/about">About Me</Link>
    </div>
  );
}

export default Sidebar;
