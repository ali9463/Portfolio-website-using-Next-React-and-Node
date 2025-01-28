"use client";  // This tells Next.js that this file is a client component
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" rounded-full  backdrop-blur-sm sticky top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#0000FF] text-3xl font-bold">
            <h2>Ali's Portfolio</h2>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-[#0000FF] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link href="/" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/#about" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="px-4 py-2 text-[#0000FF] font-bold hover:text-[#FFA500] transition-colors">
              EDUCATION
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-1/2 h-[70%] transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col items-center justify-center my-5 rounded-3xl bg-gray-100 space-y-6">
          <li>
            <Link href="/" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-[#0000FF] font-bold text-lg hover:text-[#FFA500] transition-colors">
              EDUCATION
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
