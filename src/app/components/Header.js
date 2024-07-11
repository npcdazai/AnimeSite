import Image from 'next/image';
import Link from 'next/link';
// import Nav from './Nav';
const Header = () => {
    return (
        <div style={{backgroundColor:"rgb(45 43 68 / 89%"}} className="shadow-md shadow-black z-10 top-0 fixed w-full p-4 h-28 flex justify-between items-center">
            <div className="flex items-center space-x-6 ml-2">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={150} height={30} />
                </Link>
                <input
                    type="text"
                    placeholder="Search anime..."
                    className="p-2 h-16 w-60 rounded-md bg-white text-black"
                />
                <button className="bg-black text-white p-2 w-24 rounded-lg">Filter</button>
                
            </div>
            <div>
              {/* <Nav/> */}
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/watch2gether" className="text-white">Watch2gether</Link>
                <Link href="/random" className="text-white">Random</Link>
                <div className="flex space-x-2">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded-md">EN</span>
                    <span className="bg-gray-500 text-white px-2 py-1 rounded-md">JP</span>
                </div>
                <Link href="/community" className="text-white">Community</Link>
                <Link href="/login">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
