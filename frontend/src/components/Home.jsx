import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import truckOne from "../assets/truckONE.jpg";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, contactRef, footerRef }}
      />

      {/* About Section */}
      <section
        className="w-full h-[500px] bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${truckOne})` }}
        ref={aboutRef}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex justify-between items-center text-left p-9">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 opacity-0 animate-slide-in-left slide-delay-1 max-w-lg">
            Driving Excellence Delivering Trust
          </h1>
          <p className="text-white text-lg md:text-xl w-[40%] leading-loose opacity-0 animate-slide-in-right slide-delay-2">
            At Dynasoft, we specialize in reliable and timely transportation solutions. From local deliveries to long-haul logistics, our fleet of trucks and experienced drivers ensure your cargo reaches its destination safely and efficiently. Experience the difference of working with a company that values precision, professionalism, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-full bg-sky-800 flex flex-col justify-center items-center h-[570px] overflow-hidden animate-slide-in-left slide-delay-1"
        ref={contactRef}
      >
        <h2 className="text-white text-[40px] font-bold mb-6 animate-slide-in-left slide-delay-0">
          Contact Us!
        </h2>

        <form className="bg-sky-100 rounded-xl shadow-lg p-6 w-[90%] max-w-md">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="w-full bg-sky-600 text-white font-bold py-2 rounded-lg hover:bg-sky-700 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <Footer ref={footerRef} />
    </>
  );
}
