import "../styles/blogs.css";

function Blogs() {
  return (
    <section className ="blog-page">
      <div className="container">
        <div className="title">
          <h1>Blog & Article</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search article, news or recipe..."
            />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="main">
          <div className="articles">
            <div className="article">
              <img src="/assets/blogs/photo1.png" alt="photo" />
              <div className="article-content">
                <h3>Crochet Projects for Noodle Lovers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Wade Warren.png" alt="photo" />
                  <span>Wade Waeren</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>

            <div className="article">
              <img src="/assets/blogs/photo2.png" alt="photo" />
              <div className="article-content">
                <h3>10 Vegetarian Recipes To Eat This Month</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Robert Fox.png" alt="photo" />
                  <span>Robert Fox</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>
            <div className="article">
              <img src="/assets/blogs/photo3.png" alt="photo" />
              <div className="article-content">
                <h3>Full Guide to Becoming a Professional Chef</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Dianne Russell.png" alt="photo" />
                  <span>Dianne Russell</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>
            <div className="article">
              <img src="/assets/blogs/photo4.png" alt="photo" />
              <div className="article-content">
                <h3>Simple & Delicious Vegetarian Lasagna</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Leslie Alexander.png" alt="photo" />
                  <span>Leslie Alexander</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>
            <div className="article">
              <img src="/assets/blogs/photo5.png" alt="photo" />
              <div className="article-content">
                <h3>Plantain and Pinto Stew with Aji Verde</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Courtney Henry.png" alt="photo" />
                  <span>Courtney Henry</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>
            <div className="article">
              <img src="/assets/blogs/photo6.png" alt="photo" />
              <div className="article-content">
                <h3>We re Hiring a Communications Assistant!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="article-meta">
                  <img src="/assets/blogs/Albert Flores.png" alt="photo" />
                  <span>Albert Flores</span>
                  <span>|</span>
                  <span>12 November 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <h4>Tasty Recipes</h4>
            <div className="recipe">
              <img src="/assets/blogs/photo7.png" alt="ph7" />
              <div>Chicken Meatballs with Cream Cheese</div>
              <span>By Andreas Paula</span>
            </div>
            <div className="recipe">
              <img src="/assets/blogs/photo8.png" alt="ph8" />
              <div>Traditional Bolognaise Ragu</div>
              <span>By Andreas Paula</span>
            </div>
            <div className="recipe">
              <img src="/assets/blogs/photo9.png" alt="ph9" />
              <div>Pork and Chive Chinese Dumplings</div>
              <span>By Andreas Paula</span>
            </div>
            <div className="lastSidebar1">
              <h3 style={{ fontFamily: "Lobster, sans-serif" }}>
                Dont forget to eat healthy food
              </h3>
              <img src="/assets/blogs/photo10.png" alt="last" />
              <h6>www.foodieland.com</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="modern-pagination">
        <a href="#" className="page active">
          1
        </a>
        <a href="#" className="page">
          2
        </a>
        <a href="#" className="page">
          3
        </a>
        <a href="#" className="page">
          4
        </a>
        <a href="#" className="page">
          5
        </a>
        <span className="page dots">...</span>
        <a href="#" className="page">
          ....
        </a>
      </div>
      <div className="relative mt-16 md:mt-32 rounded-4xl overflow-hidden">
          <img
            src="/assets/home/backgrounds/Mask Group.png"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
              Deliciousness to your inbox
            </h1>
            <p className="text-sm md:text-base text-[#00000099] max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>

            <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-lg">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-grow px-4 py-3 text-sm outline-none placeholder-gray-400 bg-transparent"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
    </section>
  );
}

export default Blogs;
