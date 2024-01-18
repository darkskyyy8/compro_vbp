import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Footer from "../components/footer";

function About() {
  useEffect(() => {
    AOS.init();
  });

  const [checkedItems, setCheckedItems] = useState({
    growth: false,
    disorder: false,
    motorDevelopment: false,
    mentalHealth: false,
    cognitiveMaturity: false,
    careAndIntervention: false,
    parentAndEducatorDecisions: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [name]: !prevItems[name],
    }));
  };

  const canSubmit = Object.values(checkedItems).some((item) => item);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Please check at least one checkbox before submitting.");
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col gap-y-5 bg-no-repeat bg-about bg-cover w-full h-[250px] sm:h-[300px] lg:h-[500px] ">
        <div className=" text-7xl flex flex-col justify-center items-center">
          <h1 className="font-poppins text-6xl text-white mb-1"></h1>
        </div>
      </div>
      <div className="bg-white text-center px-12 md:px-[120px]">
        <h1
          className="text-2xl md:text-4xl text-[#D37643] font-inter font-bold pb-4 pt-[29px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Elevating Bali Experiences With Us
        </h1>
        <p
          className=" font-poppins text-base text-[#422925]  md:text-xl pt-2 pb-4 text-center font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Drawing upon a wealth of expertise, Villa Bali Paradise offers a range
          of villa options for travelers seeking to create lasting memories with
          their loved ones. Our showcased villas are meticulously chosen to
          uphold our stringent quality benchmarks.
        </p>
        <p
          className="font-poppins text-base text-[#422925]  md:text-xl pb-4 text-center font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          During your entire stay, our dedicated concierge team is committed to
          ensuring your optimal comfort and satisfaction. From seamless airport
          transfers to thoughtfully curated family-friendly activities, we
          orchestrate every detail. Furthermore, revel in complimentary services
          that add an extra layer of luxury, courteously provided by our team.
        </p>
        <p
          className="font-poppins text-base  text-[#422925]  md:text-xl text-center font-medium pb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Allow us to emphasize that our commitment extends beyond impeccable
          service; we`re equally dedicated to providing the best value. With our
          Best Price Guarantee, rest assured that our rates are unbeatable. If
          you chance upon a lower price elsewhere, kindly contact us prior to
          finalizing your payment. Your satisfaction is our priority.
        </p>
      </div>

      <div className="md:flex justify-center items-center max-w-full md:gap-4 md:pt-24 pt-6 px-10 md:px-24 ">
        <div
          className="  md:w-[485px] h-full "
          data-aos-duration="1000"
          data-aos="zoom-in"
        >
          <img
            src="/images/Ourstory.png"
            alt="Gambar"
            className="w-full md:h-[665px] "
          />
        </div>
        <div
          className=" bg-white h-full md:w-[700px]  py-[35px] px-[27px] lg:px-10 text-justify "
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <h2 className=" text-xl md:text-3xl font-bold font-poppins text-[#D37643] text-center ">
            Our Story
          </h2>
          <p className="text-base md:text-xl font-normal pt-10 font-poppins">
            Nestled in Bali, Villa Bali Paradise strives to provide our guests
            with an unforgettable and rejuvenating experience. Founded by{" "}
            <a
              href="https://www.instagram.com/diandiniputri/"
              className="text-[#D37643] underline"
            >
              Diandini Putri
            </a>
            , an experienced hotelier and traveler, with her passion for
            hospitality and her combined expertise, our company simplified the
            process of booking a private pool villa in Bali and made
            personalisation the highlight of our service.
          </p>
          <p className="text-base md:text-xl font-normal pt-10 font-poppins">
            Diandini Putri`s hospitality journey began with a Hospitality degree
            in Switzerland and a Master`s in International Hotel Management in
            Paris. She acquired enriched experience cultivated through
            leadership roles in prestigious hotels worldwide. Under her
            guidance, Villa Bali Paradise is dedicated to providing an
            exceptional service while catering to the distinct needs of each
            guest.
          </p>
          <p className="text-base md:text-xl font-normal pt-8 font-poppins">
            Our trusted team ensures a remarkable stay, enabling guests to fully
            savor their time in Bali.
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center md:gap-[19px] md:pt-24 pt-6 px-10 md:px-24">
        <div className="w-542 h-auto md:hidden block">
          <img
            className="w-full h-full "
            src="/images/Ourvision.png"
            alt="Gambar"
          />
        </div>
        <div
          className="bg-white md:w-[660px] md:h-[400px] pt-6 text-[#422925] "
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <h1 className="text-xl md:text-3xl text-[#D37643] font-bold pb-4 text-center">
            Our Vision
          </h1>
          <p className="text-base md:text-xl font-normal font-poppins text-justify px-[28px] ">
            We are steadfast in our commitment to enhancing travel by offering
            access to an expansive array of private pool villas in Bali, coupled
            with unparalleled service.{" "}
          </p>
          <p className="text-base md:text-xl font-normal font-poppins text-justify px-[28px] pb-[24px]">
            Aspiring to be the foremost choice for travelers in search of
            seamless and delightful villa experiences, we aim to set new
            standards, inspiring wanderlust and enriching lives one remarkable
            experience at a time
          </p>
        </div>
        <div className="w-auto h-[426px] md:block hidden">
          <Image
            data-aos-duration="1000"
            data-aos="zoom-in"
            src="/images/Ourvision.png"
            alt="Gambar"
            width={542}
            height={430}
          />
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center gap-[19px] md:pt-24 pt-6 px-10 md:px-24 ">
        <Image
          data-aos-duration="1000"
          data-aos="zoom-in"
          src="/images/Ourmission.png"
          alt="Gambar"
          width={542}
          height={461}
        />
        <div
          className="px-[25px] pt-6 bg-white text-[#422925] w-full h-full md:w-[660px] md:h-[400px]"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <h1 className="text-xl md:text-3xl text-[#D37643] font-bold font-poppins pb-4 text-center">
            Our Mission
          </h1>
          <p className="text-base md:text-xl font-normal font-poppins text-justify">
            At Villa Bali Paradise, we are dedicated to curating unforgettable
            travel experiences for our guests. Through our meticulously selected
            collection of private pool villas in Bali and our unwavering
            commitment to exceptional service, we strive to create a realm of
            rejuvenation and exploration.
          </p>
          <p className="text-base md:text-xl font-normal font-poppins text-justify">
            Our mission is to be the bridge that connects wanderers with their
            dream getaways, where every moment is cherished, and every stay is a
            masterpiece.
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center pb-10">
        <div className="h-full md:w-[1160px] md:h-[717px] bg-white mt-10 md:mt-[91px] mx-10 md:mx-24 pt-6">
          <h1
            className="text-xl md:text-3xl text-[#D37643] font-bold font-poppins text-center px-16"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Our Values
          </h1>
          <div className="md:flex justify-around px-8 pt-4">
            <div
              className="md:pl-12 md:pr-[65px] text-center flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/Trues.svg"
                alt="Gambar"
                width={75}
                height={75}
              />
              <h1 className="text-center text-xl font-medium text-[#323232] font-poppins pt-2">
                Trust
              </h1>
              <p className="text-justify text-base md:text-xl font-light text-[#686868] font-poppins pt-2">
                Operating with honesty and transparency in all aspects of our
                business, from villa selection to pricing and communication.
              </p>
            </div>
            <div
              className="md:pl-20 md:pr-20  text-center flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/Expertise.svg"
                alt="Gambar"
                width={75}
                height={75}
              />
              <h1 className="text-center text-xl font-medium text-[#323232] font-poppins pt-2">
                Expertise
              </h1>
              <p className="text-justify text-base md:text-xl font-light text-[#686868] font-poppins pt-2">
                Leveraging our experience and expertise in the hospitality
                industry to ensure a seamless and enjoyable experience for our
                guests.
              </p>
            </div>
            <div
              className="md:pl-[65px] md:pr-12 text-center flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/Personalization.png"
                alt="Gambar"
                width={75}
                height={75}
              />
              <h1 className="text-center text-xl font-medium text-[#323232] font-poppins pt-2">
                Personalization
              </h1>
              <p className="text-justify text-base md:text-xl font-light text-[#686868] font-poppins pt-2">
                Tailoring our services to meet the unique preferences and needs
                of each guest is at the core of what we do.
              </p>
            </div>
          </div>
          <div className=" md:flex justify-around my-10 pb-4 pt-2 gap-6 px-8 md:px-52 text-center">
            <div
              className="text-center md:pr-10 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/Giving.png"
                alt="Gambar"
                width={75}
                height={75}
              />
              <h1 className="text-center text-xl font-medium text-[#323232] font-poppins pt-2">
                Giving Back to the Community
              </h1>
              <p className="text-justify text-base md:text-xl text-[#686868] font-light font-poppins pt-2">
                Operating with honesty and transparency in all aspects of our
                business, from villa selection to pricing and communication.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center md:pl-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/Inovation.png"
                alt="Gambar"
                width={75}
                height={75}
              />
              <h1 className="text-center text-xl font-medium text-[#323232] font-poppins pt-2">
                Innovation
              </h1>
              <p className="text-justify text-base md:text-xl font-light text-[#686868] font-poppins pt-2">
                Leveraging our experience and expertise in the hospitality
                industry to ensure a seamless and enjoyable experience for our
                guests.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
