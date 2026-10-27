import Icons from "../components/Icons.jsx";
import PostList from "../components/PostList.jsx";
import { profile } from "../content.js";
import { posts } from "../posts.js";
import About from "./About.jsx";
import usePageTitle from "../usePageTitle.js";

export default function Home() {
  usePageTitle("");

  // With no posts yet, the home page would be empty, so show the About page.
  if (posts.length === 0) return <About home />;

  return (
    <>
      <section className="intro" aria-labelledby="top">
        <h1 id="top">Hi, I'm {profile.name}</h1>
        <p className="lead">Welcome to my blog. I write notes on what I learn about 3D generative models, medical imaging and machine learning.</p>
        <Icons />
      </section>

      <section className="block" aria-label="Posts">
        <PostList />
      </section>
    </>
  );
}
