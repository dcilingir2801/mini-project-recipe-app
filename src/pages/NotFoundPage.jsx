import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFoundCtn">
      <h2>ERROR 404 PAGE NOT FOUND</h2>
      <Link to="*">
        <button type="button" className="notFoundBtn">
          {" "}
          Back to Home Page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;