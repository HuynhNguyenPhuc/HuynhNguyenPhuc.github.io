import PostList from "../components/PostList.jsx";
import usePageTitle from "../usePageTitle.js";

export default function BlogIndex() {
  usePageTitle("Blog");

  return (
    <>
      <h1 className="page-title">Blog</h1>
      <PostList />
    </>
  );
}
