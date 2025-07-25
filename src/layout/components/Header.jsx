import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black px-6 md:px-12 py-6 flex justify-between items-center border-b-[#0000001A] border-b bg-white relative">
      <img src="/assets/header/logo.png" alt="Logo" className="w-28 h-auto object-contain" />

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:underline font-medium text-base">Home</Link>
        <Link to="/products" className="hover:underline font-medium text-base">Recipes</Link>
        <Link to="/blogs" className="hover:underline font-medium text-base">Blogs</Link>
        <Link to="/contact" className="hover:underline font-medium text-base">Contact</Link>
        <Link to="/about" className="hover:underline font-medium text-base">About</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <i className="fa-brands fa-facebook-f cursor-pointer"></i>
        <i className="fa-brands fa-twitter cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer"></i>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 space-y-4 md:hidden z-50">
          <Link to="/" className="font-medium text-base" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="font-medium text-base" onClick={() => setIsOpen(false)}>Recipes</Link>
          <Link to="/blogs" className="font-medium text-base" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" className="font-medium text-base" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about" className="font-medium text-base" onClick={() => setIsOpen(false)}>About</Link>

          <div className="flex items-center gap-6 pt-4 border-t w-full">
            <i className="fa-brands fa-facebook-f cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
