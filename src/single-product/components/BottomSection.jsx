function BottomSection() {
  return (
    <section className="single-product-page">
      <div className="container">
        <div className="left-side">
          <div className="ingredient">
            <h2>Ingredients</h2>
            <h3>For Main Dish</h3>
            <ul>
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
            </ul>

            <h3>For The Sauce</h3>
            <ul>
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
              <li>
                <input type="radio" className="check" /> Lorem ipsum dolor sit
              </li>
              <hr />
            </ul>
          </div>

          <div className="directions">
            <h2>Direction</h2>

            <div className="step step-1">
              <h3>
                1. <input type="checkbox" /> Lorem ipsum dolor sit
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <img src="/assets/Recipes/Fist step.png" alt="first-step" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <hr />
            </div>

            <div className="step step-2">
              <h3>
                2. <input type="checkbox" /> Lorem ipsum dolor sit
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <hr />
            </div>

            <div className="step step-3">
              <h3>
                3. <input type="checkbox" /> Lorem ipsum dolor sit
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <hr />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="other-recipes">
            <h2>Other Recipes</h2>

            <div className="item">
              <img src="/assets/Recipes/meatball.png" alt="recipe" />
              <div className="text">
                Chicken meatball with <br /> creamy cheese.. <br />
                <span>By Andreas Paula</span>
              </div>
            </div>

            <div className="item">
              <img src="/assets/Recipes/chicken and rice.png" alt="recipe" />
              <div className="text">
                Chicken fried with <br /> sauce and Rice... <br />
                <span>By Andreas Paula</span>
              </div>
            </div>

            <div className="item">
              <img src="/assets/Recipes/creamychicken.png" alt="recipe" />
              <div className="text">
                The creamiest creamy <br /> chicken and.. <br />
                <span>By Andreas Paula</span>
              </div>
            </div>

            <div className="healthy-food">
              <p>
                Don't forget to eat <br /> healthy food
              </p>
              <img src="/assets/Recipes/healthy-food.png" alt="Healthy food" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
