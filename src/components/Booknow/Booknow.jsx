import React, { useState } from "react";
import PropertyList from "../PropertyList/PropertyList";
import heroImage from "../../assets/image.png";
function Booknow() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-gradient-to-br from-[#ffff] to-[#26A6E3]">
      <section
        className="relative h-[550px] md:h-[480px] sm:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }} >
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="absolute bottom-[-100px] md:bottom-[-90px] sm:bottom-[-70px] 
                          bg-gradient-to-r from-[#176E98] to-[#26A6E3]
                          w-[400px] sm:w-[40%] 
                          p-8 rounded-tr-[30px] rounded-bl-[30px] text-center shadow-xl">
            <h2 className="mb-2 text-3xl font-bold tracking-widest text-white sm:text-2xl">
              BOOK NOW
            </h2>
            <p className="text-lg font-semibold text-white sm:text-base">
              Welcome to Your Home Away From Home
            </p>
            <div className="flex gap-3 mt-4 sm:flex-row">
              <input type="text" placeholder="Search Destination"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-3 text-black rounded-md outline-none focus:ring-2 focus:ring-black"/>
              <button
                className="bg-[#176E98]/90 hover:bg-[#176E98]/90 
                           text-white px-4 py-2 rounded-lg transition" >
                Find a House
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-32">
        <PropertyList searchTerm={searchTerm} />
      </div>
      <footer className="text-center text-white py-14"> 
        <div className="flex flex-wrap justify-center gap-10 px-6 mb-10">
          <div className="bg-[#165da4] w-[300px] p-8 rounded-2xl shadow-lg text-left hover:-translate-y-2 transition">
            <h3 className="pb-2 mb-4 text-xl font-semibold border-b-2 border-sky-400">
              Customer Support
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-sky-400">Help Center</a></li>
              <li><a href="/" className="hover:text-sky-400">Safety Issue</a></li>
              <li><a href="/" className="hover:text-sky-400">Anti-discrimination</a></li>
              <li><a href="/" className="hover:text-sky-400">Disability support</a></li>
              <li><a href="/" className="hover:text-sky-400">Cancellation options</a></li>
            </ul>
          </div>
          <div className="bg-[#165da4] w-[300px] p-8 rounded-2xl shadow-lg text-left hover:-translate-y-2 transition">
            <h3 className="pb-2 mb-4 text-xl font-semibold border-b-2 border-sky-400">
              Sky-Swift Apartments
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-sky-400">Newsroom</a></li>
              <li><a href="/" className="hover:text-sky-400">Careers</a></li>
            </ul>
          </div>
        </div>
        <p className="mb-6 text-sl text-[#ffff]">© 2025 Sky-Swift Apartment</p>
        <h1 className="mb-2 text-4xl sl:text-4xl">
          Book Our Services
        </h1>
        <p className="px-4 text-2xl sm:text-lg">
          Kindly fill the table below and submit. We will get back to you shortly.
        </p>
      </footer>
    </div>
  );
}
export default Booknow;