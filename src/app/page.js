import HeroSection from "./components/heroSection";
const Page = () => {
  return (
    <div>
      <HeroSection
        title={"Read Manga Here"}
        Our_Story={`Full-featured reader. Discover and read manga, webtoons, comics, and more – easier than ever on your device`}
         ImageUrl={"/discussion.png"}     
      />
    </div>
  );
};

export default Page;
