import { div } from "framer-motion/client";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { author_ico, categories, recent_posts, youtube } from "../assets";
import { blogs } from "../constants";

const Blog = () => {
  const { blogName } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(
    (blog) => blog.url.replace("/blogs/", "") === blogName
  );

  const shareUrl = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURI(
    blog.title
  )}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`;

  const shareBlog = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Blog URL copied to clipboard!");
    }
  };

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

  const recentPosts = blogs
    .filter((b) => b.category === blog.category && b.url !== blog.url)
    .slice(0, 3);

  const processInline = (text) => {
    const regex = /(`([^`]+)`)|('([^']+)')|(!([^']+)!)|({([^']+)})/g;
    let lastIndex = 0;
    const parts = [];
    let match;
    let idx = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      if (match[1]) {
        parts.push(<strong key={`inline-${idx++}`}>"{match[2]}"</strong>);
      } else if (match[3]) {
        parts.push(<strong key={`inline-${idx++}`}>{match[4]}</strong>);
      } else if (match[5]) {
        parts.push(<strong key={`inline-${idx++}`}>-{match[6]}</strong>);
      } else if (match[7]) {
        parts.push(
          <strong key={`inline-${idx++}`} className="italic">
            {match[8]}
          </strong>
        );
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts;
  };

  const renderTextContent = (textSection) => {
    const sections = Array.isArray(textSection) ? textSection : [textSection];

    return sections.map((textItem, index) => {
      const trimmed = textItem.trim();
      if (trimmed.startsWith(":") && trimmed.endsWith(":")) {
        const cleanedText = trimmed.slice(1, -1).trim();
        return (
          <h3
            key={index}
            className="text-gray-800 mb-8 last:mb-16 text-[24px] font-bold font-serif leading-11"
          >
            {processInline(cleanedText)}
          </h3>
        );
      }
      if (textItem.includes("\\")) {
        const items = textItem
          .split("\\")
          .map((item) => item.trim())
          .filter(Boolean);
        return (
          <ul key={index} className="list-decimal ml-6 mb-8 last:mb-16">
            {items.map((item, i) => (
              <li key={i}>{processInline(item)}</li>
            ))}
          </ul>
        );
      }
      const lines = textItem.split("\n");
      return (
        <p
          key={index}
          className="text-gray-950 mb-8 last:mb-16 text-[18px] font-serif leading-11"
        >
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {processInline(line.trim())}
              {i < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    });
  };

  const renderImageGrid = (images) => {
    if (!images || images.length === 0) return null;
    const gridCols =
      images.length === 2
        ? "md:grid-cols-2"
        : images.length >= 3
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1";
    return (
      <div className={`grid ${gridCols} gap-2 mb-16`}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={blog.title}
              className="object-cover w-full h-full object-center"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container xl relative">
        <div className="flex gap-12 pt-40 relative">
          <div className="w-full lg:w-1/4 relative">
            <div className="w-full sticky top-10 mb-40">
              <div className="relative mb-8 bg-primary-50/50 border border-primary-200 backdrop-blur-xs rounded-lg overflow-hidden">
                <h5 className="font-elCamino text-4xl text-primary-500 px-5 py-2 pl-2 flex items-center gap-3">
                  <span>
                    <img src={categories} className="w-20" alt="" />
                  </span>{" "}
                  <span>Categories</span>
                </h5>
                <ul>
                  {blogCategories.slice(1).map((category) => (
                    <li
                      key={category}
                      className={`px-5 py-4 bg-gray-50 hover:bg-primary-100 border-t border-primary-200 text-gray-700 hover:text-black font-telegraf tracking-widest text-2xl transition-all duration-200 ease-linear cursor-pointer`}
                      onClick={() =>
                        navigate("/blogs-pressreleases", {
                          state: { selectedCategory: category },
                        })
                      }
                    >
                      <span>{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mb-32 bg-primary-50/50 border border-primary-200 backdrop-blur-xs rounded-lg overflow-hidden">
                <h5 className="font-elCamino text-4xl text-primary-500 px-5 py-5 pl-2 flex items-center gap-3">
                  <span>
                    <img src={recent_posts} className="w-20" alt="" />
                  </span>{" "}
                  <span>Related Posts</span>
                </h5>
                <ul>
                  {recentPosts.map((post, i) => (
                    <li
                      key={i}
                      className={`px-5 py-3 bg-white hover:bg-primary-50 border-t border-primary-200 transition-all duration-200 ease-linear`}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={post.embedLink ? youtube : post.imgTop[0]}
                          className="w-full max-w-24 h-20 object-center object-cover"
                          alt=""
                        />
                        <div>
                          <p className="text-gray-700 font-elCamino text-[1.2rem] font-bold mb-3">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                          <Link
                            to={post.url}
                            className={`text-black text-[15px] leading-tight font-medium font-serif line-clamp-3 underline underline-offset-2 decoration-transparent hover:decoration-black transition-all duration-200 ease-in-out`}
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
          <div className="w-full h-auto lg:w-3/4 relative lg:px-16">
            <div className="mb-40">
              <div
                className={`rounded-xl overflow-hidden relative aspect-video`}
              >
                {blog.embedLink ? (
                  <div className="absolute w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={blog.embedLink}
                      title={blog.embedTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : blog.imgTop && blog.imgTop.length > 0 ? (
                  renderImageGrid(blog.imgTop)
                ) : null}
              </div>
              <div className="pt-8">
                <p className="flex gap-3 items-center text-gray-500 font-elCamino text-[1.4rem] font-bold">
                  <img
                    src={author_ico}
                    alt="Enrico"
                    className="rounded-full w-14 h-14"
                  />
                  <span className="text-black">Enrico Cortesano</span>
                  <span>·</span>
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span className="text-gray-600">
                    {blog.category
                      .split(",")
                      .map((cat) => toTitleCase(cat.trim()))
                      .join(" · ")}
                  </span>
                </p>
                <h1
                  className={`text-black text-7xl leading-tight mt-20 mb-16 font-reklame font-semibold`}
                >
                  {blog.title}
                </h1>
                {blog.text[0] && <div>{renderTextContent(blog.text[0])}</div>}
                {blog.ings && (
                  <div className="grid grid-cols-1 gap-5 mb-16">
                    {blog.ings.map((ing, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 bg-gray-50 rounded-lg px-10 py-8"
                      >
                        <h3 className="text-4xl mb-7">{ing.title}</h3>
                        {ing.items.length > 1 ? (
                          <>
                            <h5 className="text-black mb-3 font-delaGothic">
                              {ing.items[0]}
                            </h5>
                            <ul className="text-black font-serif *:mb-2">
                              {ing.items[1]
                                .split("|")
                                .map(
                                  (item, idx) =>
                                    item.trim() && (
                                      <li key={idx}>{item.trim()}</li>
                                    )
                                )}
                            </ul>
                          </>
                        ) : (
                          <ul className="text-black font-serif *:mb-2">
                            {ing.items[0]
                              .split("|")
                              .map(
                                (item, idx) =>
                                  item.trim() && (
                                    <li key={idx}>{item.trim()}</li>
                                  )
                              )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {blog.text[1] && <div>{renderTextContent(blog.text[1])}</div>}
                <div className="relative">
                  {blog.imgR2 && renderImageGrid(blog.imgR2)}
                </div>
                {blog.text[2] && (
                  <div>
                    <div>{renderTextContent(blog.text[2])}</div>
                  </div>
                )}
                {blog.text[3] && (
                  <div>
                    <div>{renderTextContent(blog.text[3])}</div>
                  </div>
                )}
                <div>{blog.imgs && renderImageGrid(blog.imgs)}</div>
                {blog.text[4] && <div>{renderTextContent(blog.text[4])}</div>}
                {blog.text[5] && (
                  <div>
                    <div>{renderTextContent(blog.text[5])}</div>
                  </div>
                )}
                <div>{blog.imgLast && renderImageGrid(blog.imgLast)}</div>
                <div className="my-40 border-y border-gray-200 py-10 flex justify-between items-center">
                  <ul className="flex gap-16">
                    {[
                      {
                        icon: FaFacebookF,
                        href: facebookShareUrl,
                        color: "#4267B2",
                      },
                      {
                        icon: FaXTwitter,
                        href: twitterShareUrl,
                        color: "#1DA1F2",
                      },
                      {
                        icon: FaLinkedinIn,
                        href: linkedinShareUrl,
                        color: "#0077B5",
                      },
                      {
                        icon: FaShareAlt,
                        onClick: shareBlog,
                        color: "#FFAF00",
                      },
                    ].map((link, idx) => {
                      const ShareIcon = link.icon;
                      const textColor = link.color;
                      const Wrapper = link.href ? "a" : "button";

                      return (
                        <li key={idx}>
                          <Wrapper
                            {...(link.href
                              ? {
                                  href: link.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : { onClick: link.onClick, type: "button" })}
                            className={`transition-all duration-200 ease-out text-black`}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = textColor)
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#000")
                            }
                          >
                            <ShareIcon />
                          </Wrapper>
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    {blog.category.split(",").map((cat, i) => {
                      const trimmedCat = cat.trim();
                      return (
                        <button
                          key={i}
                          onClick={() =>
                            navigate("/blogs-pressreleases", {
                              state: {
                                selectedCategory: toTitleCase(trimmedCat),
                              },
                            })
                          }
                          className="relative font-elCamino underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-primary transition-all duration-200 ease-out mx-3 not-last:after:absolute not-last:after:top-1/2 not-last:after:-translate-y-1/2 not-last:after:w-1 not-last:after:h-1 not-last:after:rounded-full not-last:after:bg-primary not-last:after:mx-2.5"
                        >
                          {toTitleCase(trimmedCat)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
