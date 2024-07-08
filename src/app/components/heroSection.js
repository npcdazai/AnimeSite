/* eslint-disable react/no-unescaped-entities */
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const heroSection = ({title,Our_Story,ImageUrl}) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              {Our_Story}
            </p>
            <Link href="/manga">
            <button>Explore</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src={ImageUrl} alt="series_Image" width={1000} height={1000}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default heroSection;
