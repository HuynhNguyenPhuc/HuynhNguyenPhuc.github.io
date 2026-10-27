import { Link } from "react-router-dom";
import { formatDate, posts } from "../posts.js";

export default function PostList({ limit }) {
  const shown = limit ? posts.slice(0, limit) : posts;

  if (shown.length === 0) {
    return <p className="empty">No posts yet.</p>;
  }

  return (
    <ul className="post-list">
      {shown.map((post) => (
        <li className="card" key={post.slug}>
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          {post.summary && <p>{post.summary}</p>}
          <p className="meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time> | {post.minutes} min read
          </p>
        </li>
      ))}
    </ul>
  );
}
