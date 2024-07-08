import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <nav className="relative p-4">
        <div className="text-white">
          <ul className="flex justify-around align-middle gap-12">
            <li className="h-fit grid place-items-center">
              <Link href="/">Home</Link>
            </li>
            <li className="h-fit grid place-items-center">
              <Link href="/about">About</Link>
            </li>
            <li className="h-fit grid place-items-center">
              <Link href="/manga">Manga</Link>
            </li>
            <li className="h-fit grid place-items-center">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
