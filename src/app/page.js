import HeroSection from "./components/heroSection";
import Manga from "./manga/page"
const Page = () => {
  return (
    <div>
      <HeroSection
        title={"Read Manga Here"}
        Our_Story={`Full-featured reader. Discover and read manga, webtoons, comics, and more – easier than ever on your device`}
         ImageUrl={"/discussion.png"}     
      />
      <Manga/>
    </div>
  );
};

export default Page;
