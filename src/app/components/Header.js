import style from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"

const header = () => {
  return (
    <header>

        <div className="bg-[#2d2b44] shadow-md shadow-black p-2 flex justify-between items-center">
            <div className="flex space-x-6">
              <Link href="/">
              <Image src="/logo.png" alt="" width={150} height={35}/>
              </Link>
            </div>
            <Nav/>
        </div>
    </header>
  )
}

export default header