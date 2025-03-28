import { Link } from "react-router-dom";
import { categoriesList } from "../constants";

const Categories = () => {
  return (
    <>
      <div className="container md">
        <div className="text-center py-40">
          <h1 className="mb-8 font-delaGothic text-8xl leading-28 text-primary-500">
            Categories
          </h1>
        </div>
      </div>
      <div className="container xl">
        <ul className="grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-10 transition-all duration-300 ease-in">
          {categoriesList.map((item, i) => (
            <li key={i}>
              <Link
                to={item.url}
                className={`block rounded-lg transition-all duration-300 ease-[ease] bg-gray-50 border border-gray-300 group`}
              >
                <div
                  className={`rounded-t-lg overflow-hidden relative w-full h-full aspect-square`}
                >
                  <img
                    src={item.img}
                    className="transition-all duration-300 ease-[ease] group-hover:scale-110 object-cover object-center top-0 left-0 w-full h-full"
                    alt=""
                  />
                  <div className="absolute inline-flex items-center justify-center top-0 left-0 w-full h-full text-white bg-black/40 pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <svg
                      className="w-[46px] md:w-[66px] h-auto transform -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{
                        transition:
                          "opacity 0.3s ease-in-out, transform 0.6s cubic-bezier(0.3,1,0.3,1)",
                      }}
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="currentColor"
                      fill="none"
                    >
                      <path
                        d="M20.0001 11.9998L4.00012 11.9998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="py-6 px-4 bg-gray-200">
                  <h4
                    className={`text-[3.5rem] leading-[2.8rem] text-center m-0 font-resonay-base font-black text-black underline decoration-transparent group-hover:decoration-black underline-offset-4 transition-all duration-300 ease-linear`}
                  >
                    {item.title}
                  </h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
