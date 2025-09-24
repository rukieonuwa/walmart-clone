import React, { useContext } from "react";

import img1 from "../assets/images/homepage_img/k2-_7d588c8f-6790-44f0-94fc-b2c4b48d7774.v1.jpg";
import img2 from "../assets/images/homepage_img/8334df04-78d1-4e17-96e4-8af0ff55bcd1.a2cf3dff2da6b178a527f888ee90925c.jpeg";
import img3 from "../assets/images/homepage_img/k2-_f01d6d7f-75f9-4a96-9a37-865ed4eeaa8a.v1.webp";
import img4 from "../assets/images/homepage_img/k2-_7853699d-40d8-4e5e-ad7c-987ec5ebf8ad.v1.jpg";
import img5 from "../assets/images/homepage_img/k2-_dd33e1e8-4ca9-4d54-802d-24ba9c0771e6.v1.jpg";
import img6 from "../assets/images/homepage_img/k2-_7df5e65d-dbe6-4222-a6f4-3c4bdc56e2d6.v1.jpg";
import img7 from "../assets/images/homepage_img/k2-_23144f53-250e-40f7-8941-db5b9922dd4d.v1.jpg";
import img8 from "../assets/images/homepage_img/k2-_0a12df06-6836-42dd-884b-be33fa603e9a.v1.jpg";
import img9 from "../assets/images/homepage_img/k2-_3148089f-3435-4408-8103-a70dcaf7e503.v1.webp";
import img10 from "../assets/images/homepage_img/k2-_7d588c8f-6790-44f0-94fc-b2c4b48d7774.v1.jpg";
import img11 from "../assets/images/homepage_img/0fa71b04-be4b-4047-a71a-474b8473907b_1.55a31d95fa88d2fd138fbbd971e64960.jpeg";
import img12 from "../assets/images/homepage_img/1bef212f-5145-43d9-a4e4-e8b505ea8454_1.0ea7e4d72dee7b96d1adcb1ab5ffefad.jpeg";
import img13 from "../assets/images/homepage_img/7af6debf-6826-4ec1-935b-3678bb5de22f_1.e54b6dca206e94c8fef482f051a65b42.jpeg";
import img14 from "../assets/images/homepage_img/578a0998-c30a-47da-b796-d2577846a383.e1e26c98c16a7ca82ba1b0f48bb52eeb.jpeg";
import img15 from "../assets/images/homepage_img/k2-_374d875b-ed7a-4682-b04d-85946dec881a.v1.png";
import img16 from "../assets/images/homepage_img/k2-_40ff61ef-6054-44df-8c68-8673d3a3a53f.v1.png";
import img17 from "../assets/images/homepage_img/k2-_c27738c7-fdc6-473a-a428-b5692fb34a89.v1.png";
import img18 from "../assets/images/homepage_img/k2-_18a4c946-e6ee-4e84-be6b-19397772f73d.v1.png";
import img19 from "../assets/images/homepage_img/k2-_bab4c2e9-0b2c-41d8-8ef3-bf7a8a3d673e.v1.png";
import img20 from "../assets/images/homepage_img/k2-_bdabf8dd-7750-4942-a857-01ecd903745a.v1.png";
import img21 from "../assets/images/homepage_img/k2-_b7116243-e7c0-4ed6-a5be-27eb8f1fa5bf.v1.png";
import img22 from "../assets/images/homepage_img/k2-_34c8ab42-047f-46bd-b741-30030382ed3c.v1.png";
import img23 from "../assets/images/homepage_img/43f8e4f7-4425-4c00-9d1a-9284078b5063_1.4657312ded7a6c70b28b048a7fcedec9.jpeg";
import img24 from "../assets/images/homepage_img/77dbe743-6b87-47cb-ba6e-3e304050f0e2.0bbec6fd4cbc041a2d375a5f3d9e0029.jpeg";
import img25 from "../assets/images/homepage_img/8864b07c-9595-43ae-98c0-3e64bb607b0b_1.337ee14285ad18300d7c3333837e55e0.webp";
import img26 from "../assets/images/homepage_img/79f440bd-199f-4913-aa75-669a18ae41ac_1.f6d1f5a03a62bf31171edfdace1df721.jpeg";
import img27 from "../assets/images/homepage_img/k2-_baf7db01-b8e4-445a-b9f6-fc340c7d1634.v1.png";
import img28 from "../assets/images/homepage_img/k2-_fdfb1c4c-7d9c-4ff8-aaf6-ac3ba72538aa.v1.png";
import img29 from "../assets/images/homepage_img/k2-_aa9c4675-999a-4853-b70d-3fb4e35abeac.v1.png";
import img30 from "../assets/images/homepage_img/k2-_ea854c91-67ee-4356-99f1-166e0cd41dde.v1.png";
import img31 from "../assets/images/homepage_img/0f8759e0-1354-40e0-afac-f0b03575692a.383bdb89ef2c6a3c4c74da5080ce1ac6.jpeg";
import img32 from "../assets/images/homepage_img/0a446936-6623-460f-96dc-80635c844efe.8e0eb5b0be9ca1dbafc6c45a8d65d46b.png";
import img33 from "../assets/images/homepage_img/bd60d80c-7a3e-45b2-8d19-082863b4b52d_1.c3640382de6c2ef535811b6a20f35e0f.png";
import img34 from "../assets/images/homepage_img/6ef80f9a-c6e4-47e1-9e4a-cc257b7d724e_2.0715ced9b29cf0ba00f13e96e91eb6ca.png";
import img35 from "../assets/images/homepage_img/k2-_c6d41ecd-5151-46d9-a3ec-103b15216c9e.v1.jpg";
import img36 from "../assets/images/homepage_img/k2-_f17826ad-56e1-4a75-b243-a5e1ded29ee3.v1.jpg";
import img37 from "../assets/images/homepage_img/k2-_5b931f9f-b084-4645-b0d8-e6e2e841973b.v1.jpg";
import img38 from "../assets/images/homepage_img/k2-_4419eef7-6e5c-4c52-8709-656cec4026a4.v1.jpg";
import { ToggleBar } from "../context/toggle";

