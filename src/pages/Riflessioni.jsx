import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { author_4, categories_riflessioni_2 } from "../assets";
import { riflessioniContent } from "../constants";

const Riflessioni = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const topRef = useRef(null);

  const toggleExpand = (idx) => {
    if (expandedItems[idx]) {
      setExpandedItems((prev) => ({ ...prev, [idx]: false }));
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setExpandedItems((prev) => ({ ...prev, [idx]: true }));
    }
  };

  return (
    <div className="pt-40">
      <div className="container xl">
        <div className="aspect-video w-full relative max-h-[600px] flex items-center justify-center flex-col text-center">
          <img
            src={author_4}
            className="absolute w-full h-full object-cover object-center z-0"
            alt=""
          />
          <h1 className="relative z-[1] max-w-[300px] md:max-w-[400px] text-white [text-shadow:0_4px_5px_rgba(0,0,0,0.5)] text-7xl font-serif italic leading-32">
            Riflessioni di un Italiano negli Stati Uniti
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-40">
          <div className="flex flex-col items-center justify-center">
            <img
              src={categories_riflessioni_2}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start p-16 justify-center bg-[#DEB940]">
            <h2 className="text-9xl text-white tracking-[.5rem] leading-24 font-black font-sans uppercase mb-10">
              PREMESSA
            </h2>
            <p className="mt-2 font-light tracking-wide font-sans mb-5 text-black text-2xl">
              Come già ho detto non sono un cuoco, ma amo mangiar bene e godere
              di tutti i piaceri della vita. Quello che cerco di fare con questa
              mia pagina e videi è non tanto di dare le ricette ma di come
              realizzarle nel modo migliore, con gli strumenti ed utensili per
              aiutarsi al meglio per avere dei risultati soddisfacenti, cosa che
              molte volte nelle ricette in internet non si trova.
            </p>
            <p className="mt-2 font-light tracking-wide font-sans mb-5 text-black text-2xl">
              Ho viaggiato molto e ho mangiato nei migliori ristoranti del
              mondo, quindi mi è facile distinguere una buona cucina da
              un'altra, come è fatto un piatto ben cucinato da imitazioni
              mediocri, per questo mi piace cucinare per riprodurre quei sapori
              di una volta con dei precisi canoni da rispettare, odio chi dice
              di una ricetta classica, questa è fatta modo mio, il più delle
              volte è la scusa per nascondere il fatto di non saperla fare.
            </p>
            <p className="mt-2 font-light tracking-wide font-sans mb-5 text-black text-2xl">
              La cucina mediterranea è principalmente fatta da ingredienti di
              alta qualità naturali semplici saporiti, meno ingredienti ci sono
              in una ricetta più è buona, perché lascia assaporare gli
              ingredienti e non coprire il sapore.
            </p>
            <Link
              to={""}
              className="mt-4 inline-block bg-black border-2 border-black text-white px-8 tracking-widest text-xl uppercase leading-none py-6 rounded hover:text-black hover:bg-transparent transition-all duration-200 ease-in-out"
            >
              Guarda la ricetta
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {riflessioniContent.map((item, idx) => (
            <div className="w-full h-full" key={idx} ref={topRef}>
              <div
                className={`w-full bg-gray-50 border border-gray-300 flex flex-col justify-between ${
                  expandedItems[idx] ? "h-full" : "h-[640px]"
                }`}
              >
                <img
                  src={item.img}
                  className="aspect-square"
                  alt={item.title}
                />
                <div className="pt-5">
                  <h3 className="text-4xl mb-5 px-5">{item.title}</h3>
                  {expandedItems[idx] ? (
                    item.text.map((paragraph, i) => (
                      <p key={i} className="font-serif text-black mb-5 px-5">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="font-serif text-black not-last:mb-10 line-clamp-6 px-5">
                      {Array.isArray(item.text)
                        ? item.text.join(" ")
                        : item.text}
                    </p>
                  )}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className={`w-full bg-gray-200 py-3 font-sans font-medium ${
                      expandedItems[idx]
                        ? "text-right justify-end"
                        : "text-left justify-start"
                    } text-xl px-5 flex items-center leading-none uppercase gap-2 group`}
                  >
                    {expandedItems[idx] ? (
                      <>
                        {" "}
                        <FaAngleLeft className="text-xl leading-none group-hover:ml-3 transition-all duration-200 ease-linear" />
                        <span className="underline decoration-transparent group-hover:decoration-primary transition-all duration-200 ease-linear underline-offset-2">
                          read less
                        </span>{" "}
                      </>
                    ) : (
                      <>
                        <span className="underline decoration-transparent group-hover:decoration-primary transition-all duration-200 ease-linear underline-offset-2">
                          read more
                        </span>{" "}
                        <FaAngleRight className="text-xl leading-none group-hover:ml-3 transition-all duration-200 ease-linear" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Riflessioni;
