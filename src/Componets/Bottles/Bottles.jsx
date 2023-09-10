import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

   const handlecart = (bottle)=>{
        const newCart = [...cart,bottle]
        setCart(newCart);
   }

  return (
    <div>
      <h3>Bottles Available : {bottles.length}</h3>
       <h4>Cart : {cart.length}</h4>

      <div className="bottle-container">
        {
        bottles.map((bottle) => (
          <Bottle key={bottle.id}
          handlecart = {handlecart}
          bottle={bottle}></Bottle>
        ))
        }
      </div>
    </div>
  );
};

export default Bottles;
