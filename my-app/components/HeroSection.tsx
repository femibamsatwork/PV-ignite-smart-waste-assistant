import Image from "next/image";
import { FaBars } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-screen flex flex-col items-center px-6 pt-6 text-center">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full max-w-5xl">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EcoSorter Logo" width={40} height={40} />
          <h1 className="text-xl font-bold text-gray-900">Waste Wiz</h1>
        </div>
        <button className="p-2">
          <FaBars className="text-2xl text-gray-900" />
        </button>
      </div>

      {/* Hero Content */}
      <div className="max-w-xl mt-10">
        <p className="text-green-700 font-semibold">#1 on green tech</p>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mt-2">
          Sort Waste Smarter with AI
        </h2>
        <p className="text-gray-600 mt-4">
          Revolutionize your recycling with Waste Wiz, the smart waste sorting assistant that identifies your items in an instant.
        </p>
        <button className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
          Try Now
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative mt-10 w-full max-w-lg">
        <Image 
          src="/images/smart-waste.png" 
          alt="Smart Waste Sorting App" 
          width={400} 
          height={300} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