const categoryItems = [
  { img: img1, label: "Video games" },
  { img: img2, label: "Electronics" },
  { img: img3, label: "Patio and garden" },
  { img: img4, label: "Women's clothing" },
  { img: img5, label: "Furniture" },
  { img: img6, label: "Men's clothing" },
  { img: img7, label: "Shoes" },
  { img: img8, label: "Home" },
  { img: img9, label: "Toys" },
  { img: img10, label: "Food" }
];

const productItemsSection6 = [
  {
    img: img11,
    title: "Johnson's Head-To-Toe Tearless Gentle",
    subtitle: "Baby Wash and Shampoo",
    priceMin: 3.92,
    priceMax: 19.90,
    delivery: "2-day delivery"
  },
  {
    img: img12,
    title: "Dove Nutritive Solutions Shampoo with Pump",
    subtitle: "Intensive Repair, 31 oz",
    priceMin: 6.98,
    priceMax: 6.98,
    delivery: "2-day delivery"
  },
  {
    img: img13,
    title: "Dove Advanced Care Dry Spray Antipespirant",
    subtitle: "Deodorant Powder Soft 3.8 oz",
    priceMin: 6.18,
    priceMax: 6.18,
    delivery: "2-day delivery"
  },
  {
    img: img14,
    title: "Degree Men Antipespirant Deodorant Stick Cool",
    subtitle: "Rush 2.7 oz (Twin Pk)",
    priceMin: 4.47,
    priceMax: 4.47,
    delivery: "2-day delivery"
  }
];

const productItemsSection9 = [
  {
    img: img23,
    title: "Johnson's Head-To-Toe Tearless Gentle",
    subtitle: "Baby Wash and Shampoo",
    priceMin: 3.92,
    priceMax: 19.90,
    delivery: "2-day delivery",
    button: "Add to cart"
  },
  {
    img: img24,
    title: "Dove Nutritive Solutions Shampoo with Pump",
    subtitle: "Intensive Repair, 31 oz",
    priceMin: 6.98,
    priceMax: 6.98,
    delivery: "2-day delivery",
    button: "Add to cart"
  },
  {
    img: img25,
    title: "Dove Advanced Care Dry Spray Antipespirant",
    subtitle: "Deodorant Powder Soft 3.8 oz",
    priceMin: 6.18,
    priceMax: 6.18,
    delivery: "2-day delivery",
    button: "Add to cart"
  },
  {
    img: img26,
    title: "Degree Men Antipespirant Deodorant Stick Cool",
    subtitle: "Rush 2.7 oz (Twin Pk)",
    priceMin: 4.47,
    priceMax: 4.47,
    delivery: "2-day delivery",
    button: "Add to cart"
  }
];

const productItemsSection11 = [
  {
    img: img31,
    title: "Johnson's Head-To-Toe Tearless Gentle",
    subtitle: "Baby Wash and Shampoo",
    priceMin: 3.92,
    priceMax: 19.90,
    delivery: "2-day delivery",
    button: "Add to cart"
  },
  {
    img: img32,
    title: "Dove Nutritive Solutions Shampoo with Pump",
    subtitle: "Intensive Repair, 31 oz",
    priceMin: 6.98,
    priceMax: 6.98,
    delivery: "2-day delivery",
    button: "Choose options"
  },
  {
    img: img33,
    title: "Dove Advanced Care Dry Spray Antipespirant",
    subtitle: "Deodorant Powder Soft 3.8 oz",
    priceMin: 6.18,
    priceMax: 6.18,
    delivery: "2-day delivery",
    button: "Choose options"
  },
  {
    img: img34,
    title: "Degree Men Antipespirant Deodorant Stick Cool",
    subtitle: "Rush 2.7 oz (Twin Pk)",
    priceMin: 4.47,
    priceMax: 4.47,
    delivery: "2-day delivery",
    button: "Choose options"
  }
];

