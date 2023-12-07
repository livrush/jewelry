import logo from './assets/logo.svg';
import './App.css';

import colors from "./lib/colors.json";
import inventory from "./lib/inventory.json";
import Card from './components/Card';
import HeaderDetails from './assets/dynamic/header-details';
import HeaderAbout from './assets/dynamic/header-about';

function App() {
  const colorNames = Object.keys(colors);
  const color = colorNames[Math.floor(Math.random() * colorNames.length)];

  return (
    <div className={`App bg bg-image-${color}`}>
      <header className={`main-header bg bg-color-${color} bg-image-white`}>
        <img src={logo} width="750px" className="" alt="logo" />
      </header>
      <div className="details">
        {/* TODO: Need to fix marquee animation, create a new component that accepts component to marquee */}
        <HeaderDetails color={color} />
        <div className="inventory-list">
          {
            Object.keys(inventory).map((collection) => {
              return inventory[collection].map((item) => {
                return (
                  <Card item={item} color={color} />
                )
              });
            })
          }
        </div>
      </div>
      <div className="about">
        {/* TODO: Need to fix marquee animation, create a new component that accepts component to marquee */}
        <HeaderAbout color={color} />
        <div className="about-container">
          <div className="about-left">
            <div className="about-left-mask bg bg-color-grey bg-image-white"></div>
            <h3>
              Step into the world of<br/>
              timeless elegance with <br/>
              <img src={logo} width="85%" className="logo" alt="Pafiume Jewelry" /><br/>
              an emerging artisanal brand
            </h3>
          </div>
          <div className={`about-right bg bg-color-${color} bg-image-white`}>
            <p>
              Step into the world of timeless elegance with Pafiume Jewelry, an emerging artisanal brand dedicated to crafting exquisite necklaces, bracelets, and earrings that showcase the beauty of pearls and gemstones. At Pafiume, each piece is meticulously designed to embody sophistication and individuality, whether adorned with lustrous pearls or vibrant gemstones. Our commitment to quality and craftsmanship ensures that each creation is a testament to the enduring allure of nature's treasures. From classic pearl strands to contemporary gemstone masterpieces, Pafiume Jewelry invites you to indulge in the perfect blend of tradition and modernity, allowing you to express your unique style with every carefully curated piece. Elevate your elegance with Pafiume, where the art of jewelry-making meets the everlasting beauty of pearls and gemstones.
            </p>
          </div>
        </div>
      </div>
      <footer className={`footer bg bg-color-${color} bg-image-white text-color-white`}>All rights reserved.</footer>
    </div>
  );
}

export default App;
