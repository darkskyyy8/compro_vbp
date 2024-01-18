import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoLogoInstagram, IoClose } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";

const Header = () => {
  const [ismenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!ismenuOpen);
  };

  return (
    <header
      className={`bg-[#5F3C90] px-16 sticky top-0 z-50 ${
        ismenuOpen ? "bg-white" : ""
      }`}
    >
      <div className="bg-[#5F3C90] py-2 px-16">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/icons/logo-header.svg"
              width={100}
              height={50}
              alt="logo-header"
            />
          </Link>
          <div className="hidden md:flex space-x-6 text-white font-poppins font-medium text-base ">
            <Link
              href="/"
              className=" transition duration-500 hover:text-[#D37643]"
            >
              Home
            </Link>
            <Link
              href="#about"
              className=" transition duration-500 hover:text-[#D37643]"
            >
              About Us
            </Link>
            <Link
              href="#a&l"
              className=" transition duration-500 hover:text-[#D37643]"
            >
              A&L
            </Link>
            <Link
              href="#allbalivillas"
              className=" transition duration-500 hover:text-[#D37643]"
            >
              All Bali Villas
            </Link>
            <Link
              href="#contact"
              className=" transition duration-500 hover:text-[#D37643]"
            >
              Contact Us
            </Link>
            <a className="cursor-auto">|</a>
            <div className="flex flex-row space-x-2 pt-1 ">
              <a href="https://www.instagram.com/diandiniputri/">
                <IoLogoInstagram size={20} className="hover:text-[#D37643]" />
              </a>
              <a href="https://wa.me/6281918118899">
                <MdOutlineWhatsapp size={20} className="hover:text-[#D37643]" />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {ismenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>
        {ismenuOpen && (
          <div className="md:hidden absolute top-20 right-4 bg-white w-48 p-2 space-y-2 text-end flex flex-col ">
            <a href="#home" className="text-black">
              Home
            </a>
            <a href="#about" className="text-black">
              About Us
            </a>
            <a href="#a&l" className="text-black">
              A&L
            </a>
            <a href="#allbalivillas" className="text-black">
              All Bali Villas
            </a>
            <a href="#contact" className="text-black">
              Contact Us
            </a>
            <div className="flex flex-row space-x-2 justify-center py-2">
              <a
                href="https://www.instagram.com/diandiniputri/"
                className="text-black pt-1"
              >
                <IoLogoInstagram size={20} />
              </a>
              <a href="https://wa.me/6281918118899" className="text-black pt-1">
                <MdOutlineWhatsapp size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
