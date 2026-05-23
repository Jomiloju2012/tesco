import react from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    const navLinks = [
        {
            Name: "Home",
            Link: "/"
        },
        {
            Name: "Products",
            Link: "/products"
        },
        {
            Name: "Contact Us",
            Link: "/contact"
        },
        {
            Name: "About",
            Link: "/about"
        }
    ]

  return (
    <header className="flex justify-between items-center py-5 shadow-lg bg-white sticky top-0 z-50" >
        <Link to="/" className="text-2xl font-bold text-blue-700">
        <img className="w-70" src="/tesco.png" alt="tesco" />
        </Link>

        <nav>
            {navLinks.map((link, index) => (
                <Link key={index} to={link.Link} className="text-lg text-gray-700 hover:text-blue-700 mx-4">
                    {link.Name}
                </Link>
            ))}
        </nav>
    </header>
  );
}
