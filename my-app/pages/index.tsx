import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from "../components/HeroSection";

// import Image from 'next/image';

export default function Home() {
  return <HeroSection />;
    // return (
    //     <>
    //         <Head>
    //             <title>Smart Waste Assistant</title>
    //         </Head>
    //         <Navbar />
    //         <main>
    //             <section id="hero">
    //                 <Image src="/images/smart-waste.png" alt="Smart Waste Sorting" width={400} height={300} />
    //                 <div className="hero-text">
    //                     <h2>Here to Make Recycling Easy</h2>
    //                     <p>Scan your waste and find the right bin every time.</p>
    //                 </div>
    //             </section>
    //         </main>
    //         <footer>
    //             <p>&copy; 2025 Smart Waste Assistant. All rights reserved.</p>
    //         </footer>
    //     </>
    // );
}
