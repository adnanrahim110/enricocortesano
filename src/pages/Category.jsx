import React from "react";
import { Link, useParams } from "react-router-dom";
import { categoriesList } from "../constants";

const Category = () => {
  const { categoryId } = useParams();
  const currentCategory = categoriesList.find(
    (cat) =>
      cat.url.replace("/", "") === categoryId && cat.rows && cat.rows.length > 0
  );

  let oneImgCounter = 0;

  const renderGrid = (row, oneImgIndex) => {
    if (row.imgs && row.imgs.length > 1) {
      return (
        <div
          className="grid grid-cols-1 lg:grid-cols-7 mb-40 lg:my-8"
          key={row.url}
        >
          <div className="order-2 lg:order-1 flex items-center col-span-2 justify-center">
            <img
              src={row.imgs[0]}
              alt={row.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="order-1 lg:order-2 col-span-3 flex flex-col items-center p-20 lg:p-36 justify-center text-center"
            style={{ backgroundColor: row.bgColor }}
          >
            <h2
              className="text-4xl lg:text-7xl tracking-[1rem] leading-12 lg:leading-24 font-bold font-sans uppercase mb-5"
              style={{ color: row.titleColor }}
            >
              {row.title}
            </h2>
            {row.subtitle && (
              <p className="text-2xl mb-5 text-gray-700">{row.subtitle}</p>
            )}
            <p
              className="mt-2 font-light tracking-wide font-sans mb-5"
              style={{ color: row.textcolor }}
            >
              {row.text}
            </p>
            <Link
              to={row.url}
              className="mt-4 inline-block bg-black border-2 border-black text-white px-8 tracking-widest text-base lg:text-xl uppercase leading-none py-6 rounded hover:text-black hover:bg-transparent transition-all duration-200 ease-in-out"
            >
              Guarda la ricetta
            </Link>
          </div>
          <div className="order-3 items-center justify-center col-span-2 hidden lg:flex">
            <img
              src={row.imgs[1]}
              alt={row.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      );
    } else {
      if (oneImgIndex % 2 === 0) {
        return (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 mb-40 lg:my-8"
            key={row.url}
          >
            <div className="order-2 lg:order-1 flex items-center justify-center aspect-square">
              <img
                src={row.imgs[0]}
                alt={row.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="order-1 lg:order-2 flex flex-col items-center p-20 lg:px-44 lg:py-28 justify-center text-center"
              style={{ backgroundColor: row.bgColor }}
            >
              <h2
                className="text-4xl lg:text-7xl tracking-[1rem] leading-12 lg:leading-24 font-bold font-sans uppercase mb-10"
                style={{ color: row.titleColor }}
              >
                {row.title}
              </h2>
              {row.subtitle && (
                <p className="text-2xl mb-5 text-gray-700">{row.subtitle}</p>
              )}
              <p
                className="mt-2 font-light tracking-wide font-sans mb-10"
                style={{ color: row.textcolor }}
              >
                {row.text}
              </p>
              <Link
                to={row.url}
                className="mt-4 inline-block bg-black border-2 border-black text-white px-8 tracking-widest text-base lg:text-xl uppercase leading-none py-6 rounded hover:text-black hover:bg-transparent transition-all duration-200 ease-in-out"
              >
                Guarda la ricetta
              </Link>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 mb-40 lg:my-8"
            key={row.url}
          >
            <div
              className="flex flex-col items-center p-20 lg:px-44 lg:py-28 justify-center text-center"
              style={{ backgroundColor: row.bgColor }}
            >
              <h2
                className="text-4xl lg:text-7xl tracking-[1rem] leading-12 lg:leading-24 font-bold font-sans uppercase mb-10"
                style={{ color: row.titleColor }}
              >
                {row.title}
              </h2>
              {row.subtitle && (
                <p className="text-2xl mb-5 text-gray-700">{row.subtitle}</p>
              )}
              <p
                className="mt-2 font-light tracking-wide font-sans mb-10"
                style={{ color: row.textcolor }}
              >
                {row.text}
              </p>
              <Link
                to={row.url}
                className="mt-4 inline-block bg-black border-2 border-black text-white px-8 tracking-widest text-base lg:text-xl uppercase leading-none py-6 rounded hover:text-black hover:bg-transparent transition-all duration-200 ease-in-out"
              >
                Guarda la ricetta
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={row.imgs[0]}
                alt={row.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className="pt-36">
      <div className="container xl">
        {currentCategory.rows.map((row) => {
          if (row.imgs && row.imgs.length === 1) {
            const grid = renderGrid(row, oneImgCounter);
            oneImgCounter++;
            return grid;
          } else {
            return renderGrid(row, null);
          }
        })}
      </div>
    </div>
  );
};

export default Category;
