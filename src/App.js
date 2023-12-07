import logo from './assets/logo.svg';
import './App.css';

import colors from "./lib/colors.json";
import inventory from "./lib/inventory.json";
import Card from './components/Card';
import HeaderDetails from './assets/dynamic/header-details';

function App() {
  const colorNames = Object.keys(colors);
  const color = colorNames[Math.floor(Math.random() * colorNames.length)];

  return (
    <div className={`App bg bg-image-${color}`}>
      <header className={`main-header bg bg-color-${color} bg-image-white`}>
        <img src={logo} width="750px" className="" alt="logo" />
      </header>
      <div>
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
      <footer className={`footer bg bg-color-${color} bg-image-white`}>All rights reserved.</footer>
    </div>
  );
}

export default App;
