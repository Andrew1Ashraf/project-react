import { Link } from "react-router-dom";
import '../../styles/header.css'

function Header() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ITI Project</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products/single" className="hover:underline">
          Products
        </Link>
        <Link to="/blogs/single" className="hover:underline">
          Blogs
        </Link>
      </div>
    </nav>
  );
}

export default Header;
