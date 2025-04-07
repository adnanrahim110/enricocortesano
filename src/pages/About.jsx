import React from "react";
import { author_2 } from "../assets";
import ContactForm from "../components/utils/ContactForm";

const About = () => {
  return (
    <>
      <div className="container xl">
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-40 items-center mb-40 pt-40">
          <div className="w-full lg:w-1/2">
            <h2 className="text-7xl font-delaGothic mb-12">
              How I developed a passion for cooking
            </h2>
            <div>
              <p className="font-light font-telegraf text-gray-700 my-10">
                I am Italian, so like all Italians I had as a teacher, the best
                cook in the world my Mother, but I was even luckier, my Father
                cooked even better, but only when he had to compete with his
                brother Michele. At all the parties it was always the same story
                of how to make ragù or amatriciana etc.
              </p>
              <p className="font-light font-telegraf text-gray-700">
                Then in recent years I wanted to delve deeper by researching
                ancient texts and studying old recipes in order to find the
                perfect and original harmony of each recipe, logically being
                Neapolitan I am influenced by my origins, but I do not disdain
                other regions and honestly our Italian cuisine is fabulous
                varied and difficult to reproduce abroad, because in my case I
                live in the United States, so certain products are difficult to
                find if not impossible, then I organized myself in a way to
                import many products directly from Italy, the problem is only
                the vegetables, because here they are of lower quality, but for
                this I remedied in part with my garden, while for fish and
                seafood it is very difficult.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-square">
            <img
              src={author_2}
              className="object-cover object-center absolute top-0 left-0 h-full w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default About;
