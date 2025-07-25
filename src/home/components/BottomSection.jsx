function BottomSection() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] md:p-32 p-12">
        <div className="flex flex-col items-center md:max-w-1/2 gap-4 md:mx-auto md:text-center gap-y-8">
          <h1 className="text-5xl font-semibold">
            Check out @foodieland on Instagram
          </h1>
          <p className="text-sm text-[#00000099]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
          <img
            src="/assets/home/instagram-posts/Post1.jpg"
            className="w-full object-cover"
          />
          <img
            src="/assets/home/instagram-posts/Post2.jpg"
            className="w-full object-cover"
          />
          <img
            src="/assets/home/instagram-posts/Post3.jpg"
            className="w-full object-cover"
          />
          <img
            src="/assets/home/instagram-posts/Post4.jpg"
            className="w-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors flex items-center gap-4 cursor-pointer">
            Visit Our Instagram{" "}
            <i className="fa-brands fa-instagram text-2xl"></i>
          </button>
        </div>
      </section>
      <section className="md:p-32 p-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
          <h1 className="text-3xl md:text-5xl font-semibold md:max-w-[35%]">
            Try this delicious recipe to make your day
          </h1>
          <p className="text-xl md:text-base text-[#00000099] md:max-w-[35%]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod1.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#FF6363] text-xl"></i>
              </button>
            </div>

            <h3 className="text-lg font-semibold max-w-[80%]">
              Mixed Tropical Fruit Salad with Superfood Boosts
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Healthy</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod2.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#DBE2E5] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[80%]">
              Big and Juicy Wagyu Beef Cheeseburger
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Western</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod3.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#FF6363] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[80%]">
              Healthy Japanese Fried Rice with Asparagus
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Healthy</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod4.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#DBE2E5] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[80%]">
              Cauliflower Walnut Vegetarian Taco Meat
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Eastern</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod5.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#FF6363] text-xl"></i>
              </button>
            </div>

            <h3 className="text-lg font-semibold max-w-[80%]">
              Rainbow Chicken Salad with Almond Honey Mustard Dressing
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Healthy</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod6.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#DBE2E5] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[80%]">
              Barbeque Spicy Sandwiches with Chips
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Snack</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod7.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#DBE2E5] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[80%]">
              Firecracker Vegan Lettuce Wraps - Spicy!
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Seafood</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <img
                src="/assets/home/products/prod8.png"
                className="object-cover rounded-4xl w-full h-[12.5rem]"
              />

              <button className="absolute top-3 right-3 hover:bg-white/80 hoverbackdrop-blur-md p-4 rounded-full bg-white transition-colors shadow-md cursor-pointer">
                <i className="fa-solid fa-heart text-[#FF6363] text-xl"></i>
              </button>
            </div>
            <h3 className="text-lg font-semibold max-w-[60%]">
              Chicken Ramen Soup with Mushroom
            </h3>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-utensils text-xl"></i>
                <p className="text-sm text-[#00000099] font-medium">Japanese</p>
              </span>
            </div>
          </div>
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
                className="bg-black text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-gray-800 transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BottomSection;
