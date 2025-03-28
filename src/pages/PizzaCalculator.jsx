import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { calculator, calculatorBg, flour, salt, water, yeast } from "../assets";
import Button from "../components/utils/Button";
import FadeInView from "../components/utils/FadeInView";

const pizzaRatios = {
  Napoletana: { salt: 3, yeast: 0.2, oil: 0, sugar: 0 },
  Siciliana: { salt: 2, yeast: 1.5, oil: 1.5, sugar: 0 },
  Americana: { salt: 1.5, yeast: 0.4, oil: 2.5, sugar: 2 },
  Canotto: { salt: 3, yeast: 0.4, oil: 0, sugar: 0 },
};

const defaultValues = {
  Napoletana: { weight: 230, quantity: 65 },
  Siciliana: { weight: 650, quantity: 75 },
  Canotto: { weight: 240, quantity: 70 },
  Americana: { weight: 240, quantity: 65 },
};

const convertToDryYeast = (freshYeast) => (freshYeast / 3.29).toFixed(2);

const PizzaCalculator = () => {
  const [calForm, setCalForm] = useState({
    pizzaType: "Napoletana",
    noOfPizza: 1,
    ...defaultValues["Napoletana"],
  });

  const [results, setResults] = useState({});
  const [isCalculated, setIsCalculated] = useState(false);

  const updateField = (field, value) => {
    setCalForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleIncrement = (field, step = 1) =>
    updateField(field, calForm[field] + step);

  const handleDecrement = (field, minValue = 1, step = 1) =>
    updateField(field, Math.max(calForm[field] - step, minValue));

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "pizzaType"
      ? setCalForm({ pizzaType: value, ...defaultValues[value] })
      : updateField(name, parseFloat(value) || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pizzaType, noOfPizza, weight, quantity } = calForm;
    const { salt, yeast, oil, sugar } = pizzaRatios[pizzaType];

    const totalDoughWeight = weight * noOfPizza;
    const totalFlour =
      (totalDoughWeight * 100) / (100 + quantity + salt + yeast + oil + sugar);

    setResults({
      flour: totalFlour.toFixed(2),
      water: ((totalFlour * quantity) / 100).toFixed(2),
      salt: ((totalFlour * salt) / 100).toFixed(2),
      freshYeast: ((totalFlour * yeast) / 100).toFixed(2),
      dryYeast: convertToDryYeast((totalFlour * yeast) / 100),
      oil: ((totalFlour * oil) / 100).toFixed(2),
      sugar: ((totalFlour * sugar) / 100).toFixed(2),
    });

    setIsCalculated(true);
  };

  const renderInput = (name, minValue = 1, step = 1) => (
    <div className="relative group">
      <input
        type="tel"
        name={name}
        value={calForm[name]}
        onChange={handleChange}
        className="appearance-none"
      />
      <button
        type="button"
        onClick={() => handleIncrement(name, step)}
        className="hidden group-hover:block absolute top-2 right-5 cursor-pointer text-primary-500 hover:text-primary-600"
      >
        <FaAngleUp className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => handleDecrement(name, minValue, step)}
        className="hidden group-hover:block absolute bottom-2 right-5 cursor-pointer text-primary-500 hover:text-primary-600"
      >
        <FaAngleDown className="h-6 w-6" />
      </button>
    </div>
  );

  return (
    <>
      <div className="pt-40 mb-32 text-center">
        <h1 className="text-8xl leading-28 font-delaGothic text-primary-500 mb-8">
          Pizza Calculator
        </h1>
        <p className="mx-auto max-w-[65rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam.
          Culpa ab sunt dolore magnam repudiandae, provident corrupti debitis!
          A!
        </p>
      </div>
      <div className="container xl">
        <div className="flex gap-16">
          <div className="w-[50%] rounded-2xl bg-primary px-8 py-6">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-x-[2%] gap-y-[10px] grid-cols-12 w-full">
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label
                    htmlFor="pizzaType"
                    className="block mb-[0.5rem] font-delaGothic text-[1.6rem]"
                  >
                    Type of Pizza
                  </label>
                  <div className="relative group">
                    <select
                      name="pizzaType"
                      id="pizzaType"
                      value={calForm.pizzaType}
                      onChange={handleChange}
                      className="appearance-none"
                    >
                      {Object.keys(defaultValues).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <FaAngleDown className="h-8 w-8 absolute top-1/2 -translate-y-1/2 right-5 text-primary-500 transform group-focus-within:rotate-180" />
                  </div>
                </div>
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label className="block mb-[0.5rem] font-delaGothic text-[1.6rem]">
                    Number of Pizzas *
                  </label>
                  {renderInput("noOfPizza", 1)}
                </div>
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label className="block mb-[0.5rem] font-delaGothic text-[1.6rem]">
                    Weight of the loaf *
                  </label>
                  {renderInput("weight", 50, 10)}
                </div>
                <div className="col-start-1 -col-end-1 min-w-0">
                  <label className="block mb-[0.5rem] font-delaGothic text-[1.6rem]">
                    Water quantity % *
                  </label>
                  {renderInput("quantity", 55, 1)}
                </div>
              </div>
              <div className="flex mt-[6px] py-[16px]">
                <Button
                  children={"Calculate This"}
                  className={
                    "w-full btn_submit rounded-none bg-primary-200 hover:bg-primary-400 border-2 border-primary-300 hover:border-primary-200"
                  }
                />
              </div>
            </form>
          </div>
          <div className="w-[50%] rounded-2xl bg-primary relative p-8 overflow-hidden">
            <img
              src={calculatorBg}
              className="absolute w-full h-full object-cover top-0 left-0 opacity-10 mix-blend-multiply"
              alt=""
            />
            <div className="w-full h-full flex items-center justify-center relative z-[2]">
              {isCalculated ? (
                <FadeInView className="grid gap-x-[2%] grid-rows-4 gap-y-[10px] grid-cols-12 w-full h-full font-delaGothic">
                  {[
                    {
                      title: "Flour :",
                      result: results.flour,
                      icon: flour,
                      unit: "g",
                    },
                    {
                      title: "Water :",
                      result: results.water,
                      icon: water,
                      unit: "ml",
                    },
                    {
                      title: "Salt :",
                      result: results.salt,
                      icon: salt,
                      unit: "g",
                    },
                    {
                      title: "Fresh Yeast :",
                      result: results.freshYeast,
                      icon: yeast,
                      unit: "g",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="col-start-1 row-span-1 w-full h-full -col-end-1 min-w-0 bg-primary-400/60 shadow-md shadow-primary-500/30 pl-7 pr-10 py-6 text-4xl text-primary-100 rounded-2xl flex items-center justify-between"
                    >
                      <div className="text-primary-200 flex items-center gap-3">
                        <img src={item.icon} className="w-14" alt="" />
                        <span>{item.title}</span>
                      </div>
                      <span>
                        {item.result}{" "}
                        <span className="text-primary-200 font-normal font-telegraf">
                          {item.unit}
                        </span>
                      </span>
                    </div>
                  ))}
                </FadeInView>
              ) : (
                <div className="grid gap-x-[2%] grid-rows-5 gap-y-[10px] grid-cols-12 w-full h-full">
                  <div
                    className="col-span-12 row-span-5 -m-8 w-[calc(100%_+_40px)] h-[calc(100%_+_40px)] bg-center rounded-2xl bg-cover bg-no-repeat border"
                    style={{ backgroundImage: `url(${calculator})` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCalculator;
