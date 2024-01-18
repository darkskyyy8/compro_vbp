import React, { Profiler, useEffect, useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import VideoGallery from "../components/video";
import Link from "next/link";
import axios from "axios";

const Compro = () => {
  const [profilweb,setProfileWeb] = useState();
  const [locations, setLocations] = useState();
  const [lokasiid, setLokasiid] = useState();
  const [videos, setVideos] = useState();
  const [postpesan, setPostPesan] = useState({
    nama: '',
    email: '',
    no_hp: '',
    pesan: '',
  });
  const [pesanTerkirim, setPesanTerkirim] = useState(false);

  const pesan = async () => {
    try {
      const response = await axios.post("https://vbp-com.preview-domain.com/public/api/pesan", postpesan);
      console.log('Respon dari server:', response.data);
      if (response.status === 200) {
        console.log(response.data);
        // Opsional: perbarui state jika diperlukan setelah permintaan berhasil
        setPesanTerkirim(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendClick = () => {
    console.log('Tombol Kirim diklik');
    pesan();
  };
  const handleClosePopup = () => {
    setPesanTerkirim(false);
    // Reset form setelah menutup pop-up jika diperlukan
    setPostPesan({
      nama: '',
      email: '',
      no_hp: '',
      pesan: '',
    });
  };
  
  const getprofileweb =async () => {
    try {
      const response = await axios.get("https://vbp-com.preview-domain.com/public/api/profilweb")
      if (response.status == 200 ) {
        console.log(response.data)
        setProfileWeb ({
          "judul": response.data[0].judul,
          "sub_judul": response.data[0].sub_judul,
        })
      }
    } catch{

    } 
  }

  const gallery = async (id) => {
    try {
      const response = await axios.get(
        `https://vbp-com.preview-domain.com/public/api/locations/${id}`
      );
      console.log("Api Response:", response.data);
      setVideos(response.data.location.galleries);
    } catch (error) {
      console.error("error fatcing data:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get("https://vbp-com.preview-domain.com/public/api/locations")
      if (response.status == 200){
        console.log(response.data)
        const locationsData = response.data.locations;
  
        setLocations(locationsData);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "slide-1.png",
    "slide-2.png",
    "slide-3.png",
    "slide-4.png",
    "slide-5.png",
  ];

  useEffect(() => {
    getprofileweb()
    fetchLocations()
    pesan()
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  return (
    <>
      <Header />
      {/* banner*/}
      <div
        id="home"
        className="h-screen bg-cover bg-center relative transition duration-2000 ease-in-out transform "
        style={{
          backgroundImage: `url('/images/${currentImage}')`,
          transition: "background-image 2s ease-in-out",
        }}
      >
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className="font-poppins font-bold md:leading-[100px] text-white md:text-[60px] text-5xl text-center">
            {profilweb? profilweb.judul:""}
          </h1>
          <h2 className="font-inter font-medium text-white md:text-3xl text-2xl md:leading-[40px] text-center">
            {profilweb? profilweb.sub_judul:""}
          </h2>
        </div>
      </div>
      {/* end banner */}
      {/* service */}
      <div
        id="about"
        className="flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-start">
            <div className="rounded-lg w-80 bg-white p-4 h-full hover:scale-110 transform transition-transform duration-500 flex flex-col items-center">
              <div className="flex-shrink-0 mx-auto">
                <Image
                  src="/icons/1.svg"
                  width={110}
                  height={110}
                  alt="Bestprice"
                />
              </div>
              <h1 className="text-[#D37643] font-poppins font-bold text-xl pt-4 pb-1">
                Best Price
              </h1>
              <p className="font-poppins font-medium text-sm text-center">
                Take advantage of our unbeatable price offers, straight from the
                owners or their authorized representatives.
              </p>
            </div>
            <div className="rounded-lg w-80 bg-white p-4 h-full hover:scale-110 transform transition-transform duration-500 flex flex-col items-center">
              <div className="flex-shrink-0 mx-auto">
                <Image
                  src="/icons/2.svg"
                  width={110}
                  height={110}
                  alt="Extensiveselection"
                />
              </div>
              <h1 className="text-[#D37643] font-poppins font-bold text-xl pt-4 pb-1">
                Extensive Selection of Villas
              </h1>
              <p className="font-poppins font-medium text-sm text-center">
                Discover our finest selection of private pool villas, offering a
                wide range of options to suit your preferences and lifestyle.
              </p>
            </div>
            <div className="rounded-lg w-80 bg-white p-4 h-full hover:scale-110 transform transition-transform duration-500 flex flex-col items-center">
              <div className="flex-shrink-0 mx-auto">
                <Image
                  src="/icons/3.svg"
                  width={110}
                  height={110}
                  alt="Conciergeservice"
                />
              </div>
              <h1 className="text-[#D37643] font-poppins font-bold text-xl pt-4 pb-1">
                Concierge Service
              </h1>
              <p className="font-poppins font-medium text-sm text-center">
                Ensuring your comfort is our top priority through our 7/7
                Concierge service, which is available to assist you throughout
                your stay.
              </p>
            </div>
          </div>
        </div>
        {/* end service */}
        {/* about us */}
        <div className="px-[150px]">
          <div className="flex flex-col items-center justify-center bg-white px-5 rounded-lg">
            <h1 className="font-poppins text-3xl font-bold text-[#D37643] py-4">
              About Us
            </h1>
            <p className="font-poppins font-normal text-xl">
              We specialize in curating the best Bali villas, enchanting tours,
              and memorable activities to ensure your holiday is truly
              exceptional. The villas, tours, and activities we list are
              carefully selected to meet our quality standards, ensuring your
              comfortable stay
            </p>
            <p className="font-poppins font-normal text-xl py-5">
              As your ultimate one-stop travel solution, we take pride in
              offering a complimentary concierge service to elevate your
              experience. Allow us to customize your stay and create
              unforgettable memories for you and your loved ones.
            </p>
            <p className="font-poppins font-normal text-xl">
              Our guarantee to you is the best price available. If you happen to
              find a lower rate elsewhere, simply contact us before finalizing
              your payment, and we will ensure that you are covered. Elevate
              Your Holiday with us!
            </p>
            <div className="py-6">
              <Link href="/about-us">
                <button
                  type="submit"
                  className="w-[190px] h-[50px] bg-[#D37643] hover:bg-[#d28c67] text-white font-poppins font-semibold text-xl rounded-xl transition duration-500"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end about us */}
      {/* location */}
      <div id="a&l" className="px-[150px]">
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="font-poppins text-3xl font-bold text-[#D37643] pb-2">
            Ambiance and Lifestyle
          </h1>
          <h2 className="font-poppins text-[#422925] text-xl font-medium pb-4">
            Unlock unforgettable travel experiences within captivating locations
          </h2>
          <div className="flex flex-col gap-3 w-full h-max">
            <div className="flex flex-row gap-3 w-full h-[374px]">
              <div className="relative basis-1/2 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/seminyak.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Seminyak</p>
              </div>
              <div className="relative basis-1/4 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/umalas.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Umalas</p>
              </div>
              <div className="relative basis-1/4 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/canggu.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Canggu</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 w-full h-[374px]">
              <div className="relative basis-1/4 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/ubud.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Ubud</p>
              </div>
              <div className="relative basis-1/4 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/tanah-lot.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Tanah Lot</p>
              </div>
              <div className="relative basis-1/2 h-full pl-9 pb-4  flex justify-start items-end bg-[url(/images/uluwatu.png)] bg-cover bg-no-repeat">
                <p className="text-white font-poppins text-2xl">Uluwatu</p>
              </div>
            </div>
          </div>
        </div>
        {/* location */}
        {/* all bali villas */}
        <div
          id="allbalivillas"
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-white w-full">
            <h1 className="font-poppins font-bold text-3xl text-[#D37643] text-center py-4">
              All Bali Villas
            </h1>
            <h2 className="font-poppins font-medium text-xl text-center">
              Discover our entire finest selection of the best Bali Villas,
              offering an extensive variety to
              <p> cater to your unique preferences and lifestyle.</p> Experience
              an array of options enriched by this feature, amplifying your
              choices.
            </h2>
            <div className="flex flex-row pl-24 py-6">
              <div className="pr-14 flex-shrink-0 pt-4">
                <select onChange={(e) => {
                  setLokasiid (e.target.value)
                  gallery(e.target.value)
                  } } className="border border-gray-400 w-[250px] h-10 px-3 rounded-lg">
                  {locations? locations.map((lokasi) =>(
                    <option key={lokasi.id} value={lokasi.id}>{lokasi.nama_location}</option>
                  )):""}
                </select>
              </div>
              <div className="flex flex-row ">
                <div className="pr-20">
                  <VideoGallery data={videos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end all bali villas */}
      {/*contact us*/}
      <div id="contact" className="px-[150px] pb-10">
        <h1 className="font-poppins text-3xl font-bold text-[#D37643] pt-6 pb-3 text-center">
          Contact Us
        </h1>
        <div className="flex pt-6">
        <div className="flex flex-col">
      <h1 className="font-poppins font-normal text-3xl">Hi There, </h1>
      <p className="font-poppins font-normal text-3xl">
         Tell us what can do to assist !
      </p>
      <input
        placeholder="Nama"
        type="text"
        className="border-b-2 bg-[#FFF5EF] border-[#ABB2C2] outline-none h-[40px] text-base w-[554px]"
        value={postpesan.nama}
        onChange={(e) => setPostPesan({ ...postpesan, nama: e.target.value })}
      />
      <input
        placeholder="Email"
        type="email"
        className="border-b-2 bg-[#FFF5EF] border-[#ABB2C2] outline-none h-[40px] text-base w-[554px] "
        value={postpesan.email}
        onChange={(e) => setPostPesan({ ...postpesan, email: e.target.value })}
      />
      <input
        placeholder="No_Hp"
        type="text"
        className="border-b-2 bg-[#FFF5EF] border-[#ABB2C2] outline-none h-[40px] text-base mb-2 w-[554px] "
        value={postpesan.no_hp}
        onChange={(e) => setPostPesan({ ...postpesan, no_hp: e.target.value })}
      />
      <textarea
        rows={3}
        placeholder="Pesan"
        type="text"
        className="border-b-2 bg-[#FFF5EF] border-[#ABB2C2] outline-none h-max text-base mb-4 w-[554px]"
        value={postpesan.pesan}
        onChange={(e) => setPostPesan({ ...postpesan, pesan: e.target.value })}
      />
      <button
        type="submit"
        className="w-[554px] h-[50px] bg-[#D37643] hover:bg-[#d28c67] hover:text-gray-400 text-white font-poppins font-semibold text-xl rounded-lg transition duration-500"
        onClick={handleSendClick}
      >
        Send
      </button>
      {/* Pop-up Pesan Terkirim */}
      {pesanTerkirim && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p>Pesan berhasil terkirim!</p>
            <button onClick={handleClosePopup}>Tutup</button>
          </div>
        </div>
      )}
    </div>
          <div className="ml-auto">
            <Image
              src="/images/contact.png"
              width={462}
              height={415}
              alt="contact"
            />
          </div>
        </div>
      </div>
      {/*end contact us*/}
      <Footer />
    </>
  );
}

export default Compro;
