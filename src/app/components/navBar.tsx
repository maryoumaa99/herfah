"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSolidCategory, BiSolidOffer } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { cats } from "@/app/data/cats";
import { FaArrowAltCircleRight, FaQuestion, FaUserAlt } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isSubOpen, setIsSubOpen] = useState(false); // mobile sub-menu
  

  



  return (
    <nav className={`flex justify-end md:justify-center w-full z-50   `}>
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-[var(--text)] items-center">
          <li className="group relative">
            <Link href="#about" className="hover:text-[var(--accent)] transition-colors duration-300">
              عن حرفة
            </Link>
          </li>
          <li className="group relative">
            <Link href="#gallery" className="hover:text-[var(--accent)] transition-colors duration-300">
              معرضنا
            </Link>
          </li>
          {/* Dropdown */}
          <li className="group relative">
            <Link href="#cats" className="cursor-pointer hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-1">
              الاقسام
            </Link>
            <ul className="absolute top-full right-0 left-1/2 -translate-x-1/2 mt-5 bg-[var(--background)] shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 w-48">
              {cats.map((cat, i) => (
                <li key={i} className="px-4 py-2 hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors duration-200 cursor-pointer">
                  {cat.catName}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="#offers" className="hover:text-[var(--accent)] transition-colors duration-300">
              العروض
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[var(--text)]"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSubOpen(false);
          }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-[var(--text)] text-[var(--background)] p-10 pt-[6vh] flex flex-col gap-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {!isSubOpen ? (
          <>
            <button className="self-end text-3xl" onClick={() => setIsOpen(false)}>
              <HiX />
            </button>
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2">
              <FaQuestion /> عن حرفة
            </Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2">
              <RiGalleryFill /> معرضنا
            </Link>
            <span
              className="cursor-pointer hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2"
              onClick={() => setIsSubOpen(true)}
            >
              <BiSolidCategory /> الاقسام
            </span>
            <Link href="#offers" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2">
              <BiSolidOffer /> العروض
            </Link>
            <Link href="#register" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2">
              <FaUserAlt /> سجل معنا
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <button onClick={() => setIsSubOpen(false)} className="self-end text-[var(--background)]  rounded-md">
             <FaArrowAltCircleRight />
            </button>
            {cats.map((cat, i) => (
              <span key={i} className="cursor-pointer hover:text-[var(--accent)] transition-colors flex flex-row-reverse items-center gap-2">
                {cat.catName}
              </span>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