const ShopCategories = () => {
  const { addToCart } = useContext(ToggleBar);
  return (
    <div>
      <div className="section5">
        <p className="sec5_title">Shop by Category</p>
        <div className="shopbycategory">
          {categoryItems.map((item, idx) => (
            <div key={idx}>
              <img src={item.img} alt="" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section6">
        <p className="shoppingExperience">Save on gadgets accessories</p>
        <div className="sec4Products">
          {productItemsSection6.map((item, idx) => {
            const priceDisplay = item.priceMin === item.priceMax
              ? `$${item.priceMin.toFixed(2)}`
              : `$${item.priceMin.toFixed(2)}-$${item.priceMax.toFixed(2)}`;
            return (
              <div className={`product${idx + 1}`} key={idx}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
                <h4>{priceDisplay}</h4>
                <p>{item.delivery}</p>
                <button onClick={() => {
                  addToCart(item);
                }}>Add to cart</button>
              </div>
            );
          })}
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div className="section7">
        <p className="gifts_for_mom">Gifts for every mom</p>
        <div className="mom_gifts">
          <div>
            <img src={img15} alt="" />
            <p>Shop all Mother's Day</p>
          </div>
          <div>
            <img src={img16} alt="" />
            <p>Fashion finds</p>
          </div>
          <div>
            <img src={img17} alt="" />
            <p>Home decor essentials</p>
          </div>
          <div>
            <img src={img18} alt="" />
            <p>Beauty and self-care items</p>
          </div>
        </div>
      </div>

      <div className="section8">
        <p className="outdoor_activities">Outdoor activities</p>
        <div className="activities">
          <div>
            <img src={img19} alt="" />
            <p>New swimwear from $15</p>
          </div>
          <div>
            <img src={img20} alt="" />
            <p>Kid's wheel from $15</p>
          </div>
          <div>
            <img src={img21} alt="" />
            <p>Top brand camp gear</p>
          </div>
          <div>
            <img src={img22} alt="" />
            <p>Pools, toys and more</p>
          </div>
        </div>
      </div>

      <div className="section9">
        <p className="shoppingExperience">Bestselling in Home</p>
        <div className="sec4Products">
          {productItemsSection9.map((item, idx) => {
            const priceDisplay = item.priceMin === item.priceMax
              ? `$${item.priceMin.toFixed(2)}`
              : `$${item.priceMin.toFixed(2)}-$${item.priceMax.toFixed(2)}`;
            const isAddToCart = item.button === "Add to cart";
            return (
              <div className={`product${idx + 1}`} key={idx}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
                <h4>{priceDisplay}</h4>
                <p>{item.delivery}</p>
                <button
                  onClick={isAddToCart ? () => addToCart(item) : undefined}
                >
                  {item.button}
                </button>
              </div>
            );
          })}
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div className="section10">
        <p className="nowtrending">Now Trending for Summer</p>
        <div className="trending">
          <div>
            <img src={img27} alt="" />
            <p>Traeger pellet grills</p>
          </div>
          <div>
            <img src={img28} alt="" />
            <p>DIY home projects</p>
          </div>
          <div>
            <img src={img29} alt="" />
            <p>Electronics and tech</p>
          </div>
          <div>
            <img src={img30} alt="" />
            <p>Outdoor play items</p>
          </div>
        </div>
      </div>

      <div className="section11">
        <p className="shoppingExperience">Bestselling in Home</p>
        <div className="sec4Products">
          {productItemsSection11.map((item, idx) => {
            const priceDisplay = item.priceMin === item.priceMax
              ? `$${item.priceMin.toFixed(2)}`
              : `$${item.priceMin.toFixed(2)}-$${item.priceMax.toFixed(2)}`;
            const isAddToCart = item.button === "Add to cart";
            return (
              <div className={`product${idx + 1}`} key={idx}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
                <h4>{priceDisplay}</h4>
                <p>{item.delivery}</p>
                <button
                  onClick={isAddToCart ? () => addToCart(item) : undefined}
                >
                  {item.button}
                </button>
              </div>
            );
          })}
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div className="covid-updates">
        <p className="covid-info">COVID-19 Info and Updates</p>
        <div className="update">
          <div className="test">
            <div>
              <img src={img35} alt="" />
            </div>
            <h4>At-home COVID-19 tests</h4>
            <p>Now available at Walmart.</p>
          </div>
          <div className="vaccine">
            <div>
              <img src={img36} alt="" />
            </div>
            <h4>Book your COVID-19 vaccine.</h4>
            <p>Schedule now.</p>
          </div>
          <div className="safetypicks">
            <div>
              <img src={img37} alt="" />
            </div>
            <h4>Routine-ready safety picks</h4>
            <p>Masks, disinfectants and more.</p>
          </div>
          <div className="services">
            <div>
              <img src={img38} alt="" />
            </div>
            <h4>No-contact services</h4>
            <p>Curbside pickup and more.</p>
          </div>
        </div>
      </div>
      <div className="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  );
};

export default ShopCategories;