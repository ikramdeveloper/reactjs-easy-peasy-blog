import { useLayoutEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Feed from "./Feed";
import useAxiosFetch from "../hooks/useAxiosFetch";

// glitch url: https://seemly-truthful-scribe.glitch.me/

const Home = () => {
  const API_URL = "http://localhost:3500/" || process.env.REACT_APP_API_URL;
  const searchResults = useStoreState((state) => state.searchResults);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch(`${API_URL}posts`);

  useLayoutEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No post to display</p>
        ))}
    </main>
  );
};

export default Home;
