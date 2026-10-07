import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { formatDate, posts } from "../posts.js";
import usePageTitle from "../usePageTitle.js";
import NotFound from "./NotFound.jsx";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  usePageTitle(post?.title ?? "Post not found");

  if (!post) return <NotFound what="post" />;

  return (
    <article className="article">
      <h1>{post.title}</h1>
      <p className="meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <Markdown>{post.body}</Markdown>
      <p className="more">
        <Link to="/blog">All posts</Link>
      </p>
    </article>
  );
}
