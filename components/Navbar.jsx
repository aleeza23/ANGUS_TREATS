import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
                {isOpen ? <RiCloseLine size={30} /> : <RiMenu4Line size={30} />}
            </button>

            {/* Menu Links */}
            <div className={`absolute bg-black text-xl  top-14  z-50 ${isOpen ? 'flex flex-col right-0 px-52 pb-10' : 'hidden'} md:flex md:flex-row md:static md:w-auto md:gap-6`}>
                <Link href="/" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">Home</Link>
                <Link href="/about" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">About</Link>
                <Link href="/contact" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">Contact</Link>
                <Link href="/price" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">Price</Link>
                <Link href="/menu" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">Menu</Link>
                <Link href="/gallery" className="no-underline font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300">Gallery</Link>
            </div>
        </div>
    );
};

export default Navbar;
