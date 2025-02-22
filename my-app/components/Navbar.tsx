import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <Image src="/images/logo.png" alt="Smart Waste Assistant Logo" width={40} height={40} />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/classify">Classification</Link></li>
                        <li><Link href="/results">Results</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
