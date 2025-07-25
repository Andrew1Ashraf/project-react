import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 bg-white">
      <div className="border-b border-[#0000001A] pb-8">
        <div className="flex flex-wrap justify-between items-center gap-6 mb-4">
          <img
            src="/assets/header/logo.png"
            alt="Logo"
            className="w-[112px] h-auto object-contain"
          />

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-center">
            <Link to="/" className="hover:underline font-medium text-base">
              Home
            </Link>
            <Link to="/products" className="hover:underline font-medium text-base">
              Recipes
            </Link>
            <Link to="/blogs" className="hover:underline font-medium text-base">
              Blogs
            </Link>
            <Link to="/contact" className="hover:underline font-medium text-base">
              Contact
            </Link>
            <Link to="/about" className="hover:underline font-medium text-base">
              About
            </Link>
          </div>
        </div>

        <p className="text-base text-[#00000099] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetuipisicing elit,
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 text-center md:text-left">
        <div></div>
        <p className="text-sm md:text-lg text-[#00000099]">
          © 2020 Flowbase. Powered by{" "}
          <span className="text-red-400">Webflow</span>
        </p>

        <div className="flex items-center gap-6">
          <i className="fa-brands fa-facebook-f cursor-pointer"></i>
          <i className="fa-brands fa-twitter cursor-pointer"></i>
          <i className="fa-brands fa-instagram cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
