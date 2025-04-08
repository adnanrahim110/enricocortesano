import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { texture1 } from "./assets";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Loader from "./components/utils/Loader";
import OpenAtTop from "./components/utils/OpenAtTop";
import ScrollToTop from "./components/utils/ScrollToTop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Book from "./pages/Book";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PizzaCalculator from "./pages/PizzaCalculator";
import Riflessioni from "./pages/Riflessioni";
import Videos from "./pages/Videos";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const checkMediaLoaded = () => {
      const mediaElements = Array.from(document.querySelectorAll("img, video"));

      if (mediaElements.length === 0) {
        setLoading(false);
        return;
      }

      const loadPromises = mediaElements.map((el) => {
        if (el.complete) return Promise.resolve();
        return new Promise((resolve) => {
          el.addEventListener("load", resolve, { once: true });
          el.addEventListener("error", resolve, { once: true });
        });
      });

      Promise.all(loadPromises).then(() => {
        setTimeout(() => setLoading(false), 500);
      });
    };

    if (document.readyState === "complete") {
      checkMediaLoaded();
    } else {
      window.addEventListener("load", checkMediaLoaded);
    }
    return () => {
      window.removeEventListener("load", checkMediaLoaded);
    };
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ScrollToTop />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative">
        {location.pathname === "/blogs" && (
          <img
            src={texture1}
            className="absolute h-full w-full opacity-[0.07] -z-[1]"
            alt=""
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blogs-pressreleases" element={<Blogs />} />
          <Route path="/blogs/:blogName" element={<Blog />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/pizza-calculator" element={<PizzaCalculator />} />
          <Route path="/:categoryId" element={<Category />} />
          <Route path="/reflections" element={<Riflessioni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <OpenAtTop />
    </>
  );
};

export default AppContent;
