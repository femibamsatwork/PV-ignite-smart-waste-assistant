import Image from "next/image";
import { FaBars } from "react-icons/fa";

const loadClassifyPage = () => {
  window.location.href = "/classify";
};

const HeroSection = () => {
  return (
    <div className="">
        <div className="navbar">
            <div className="logo">
                <Image src="/images/logoFR.png" alt="Waste Wiz Logo" width={50} height={50}/>
            </div>
            <div className="nav-links">
                <a href="#">How It Works</a>
                <a href="#">Features</a>
                <a href="#">Get Started</a>
                <a href="#">Eco Insights</a>
                <a href="#" className="sign-up">Try It Now</a>
            </div>
        </div>
        <div className="container">
            <div className="text-section">
                <h1>Sort Waste Smarter with AI</h1>
                <p>Revolutionize your recycling with Waste Wiz, the smart waste sorting assistant that identifies your items in an instant.</p>
                <button
                    className="sign-up-btn"
                    onClick={loadClassifyPage}
                >Try It Now</button>
            </div>
            <div className="image-section">
                <Image src="/images/image7.png" alt="Waste Wiz App Screens" width={500} height={300} />
            </div>
        </div>
        <div className="green-strip">
            <h2>The #1 Intelligent Waste Sorting Solution</h2>
            <p>As endorsed by top eco-friendly brands</p>
            <div className="icon-container">
                <Image src="/images/image3.png" alt="Eco-friendly icon 1" className="icon" width={500} height={300}/>
                <Image src="/images/image5.png" alt="Eco-friendly icon 2" className="icon" width={500} height={300}/>
                <Image src="/images/image6.png" alt="Eco-friendly icon 3" className="icon" width={500} height={300}/>
                <Image src="/images/image8.png" alt="Eco-friendly icon 4" className="icon" width={500} height={300}/>
                <Image src="/images/image9.png" alt="Eco-friendly icon 5" className="icon" width={500} height={300}/>
            </div>
        </div>
        <div className="green-block">
            <div className="sort-waste-smarter">
            </div>
            <div className="template-cards">
                <div className="card">
                    <h3>Effortless Sorting</h3>
                    <p>Sort waste effortlessly with AI precision.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <h3>Eco Reminders</h3>
                    <p>Stay green with eco-friendly waste alerts.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <h3>Camera Snap</h3>
                    <p>Instantly classify items using your camera.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <h3>Sustainable Tips</h3>
                    <p>Receive daily eco-friendly disposal tips.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <h3>Eco Insights</h3>
                    <p>Gain insights for reduced waste impact.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <h3>Instant Analysis</h3>
                    <p>Quickly determine item recyclability with AI.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
        <div className="testimonial-section">
            <h2>User Testimonials</h2>
            <p>Insights from users revolutionizing waste management</p>
            <div className="testimonial">
                <Image src="/images/Smart Waste img.png" alt="User Photo" width={500} height={300}/>
                <div className="content">
                    <h3>Emily Johnson</h3>
                    <p>Environmental Scientist at EcoTech</p>
                    <p>"After struggling to sort waste in a busy work environment, this app has completely transformed our approach. It takes the guesswork out with incredible accuracy—sorting our waste right with a simple scan, and we get benefit points! We're not just reducing waste; we're doing it intelligently and effortlessly, and as a community. Our conscience and the planet thanks you! Thank you WasteWiz!"</p>
                </div>
            </div>
        </div>
        <div className="footer">
            <h2>The #1 Intelligent Waste Sorting Solution</h2>
            <p>As endorsed by top eco-friendly brands</p>
            <h6>*Not a factual claim (currently).</h6>
        </div>
    </div>
  );
};

export default HeroSection;
