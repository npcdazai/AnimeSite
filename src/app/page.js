import HeroSection from "./components/heroSection";
import Manga from "./manga/page"
import ContactUs from "./contact/page";
const Page = () => {
  return (
    <div>
      <HeroSection
        title={"Watch & Read Manga Here"}
        Our_Story={`Full-featured reader. Discover and read manga, webtoons, comics, and more – easier than ever on your device`}
         ImageUrl={"/discussion.png"}     
      />
      <Manga/>
      <div className="mt-11 ">
      <ContactUs/>
      </div>
    </div>
  );
};

export default Page;
