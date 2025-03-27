import { book } from "../assets";
import Menu from "../components/Menu";
import ContactForm from "../components/utils/ContactForm";

const Book = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container lg">
        <div className="flex justify-between items-center pt-40 pb-20">
          <div className="w-4/12">
            <img src={book} alt="" />
          </div>
          <div className="w-6/12 bg-primary"></div>
        </div>
        <ContactForm flexDir={"flex-row"} isOrange={false} />
      </div>
    </>
  );
};

export default Book;
