/* eslint-disable react/prop-types */

import './Bottle.css'

const Bottle = ({bottle,handlecart}) => {
    // console.log(bottle);
    const {name,seller,price,img} = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h3>{seller}</h3>
            <h3>{price}</h3>
            <button onClick={()=> handlecart(bottle)}>purchase</button>
        </div>
    );
};

export default Bottle;