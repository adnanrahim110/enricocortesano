import { homeimg1 } from "../assets";
import Menu from "../components/Menu";
import Card from "../components/utils/Card";

const categories = [
  {
    title: "Nationale Margarita Dag!",
    path: "/",
    img: homeimg1,
    text: "22 februari, dé dag waarop de hele wereld ongegeneerd margarita kan sippen. Een iconische cocktail met tequila, triple sec, limoensap en agave siroop.",
  },
  {
    title: "Nationale Margarita Dag!",
    path: "/",
    img: homeimg1,
    text: "22 februari, dé dag waarop de hele wereld ongegeneerd margarita kan sippen. Een iconische cocktail met tequila, triple sec, limoensap en agave siroop.",
  },
  {
    title: "Nationale Margarita Dag!",
    path: "/",
    img: homeimg1,
    text: "22 februari, dé dag waarop de hele wereld ongegeneerd margarita kan sippen. Een iconische cocktail met tequila, triple sec, limoensap en agave siroop.",
  },
];
const Categories = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container md">
        <div className="text-center py-40">
          <h1 className="mb-8 font-delaGothic text-8xl leading-28 text-primary-500">
            Categories
          </h1>
        </div>
      </div>
      <div className="container xl">
        <ul className="grid grid-cols-3 gap-y-8 gap-x-4 transition-all duration-300 ease-in">
          {categories.map((item, i) => (
            <li key={i}>
              <Card card={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
