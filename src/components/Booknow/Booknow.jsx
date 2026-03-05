import React, { useState } from "react";
import PropertyList from "../PropertyList/PropertyList";
import heroImage from "../../assets/image.png";

function Booknow() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#ffff] to-[#26A6E3]">
      <section
        className="relative w-full h-[500px] sm:h-[520px] md:h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}  >
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="absolute bottom-[-80px] sm:bottom-[-90px] md:bottom-[-100px]
            w-[90%] sm:w-[75%] md:w-[60%] lg:w-[40%] max-w-[500px]
            bg-gradient-to-r from-[#176E98] to-[#26A6E3]
            p-4 sm:p-6 md:p-8 rounded-tr-[30px] rounded-bl-[30px]
            text-center shadow-xl">
            <h2 className="mb-2 text-2xl font-bold tracking-widest text-white sm:text-3xl">
              BOOK NOW
            </h2>
            <p className="text-sm font-semibold text-white sm:text-base md:text-lg">
              Welcome to Your Home Away From Home
            </p>
            <div className="flex flex-col gap-3 mt-4 sm:flex-row">
              <input
                type="text"
                placeholder="Search Destination"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 w-full p-2 text-black rounded-md outline-none sm:p-3 focus:ring-2 focus:ring-black"
              />
              <button className="w-full sm:w-auto bg-[#176E98]/90 hover:bg-[#176E98]
                text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
                Find a House
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-32 sm:mt-36 md:mt-40">
        <PropertyList searchTerm={searchTerm} />
      </div>
      <footer className="py-12 text-center text-white sm:py-14">
        <div className="flex flex-wrap justify-center gap-6 px-4 mb-10 sm:px-6">
          <div className="bg-[#165da4] w-full sm:w-[300px] p-5 sm:p-8 rounded-2xl shadow-lg text-left hover:-translate-y-2 transition">
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b-2 sm:text-xl border-sky-400">
              Customer Support
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="hover:text-sky-400">Help Center</a></li>
              <li><a href="/" className="hover:text-sky-400">Safety Issue</a></li>
              <li><a href="/" className="hover:text-sky-400">Anti-discrimination</a></li>
              <li><a href="/" className="hover:text-sky-400">Disability support</a></li>
              <li><a href="/" className="hover:text-sky-400">Cancellation options</a></li>
            </ul>
          </div>
          <div className="bg-[#165da4] w-full sm:w-[300px] p-5 sm:p-8 rounded-2xl shadow-lg text-left hover:-translate-y-2 transition">
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b-2 sm:text-xl border-sky-400">
              Sky-Swift Apartments
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="hover:text-sky-400">Newsroom</a></li>
              <li><a href="/" className="hover:text-sky-400">Careers</a></li>
            </ul>
          </div>
        </div>
        <p className="mb-6 text-sm sm:text-base">© 2025 Sky-Swift Apartment</p>
        <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl">
          Book Our Services
        </h1>
        <p className="max-w-3xl px-4 mx-auto text-base sm:text-lg md:text-xl">
          Kindly fill the table below and submit. We will get back to you shortly.
        </p>
      </footer>
    </div>
  );
}
export default Booknow;