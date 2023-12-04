import React, { useState } from "react";
import { State, Country } from "country-state-city";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("IE");
  const [selectedState, setSelectedState] = useState("");
  const [isClicked,setisClicked] = React.useState(false);
  const [address, setAddress] = useState( {street: "", city: "", pc: "", tel: ""} );
  const handleCountryChange = (event) => {setSelectedCountry(event.target.value); setSelectedState("CO");};
  
  function handleInput(event) {
    const { name, value } = event.target;
    setAddress(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
      
    });
  }

function handleClick(event) {
  console.log("clicked");
  setisClicked(true);
  event.preventDefault();
}

  return (

    <div>
    <div className="aboutUs">Shipping Details</div>
      <div className="shipping">

        <form onSubmit={handleClick}>
          <label>House/Street</label><br />
          <input type="text" onChange={handleInput} placeholder="Enter House and Street" name="street" value={address.street} required /><br />

          <label>Town/City</label><br />
          <input type="text"  onChange={handleInput} placeholder="Enter you town/city" name="city" value={address.city} required /><br />

           <label>Country</label><br />
            <select value={selectedCountry} onChange={handleCountryChange}>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select><br /><br />

            <label>Region/State</label><br />
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Region/State</option>
              {State.getStatesOfCountry(selectedCountry).map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select><br /><br />

            <label>Post Code</label><br />
            <input type="text" onChange={handleInput} placeholder="Enter Post Code" name="pc" value={address.pc} required /><br />

            <label>Telephone Number</label><br />
            <input type="text" onChange={handleInput} placeholder="Enter telephone number" name="tel" value={address.tel} required /><br />
            <input type="submit" value="Confirm Order" className="confirmOrder" />
           
            
          </form>
            
      </div><br />

      
      {isClicked ?  
        <div className="popUp2">
          <h5>Order Placed<br /><a href="/myOrders">See Orders</a></h5>
        </div>

        : null }

    </div>

  );
};

export default Shipping;