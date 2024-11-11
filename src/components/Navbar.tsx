import Link from "next/link";


function Navbar() {
  return (
    <header className="bg-[#fff] fixed top-0 left-0 right-0 z-1000 flex items-center justify-around p-[1.7rem] h-[5rem] shadow-md">
      <h1 className="text-2xl text-[#0e2431] font-extrabold transition ease-in duration-400  hover:text-[#fc8c05] pl-8">AmjadCreations</h1>
      <ul className="flex justify-center items-center pr-2xl ">
        <li className="text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
          <Link href="/about">About</Link>
        </li>
        <li className="text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
          <Link href="/skills">Skills</Link>
        </li>
        <li className="text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
