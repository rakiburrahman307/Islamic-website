import ViewHadith from "./ViewHadith";
import BookShelf from "./bookShelf";

const Home = () => {
  return (
    <div className='bg-[#F2F4F6] w-full md:rounded-tl-3xl flex gap-5 px-3 md:px-0'>
      <BookShelf />
      <ViewHadith />
    </div>
  );
};

export default Home;
