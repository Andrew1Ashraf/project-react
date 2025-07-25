import "../styles/single-blog.css";

function SingleBlog() {
  return (
    <section className="single-blog-page">
      <section>
        <div className="container-single-blog">
          <h1 className="First-section-title">
            Full Guide to Becoming a Professional Chef
          </h1>

          <div className="author-section">
            <div className="author">
              <img src="/assets/single-blog/Ellipse 2.svg" alt="pic" />
              <span className="author-name">John Smith</span>
            </div>
            <div className="Dash"></div>
            <span className="date">15 March 2022</span>
          </div>

          <p style={{ width: "80%", textAlign: "center", opacity: "60%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>

          <img src="/assets/single-blog/Mask Group.svg" alt="chef-pic" />
        </div>
      </section>

      <section>
        <div className="container-2">
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div>
              <h2>How did you start out in the food industry?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>

            <div className="share">
              <span>SHARE ON:</span>
              <i
                className="fa-brands fa-facebook"
                style={{ fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-x-twitter"
                style={{ fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </div>

          <div>
            <h2>What do you like most about your job?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-2">
          <div className="third-section">
            <h2>Do you cook at home on your days off?</h2>
            <img src="/assets/single-blog/Rectangle 23.svg" alt="girl-chef" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>

            <h2>
              What would your advice be to young people looking to get their
              foot in the door?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>

            <h2>
              What is the biggest misconception that people have about being a
              professional chef?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-single-blog">
          <div className="inbox">
            <h2>Deliciousness to your inbox</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="form-group">
              <input type="email" placeholder="your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section className="Recipes">
        <h2
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Check out the delicious recipe
        </h2>
        <div className="card-container">
          <div className="card">
            <div className="card-img-wrapper">
              <img
                className="badge"
                src="/assets/single-blog/Group 852.svg"
                alt=""
              />
              <img
                className="main-img"
                src="/assets/single-blog/Mask Group (4).svg"
                alt="Fruit Salad"
              />
            </div>
            <h3>Mixed Tropical Fruit Salad with Superfood Boosts</h3>

            <div>
              <i className="fa-solid fa-stopwatch"></i>
              <span>30 Minutes</span>
              <i className="fa-solid fa-utensils"></i>
              <span>Healthy</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img
                className="badge"
                src="/assets/single-blog/Group 852 (1).svg"
                alt=""
              />
              <img
                className="main-img"
                src="/assets/single-blog/Mask Group (3).svg"
                alt=""
              />
            </div>

            <h3>Big and Juicy Wagyu Beef Cheeseburger</h3>
            <i className="fa-solid fa-stopwatch"></i>
            <span>30 Minutes</span>
            <i className="fa-solid fa-utensils"></i>
            <span>Western</span>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img
                className="badge"
                src="/assets/single-blog/Group 852.svg"
                alt=""
              />
              <img
                className="main-img"
                src="/assets/single-blog/Mask Group (2).svg"
                alt=""
              />
            </div>

            <h3>Healthy Japanese Fried Rice with Asparagus</h3>
            <i className="fa-solid fa-stopwatch"></i>
            <span>30 Minutes</span>
            <i className="fa-solid fa-utensils"></i>
            <span>Healthy</span>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img
                className="badge"
                src="/assets/single-blog/Group 852 (1).svg"
                alt=""
              />
              <img
                className="main-img"
                src="/assets/single-blog/Mask Group (1).svg"
                alt=""
              />
            </div>

            <h3>Cauliflower Walnut Vegetarian Taco Meat</h3>
            <i className="fa-solid fa-stopwatch"></i>
            <span>30 Minutes</span>
            <i className="fa-solid fa-utensils"></i>
            <span>Eastern</span>
          </div>
        </div>
      </section>

      {/* <section className="last-section">
        <footer>
          <div>
            <img src="/assets/single-blog/Foodieland..svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <ul>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </footer>
      </section>

      <h4 style={{ textAlign: "center" }}>
        © 2020 Flowbase. Powered by <span style={{ color: "#ff7967" }}>Webflow</span>
      </h4> */}
    </section>
  );
}

export default SingleBlog;
