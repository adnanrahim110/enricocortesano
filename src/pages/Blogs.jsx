import React, { useEffect, useRef, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { FaRedoAlt } from "react-icons/fa";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { author_ico, categories, recent_posts, youtube } from "../assets";
import PressReleases from "../components/PressReleases";
import { blogs } from "../constants";

const NavBtn = ({ onClick, disabled, children }) => {
  if (disabled) return null;

  return (
    <li>
      <button
        onClick={onClick}
        className="text-2xl font-elCamino bg-gray-300 border border-gray-300 text-gray-700 leading-none py-4 px-8 transition-all duration-150 ease-in items-center justify-center font-medium hover:bg-gray-400 hover:text-white"
      >
        {children}
      </button>
    </li>
  );
};

const Blogs = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const blogsPerPage = 6;

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";
    if (isReload) {
      setSelectedCategory("all");
    } else if (location.state && location.state.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const toTitleCase = (str) =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const blogCategories = [
    "All",
    ...Array.from(
      new Set(
        blogs
          .filter((blog) => new Date(blog.date) <= new Date())
          .flatMap((blog) =>
            blog.category.split(",").map((cat) => toTitleCase(cat.trim()))
          )
      )
    ),
  ];

  const filteredBlogs = blogs
    .filter((blog) => new Date(blog.date) <= new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((blog) => {
      if (selectedCategory.toLowerCase() === "all") return true;
      const blogCats = blog.category
        .split(",")
        .map((cat) => cat.trim().toLocaleLowerCase());
      return blogCats.includes(selectedCategory.toLocaleLowerCase());
    });

  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    scrollToTop();
  };

  return (
    <>
      <div ref={topRef} className="container xl relative">
        <div className="flex flex-col-reverse lg:flex-row gap-12 pt-40 relative">
          <div className="w-full lg:w-1/4 relative lg:mb-[12.75rem]">
            <div className="w-full lg:sticky top-10">
              <div className="relative mb-8 bg-gray-50 border border-gray-200 backdrop-blur-xs rounded-lg overflow-hidden">
                <h5 className="font-elCamino text-4xl text-black px-5 py-2 pl-2 flex items-center gap-3">
                  <span>
                    <img src={categories} className="w-20" alt="" />
                  </span>{" "}
                  <span>Categories</span>
                </h5>
                <ul className="">
                  {blogCategories.slice(1).map((category) => (
                    <li
                      key={category}
                      className={`px-5 py-3 ${
                        selectedCategory === category
                          ? "bg-gray-700"
                          : "bg-white hover:bg-gray-200"
                      } border-t border-gray-200 transition-all duration-200 ease-linear cursor-pointer`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span
                        className={`${
                          selectedCategory === category
                            ? "text-white"
                            : "text-gray-900"
                        } text-2xl font-telegraf tracking-widest font-normal`}
                      >
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mb-32 bg-gray-50 border border-gray-200 backdrop-blur-xs rounded-lg overflow-hidden">
                <h5 className="font-elCamino text-4xl text-black px-5 py-5 pl-2 flex items-center gap-3">
                  <span>
                    <img src={recent_posts} className="w-20" alt="" />
                  </span>{" "}
                  <span>Recent Posts</span>
                </h5>
                <ul>
                  {recentPosts.map((post, i) => (
                    <li
                      key={i}
                      className={`px-5 py-3 bg-white hover:bg-gray-100 border-t border-gray-200 transition-all duration-200 ease-linear`}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={post.embedLink ? youtube : post.imgTop[0]}
                          className="w-full max-w-24 h-20 object-center object-cover"
                          alt=""
                        />
                        <div>
                          <p className="text-gray-500 font-elCamino text-[1.2rem] font-bold mb-3">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                            })}{" "}
                            ·{" "}
                            <span
                              onClick={() => handleCategoryClick(post.category)}
                              className="text-primary-400 font-normal hover:text-primary"
                            >
                              {post.category}
                            </span>
                          </p>
                          <Link
                            to={post.url}
                            className={`text-black text-[15px] font-medium font-serif line-clamp-3 underline underline-offset-2 decoration-transparent hover:decoration-black transition-all duration-200 ease-in-out`}
                          >
                            {post.title}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`w-full h-auto lg:w-3/4 grid grid-cols-1 md:grid-cols-2 relative lg:gap-x-8`}
          >
            {selectedCategory !== "all" && (
              <nav className="absolute -top-14 right-0 bg-white border border-gray-300 overflow-hidden">
                <div className="flex items-center h-12">
                  <button
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 h-full px-5 leading-none text-lg font-resonay-base hover:bg-gray-300 font-normal tracking-widest transition-all duration-200 ease-in-out"
                    onClick={() => setSelectedCategory("All")}
                  >
                    <span>
                      <FaRedoAlt />
                    </span>{" "}
                    Reset
                  </button>
                  <div className="flex px-4 gap-x-3 items-center text-lg font-delaGothic">
                    <span className="text-gray-500 tracking-wide font-telegraf">
                      Filtered by category :
                    </span>
                    <span className="text-gray-600">{selectedCategory}</span>
                  </div>
                </div>
              </nav>
            )}
            {currentBlogs.map((blog, index) => (
              <div
                className={`relative col-span-1 ${
                  index === 4 || index === 5 ? "mb-14" : "mb-28"
                }`}
                key={index}
              >
                <div
                  className={`block w-full h-full max-h-[495px] overflow-hidden border border-transparent cursor-pointer bg-white shadow-sm hover:shadow-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 ease-in-out`}
                >
                  <Link
                    to={blog.url}
                    className={`block group overflow-hidden border-[.1rem] border-transparent transition-all duration-300 ease-[ease] relative aspect-[16/12]`}
                  >
                    {blog.imgTop && (
                      <img
                        src={blog.imgTop[0]}
                        className="transition-all group-hover:scale-105 duration-300 ease-[ease] object-cover object-center absolute top-0 left-0 w-full h-full"
                        alt={blog.title}
                      />
                    )}
                    {blog.embedLink && (
                      <div className="absolute w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={blog.embedLink}
                          title={blog.embedTitle}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </Link>
                  <div className="px-4 pb-4 bg-primary-900/50 rounded-b-lg">
                    <p className="flex items-center justify-between text-gray-600 font-telegraf text-[1.2rem] font-normal bg-gray-100 group-hover:bg-gray-200 py-2 -mx-5 px-4">
                      <Link
                        to={"/author"}
                        className="inline-flex items-center gap-3 group"
                      >
                        <img
                          src={author_ico}
                          alt="Enrico Cortesano"
                          className="rounded-full size-10"
                        />
                        <span className="underline underline-offset-2 group-hover:text-gray-900">
                          Enrico Cortesano
                        </span>
                      </Link>
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex items-center gap-2">
                          <HiOutlineCalendarDateRange />
                          <span className="text-black">{blog.date}</span>
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="text-black inline-flex items-center gap-2">
                          <CiShoppingTag />
                          {blog.category
                            .split(",")
                            .map((cat) => toTitleCase(cat.trim()))
                            .join(" · ")}
                        </span>
                      </span>
                    </p>
                    <Link
                      to={blog.url}
                      className={`text-primary text-[3.5rem] leading-normal mt-8 mb-6 line-clamp-1 font-reklame font-semibold transition-all duration-300 ease-out underline decoration-[4px] underline-offset-8 decoration-transparent hover:decoration-primary`}
                    >
                      {blog.title}
                    </Link>
                    <p
                      className={`font-telegraf font-medium text-[16px] text-gray-800 line-clamp-2`}
                    >
                      {blog.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {totalPages > 1 && (
              <nav className="xs:mt-[66px] col-span-2">
                <ul className="flex items-center justify-end gap-1">
                  <NavBtn
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </NavBtn>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handlePageChange(i + 1)}
                        className={`text-2xl transition-all duration-200 py-4 px-8 ease-in inline-flex items-center justify-center font-light font-elCamino leading-none border ${
                          currentPage === i + 1
                            ? "bg-black text-white border-black"
                            : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <NavBtn
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </NavBtn>
                </ul>
              </nav>
            )}
          </div>
        </div>

        <div className="mt-28 border border-gray-300">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4">
              <h1 className="py-10 lg:pl-5 text-black bg-gray-100 text-6xl font-resonay-base font-bold lg:border-r border-gray-300">
                Press Releases :
              </h1>
            </div>
            <div className="w-full lg:w-3/4 lg:px-5">
              <PressReleases />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
