import React, { useContext } from 'react'
import "./Placeorder.css";
import { StoreContext } from '../../context/Storecontext';

function Placeorder() {
  const {getCartTotalAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="text" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zipcode'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className='plqace-order-right'> 
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getCartTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getCartTotalAmount()===0 ? 0 : getCartTotalAmount()+2}</p>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder;
