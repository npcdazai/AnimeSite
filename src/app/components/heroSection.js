/* eslint-disable react/no-unescaped-entities */
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ title, Our_Story, ImageUrl }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>{Our_Story}</p>
            <Link href="/manga">
              <button>Explore</button>
            </Link>
          </div>
          <div style={{height:"721px"}} className={heroStyles.hero_image}>
            <Image
              src={ImageUrl}
              alt="series_Image"
              width={1000}
              height={1000}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1720689333">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default HeroSection;
