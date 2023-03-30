import { useState } from "react";
import NavCom from "./NavCom";

const menuList = {
    Rice: '$200.00',
    Plantain: '$720.00',
  };

function Home() {
    const [menu, setMenu] = useState(menuList);
    // console.log(menu, setMenu);
    
    // update rice price on click
    const handleClick = () => {
      const newMenu = {...menu};
      newMenu.Rice = '$800.00';
      setMenu(newMenu);
    }
  
    // update plantain price on click
    function handlePrice() {
      setMenu(prevState => {
        return {...prevState, Plantain: '$550.00'}
      });
    }
  
    return (
      <main className="">

        <NavCom />

      <section className="ps-4 mt-2">
          <h2>Daily Menu</h2>
          <div>
              <p>The price of Rice is {menu.Rice}</p>
              <button 
                  className="btn btn-outline-secondary btn-light" 
                  onClick={handleClick}>
                  Update Price
              </button>
          </div>
          <div>  
              <p>The price of Plantain is {menu.Plantain}</p>    
              <button 
                  className="btn btn-outline-secondary btn-light" 
                  onClick={handlePrice}>
                  Price Change
              </button>
          </div>
      </section>
      </main>
    );
}
export default Home;