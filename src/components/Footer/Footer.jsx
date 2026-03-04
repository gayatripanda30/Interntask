import visaLogo from "../../assets/footerimg1.png";
import masterCardLogo from "../../assets/footerimg2.png";
import mpesaLogo from "../../assets/footerimg3.png";
import { FaFacebookF, FaTwitter, FaLink, FaPhoneAlt, FaClock,FaEnvelope,} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <footer className="w-full text-white bg-gradient-to-br from-[#002b80] via-[#103f9c] to-[#193c65]">
      <div className="flex flex-col justify-between gap-12 pt-24 pb-12 mx-auto px-7 max-w-7xl md:flex-row">
        <div className="md:w-2/3">
          <h1 className="mb-6 text-4xl font-bold tracking-widest">
            Sky-Swift
          </h1>
          <p className="text-lg leading-relaxed text-blue-100">
            Sky-Swift is a versatile company that produces various services,
            including aircraft rental, fuel supply and maintenance.
            <br />
            They also offer high-quality petroleum and aerobic equipment,
            vehicle spare parts, telecommunication equipment and hardware.
            <br />
            Additionally, they provide furnished apartments services for travelers.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="mb-6 text-2xl font-semibold">
            Useful Links
          </h3>
          <div className="space-y-3">
            {[
              { name: "CONTACT" },
              { name: "OUR POLICY" },
              { name: "TERMS AND CONDITION"},
              { name: "REFUND CLAIM FORM" },
            ].map((link) => (
              <a key={link.name} href={link.path}
                className="flex items-center gap-3 text-blue-200 transition hover:text-white">
                <FaLink className="text-sm" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 py-5">
        <img src={visaLogo} alt="Visa" className="h-30 md:h-30" />
        <img src={masterCardLogo} alt="MasterCard" className="h-20 md:h-28" />
        <img src={mpesaLogo} alt="M-Pesa" className="h-20 md:h-28" />
      </div>
      <div className="flex flex-col gap-5 px-6 py-10 md:flex-row justify-evenly">
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="w-10 h-10 p-2 bg-[#315f94] rounded-full" />
          <div>
            <p className="font-semibold">Give Us A Call</p>
            <span className="text-sm text-blue-200">
              Booking: +254733555576 <br />
              Inquiries: +254733555504
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelope className="w-10 h-10 p-2 bg-[#315f94] rounded-full" />
          <div>
            <p className="font-semibold">Send Us A Message</p>
            <a href="mailto:info@sky-swift.com"
              className="text-sm text-blue-200 hover:text-white" >
              info@sky-swift.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaClock className="w-10 h-10 p-2 bg-[#315f94] rounded-full" />
          <div>
            <p className="font-semibold">Opening Hours</p>
            <span className="text-sm text-blue-200">
              08:00 AM - 5:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-6 py-6 border-t border-blue-400/40 md:flex-row">
        <div className="text-lg text-blue-200">
          Copyright © Sky-Swift Limited. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 text-2xl text-blue-300 md:mt-0">
          <a href="https://instagram.com"target="_blank" rel="noreferrer"
            className="transition hover:text-white hover:scale-110">
            <AiFillInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"
            className="transition hover:text-white hover:scale-110">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"
            className="transition hover:text-white hover:scale-110">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;