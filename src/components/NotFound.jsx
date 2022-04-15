import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="NotFound">
      <h2>Page, Not Found</h2>
      <p>Well, that's disgusting</p>
      <p>
        <Link to="/">Visit Homepage</Link>
      </p>
    </main>
  );
};

export default NotFound;
