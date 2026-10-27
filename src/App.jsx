import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Post from "./pages/Post.jsx";

// Client-side navigation keeps the old scroll position, so reset it on each
// route change, or scroll to the #section a link points at.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="wrap">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Navigate to="/" replace />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
