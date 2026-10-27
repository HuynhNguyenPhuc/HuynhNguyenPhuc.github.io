import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle.js";

export default function NotFound({ what = "page" }) {
  usePageTitle("Not found");

  return (
    <div className="article">
      <h1>We couldn't find that {what}</h1>
      <p>The address may be mistyped, or the {what} may have moved.</p>
      <p className="more">
        <Link to={"/"}>{"Back to all posts"}</Link>
      </p>
    </div>
  );
}
