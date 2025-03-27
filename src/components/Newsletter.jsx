import React from "react";
import { Link } from "react-router-dom";
import { author_1, eye_bg } from "../assets";
import Button from "./utils/Button";

const Newsletter = () => {
  return (
    <div className="px-8 py-40 flex gap-4">
      <div className="border-[1rem] border-primary-200 w-[50%] rounded-4xl aspect-square max-h-[550px] relative bg-primary-200">
        <img
          src={author_1}
          className="object-cover object-center rounded-3xl absolute top-0 left-0 w-full h-full"
          alt=""
        />
      </div>
      <div className="max-2lg:p-12 bg-primary w-[50%] rounded-4xl aspect-square max-h-[550px] flex items-center justify-center p-20 relative">
        <img
          src={eye_bg}
          className="w-[50%] top-[50%] right-0 absolute z-[1] -translate-y-[50%] rotate-180 opacity-20"
          alt=""
        />
        <div className="w-[80%] z-[2] relative max-2lg:w-full">
          <h4 className="leading-none font-delaGothic text-8xl mb-16 text-primary-100 inline-block whitespace-nowrap">
            About Me
          </h4>
          <p className="text-primary-200">
            I am Italian, so like all Italians I had as a teacher, the best cook
            in the world my Mother, but I was even luckier, my Father cooked
            even better, but only when he had to compete with his brother
            Michele. At all the parties it was always the same story of how to
            make ragù or amatriciana etc.
          </p>
          <div>
            <form className="mt-16">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  className="p-4 font-telegraf"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="privacy"
                  className="flex items-center font-telegraf text-[1.4rem]"
                >
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    className="w-auto "
                  />
                  <div className="ml-4 text-primary-100">
                    <p>
                      I accept the{" "}
                      <Link
                        to={"/privacy-conditions"}
                        className="underline hover:text-primary-100 hover:no-underline"
                      >
                        privacy conditions
                      </Link>
                    </p>
                  </div>
                </label>
              </div>
              <div className="mt-8">
                <Button
                  type={"submit"}
                  className={"btn_submit hover:bg-primary-400"}
                  children={"send now"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
