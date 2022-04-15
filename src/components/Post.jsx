import { Link } from "react-router-dom";

const Post = ({ post: { id, title, body, datetime } }) => {
  return (
    <article className="post">
      <Link to={`post/${id}`}>
        <h2>{title}</h2>
        <p className="postDate">{datetime}</p>
      </Link>
      <p className="postBody">
        {body.length <= 25 ? body : `${body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
