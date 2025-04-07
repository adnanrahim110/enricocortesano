import React from "react";
import { someImgs_h1 } from "../../assets";
import Button from "./Button";

const ContactForm = ({ flexDir, isOrange = true }) => {
  const color = isOrange ? "" : "light_one";

  return (
    <div
      className={`flex flex-col ${
        flexDir || "lg:flex-row-reverse"
      } gap-8 mb-40`}
    >
      <div
        className={`w-full lg:w-1/2 rounded-2xl ${
          isOrange ? "bg-primary" : "bg-primary-100"
        } p-3`}
      >
        <img src={someImgs_h1} className="h-full w-full rounded-xl" alt="" />
      </div>
      <div
        className={`w-full lg:w-1/2 rounded-2xl ${
          isOrange ? "bg-primary" : "bg-primary-100"
        } p-8`}
      >
        <div className="w-full">
          <form className={color}>
            <div>
              <div className="grid gap-x-[2%] gap-y-[16px] grid-cols-12 w-full">
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label
                    htmlFor="name"
                    className="block mb-[0.5rem] font-delaGothic text-[1.6rem] font-normal"
                  >
                    Name{" "}
                    <span
                      className={`${
                        isOrange ? "text-primary-200" : "text-red-500"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <div>
                    <input type="text" name="name" id="name" />
                  </div>
                </div>
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label
                    htmlFor="email"
                    className="block mb-[0.5rem] font-delaGothic text-[1.6rem] font-normal"
                  >
                    Email Address{" "}
                    <span
                      className={`${
                        isOrange ? "text-primary-200" : "text-red-500"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <div>
                    <input type="email" name="email" id="email" />
                  </div>
                </div>
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label
                    htmlFor="name"
                    className="block mb-[0.5rem] font-delaGothic text-[1.6rem] font-normal"
                  >
                    Message{" "}
                    <span
                      className={`${
                        isOrange ? "text-primary-200" : "text-red-500"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <div>
                    <textarea
                      maxLength={600}
                      rows={10}
                      cols={50}
                      name="name"
                      id="name"
                      className="h-[192px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[6px] py-[16px] flex">
              <Button
                children={"Send Now"}
                className={`btn_submit ${
                  isOrange
                    ? "bg-primary-100 hover:bg-primary-400"
                    : "bg-primary-400 border-primary-400 text-primary-50 hover:bg-primary-300 hover:text-primary hover:border-primary"
                } w-full rounded-none border-2 border-primary-200`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
