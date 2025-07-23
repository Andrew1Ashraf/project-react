import { Route, Routes } from "react-router-dom"
import Home from "./home"
import SingleBlog from "./single-blog"
import SingleProduct from "./single-product"
import Layout from "./layout"
import Blogs from "./blogs"
import Contact from "./contact"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/single" element={<SingleBlog />} />
          <Route path="/products/single" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
