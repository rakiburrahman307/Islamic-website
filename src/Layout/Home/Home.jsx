import TopScroll from "../TopScroll/TopScroll";
import ViewHadith from "./ViewHadith";
import BookShelf from "./bookShelf";

const Home = () => {
  return (
    <div className='bg-[#F2F4F6] w-full md:rounded-tl-3xl flex gap-5'>
      <BookShelf />
      <TopScroll/>
      <ViewHadith />
    </div>
  );
};

export default Home;
