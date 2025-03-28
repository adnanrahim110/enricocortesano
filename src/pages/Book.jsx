import { book } from "../assets";
import ContactForm from "../components/utils/ContactForm";

const Book = () => {
  return (
    <>
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
