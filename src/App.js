import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import About from "./components/About";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<SinglePost />} />
        </Route>
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
