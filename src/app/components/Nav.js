import Link from "next/link";
// className="bg-pink-500 text-white px-2 py-1 rounded-md"
const Nav = () => {
  return (
    <div>
      <nav className="relative p-6 text-white px-2 py-1 rounded-xl">
        <div className="text-white ">
          <ul className="flex justify-around align-middle gap-12 flex-col ">
            <li className="h-fit grid place-items-center rounded-2xl hover:text-black p-2 ">
              <Link href="/">Home</Link>
            </li>
            <li className="h-fit grid place-items-center rounded-2xl hover:text-black p-2">
              <Link href="/about">About</Link>
            </li>
            <li className="h-fit grid place-items-center rounded-2xl hover:text-black p-2">
              <Link href="/manga">Manga</Link>
            </li>
            <li className="h-fit grid place-items-center rounded-2xl hover:text-black p-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
