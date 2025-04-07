import { book } from "../assets";
import ContactForm from "../components/utils/ContactForm";

const Book = () => {
  return (
    <>
      <div className="container lg">
        <div className="flex flex-col lg:flex-row justify-between items-center pt-40 pb-20">
          <div className="w-full lg:w-4/12">
            <img src={book} alt="" />
          </div>
          <div className="w-full lg:w-8/12 bg-primary p-20 rounded-xl">
            <h2 className="text-7xl font-delaGothic mb-12 text-white">
              About the Book
            </h2>
            <div>
              <p className="font-light font-telegraf text-primary-200 my-10">
                <strong className="font-black text-primary-100">
                  A Mystery Hidden in the Flames
                </strong>{" "}
                Beneath the streets of Naples lies a secret older than the city
                itself—an oven said to hold the key to the perfect recipe. When
                Peppeniello receives a cryptic letter from his grandfather, he
                is pulled back to the alleys of his childhood, only to discover
                that some secrets refuse to stay buried. But he’s not the only
                one searching… and some will stop at nothing to keep the truth
                hidden. It’s more than just an oven—it’s a legacy. A recipe so
                powerful, so perfect, it has been hidden for centuries. Some say
                it’s the secret behind the very first pizza. Others whisper that
                it holds something more. But to uncover it, Peppeniello must
                follow a trail of riddles, tunnels, and forgotten truths buried
                beneath the bustling streets of Naples.
              </p>
            </div>
          </div>
        </div>
        <ContactForm flexDir={"lg:flex-row"} isOrange={false} />
      </div>
    </>
  );
};

export default Book;
