import logo from './media/logo.svg';
import './App.css';

import colors from "./lib/colors.json";
import inventory from "./lib/inventory.json";
import Card from './components/Card';

function App() {
  console.log(colors, inventory);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="750px" className="" alt="logo" />
      </header>
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
  );
}

export default App;
