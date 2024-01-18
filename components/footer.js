import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the current scroll position
      const scrollY = window.scrollY;

      // Determine whether the button should be visible or hidden
      if (scrollY > 100) {
        setIsVisible(true); // Hide the button when scrolled down
      } else {
        setIsVisible(false); // Show the button when at the top
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#5F3C90] px-[100px] pt-[40px] pr-80">
      <div className="flex md:flex-row flex-col justify-between items-start">
        <div className="bg-[#5F3C90]">
          <Image
            width={330}
            height={213}
            src="/images/footer_logo.svg"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col">
          <ul className="text-white">
            <p className="font-poppins-medium font-bold text-lg text-2x1 py-4">
              Contact Information
            </p>
            <li>
              <a
                href="https://www.google.com/maps/place/Jl.+Sunset+Road+No.28,+Seminyak,+Kec.+Kuta,+Kabupaten+Badung,+Bali+80361/@-8.6832268,115.164942,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd2473d2e301fd1:0x5b46ecff1366fbf8!8m2!3d-8.6832321!4d115.1675169!16s%2Fg%2F11fx2tpgb9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center text-md font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer"
              >
                Jl. Sunset Road No.28, Seminyak, Bali
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://wa.me/6281918118899"
                className="items-center text-md font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer"
              >
                +62 819-1811-8899
              </a>
            </li>
            <li className="pb-4">
              <a
                href="mailto:reservetion@villabaliparadise.com"
                className="items-center text-md font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer"
              >
                reservation@villabaliparadise.com
              </a>
            </li>
          </ul>
          <ul className="text-white ">
            <div className="max-md:hidden">
              <p className="font-poppins-medium font-bold text-lg text-3x1 py-4 md:flex-wrap ">
                Follow us
              </p>
              <div className="flex gap-2 pb-6 items-center">
                {/*section for icons*/}
                <Link href="https://www.instagram.com/diandiniputri/">
                  <Image width={25} height={25} src="/icons/instagram.svg" />
                </Link>
                <Link href="https://www.facebook.com/villabaliparadise">
                  <Image width={25} height={25} src="/icons/facebook.svg" />
                </Link>
                <Link href="https://www.tiktok.com/@villabaliparadise">
                  <Image width={25} height={25} src="/icons/tiktok.svg" />
                </Link>
                <Link href="https://www.youtube.com/@villabaliparadise">
                  <Image width={25} height={25} src="/icons/youtube.svg" />
                </Link>
                <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGb57mMrDqapwAAAYw_24AYfcC6XY1dnol6M3bPUaF04AsrOV92m90-jAsNnBlzG1ZyK-M1BVSn5bVchBHPW8CLlWub708_ALK3qSpa7L5hjZpfZLPBje86BOwvhXrD3eiOTf8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvilla-bali-paradise">
                  <Image width={25} height={25} src="/icons/lingked.svg" />
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex flex-col text-white ">
          <h1 className="font-poppins-medium font-bold text-xl text-2x1 py-4">
            Company and Support
          </h1>
          <a
            href="#about"
            className="font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer "
          >
            About Us
          </a>
          <a
            href="#a&l"
            className="font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer py-1"
          >
            Ambiance and Lifestyle
          </a>
          <a
            href="#allbalivillas"
            className="font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer"
          >
            All Bali Villas
          </a>
          <a
            href="#contact"
            className="font-poppins-regular text-base hover:text-[#DA8E63] cursor-pointer pt-1"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="md:hidden mt-6">
        <p className="text-white font-poppins-medium font-bold text-xl text-3x1 py-4">
          Follow us
        </p>
        <div className="flex gap-2 pb-6 items-center">
          {/*section for icons*/}
          <a href="https://www.instagram.com/diandiniputri/">
            <Image width={20} height={20} src="/icons/instagram.svg" />
          </a>
          <a href="https://www.facebook.com/villabaliparadise">
            <Image width={20} height={20} src="/icons/facebook.svg" />
          </a>
          <a href="https://www.tiktok.com/@villabaliparadise">
            <Image width={20} height={20} src="/icons/tiktok.svg" />
          </a>
          <a href="https://www.youtube.com/@villabaliparadise">
            <Image width={20} height={20} src="/icons/youtube.svg" />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGb57mMrDqapwAAAYw_24AYfcC6XY1dnol6M3bPUaF04AsrOV92m90-jAsNnBlzG1ZyK-M1BVSn5bVchBHPW8CLlWub708_ALK3qSpa7L5hjZpfZLPBje86BOwvhXrD3eiOTf8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvilla-bali-paradise">
            <Image width={20} height={20} src="/icons/lingked.svg" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start text-start mt-6 pb-8 ">
        <h1 className="text-white font-poppins-regular">
          © 2023 Villa Bali Paradise by {""}
          <span className="hover:text-[#DA8E63] font-poppins-regular text-base cursor-default ">
            PT Paradise Makmur Abadi
          </span>{" "}
        </h1>
      </div>
      <div>
        {isVisible && (
          <div className="w-10 h-10 flex bg-slate-600 cursor-pointer fixed bottom-5 right-0 scroll-smooth">
            <button
              onClick={scrollToTop}
              className="text-2xl text-white m-auto"
            >
              ^
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
