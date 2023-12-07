import logo from './assets/logo.svg';
import './App.css';

import colors from "./lib/colors.json";
import inventory from "./lib/inventory.json";
import Card from './components/Card';

function App() {
  console.log(colors, inventory);

  return (
    <div className="App">
      <header className="App-header bg bg-white">
        <img src={logo} width="750px" className="" alt="logo" />
      </header>
      <div className="inventory-list">
        {
          Object.keys(inventory).map((collection) => {
            return inventory[collection].map((item) => {
              return (
                <Card item={item} />
              )
            });
          })
        }
      </div>
      <footer className="footer bg bg-white">All rights reserved.</footer>
    </div>
  );
}

export default App;
