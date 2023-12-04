import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

function MyOrders() {

  const arr = [1,2,3,4];

  const [isReg, setReg] = useState(false);
  const [isLog, setLog] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    reg: ""
  });

  const [logDetails, setlogDetails] = useState({
    email: "",
    password: "",
    log: ""
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contact'));
    if (items) {
      if (items.reg === "true") {
        setReg(true);
        setContact(items);
      }
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('logged'));
    if (items) {
      if (items.log === "true") {
        setLog(true);
        setlogDetails(items);
      }
    }
  }, []);

   console.log("reg " + isReg + " log is  " + isLog);

    return ( 

    <div>

      <div className="aboutUs">My Orders</div><br />

          <div className="myOrders">

          {isLog ? 

            <div><table>
          <thead>
            <tr>
              <th width="120px">Order Id</th>
              <th width="120px">Status</th>
              <th width="50px">Qty</th>
              <th width="50px">Amount</th>
              <th width="100px">Payment<br />Method</th>
              <th width="60px">Action</th>
            </tr>
          </thead> 

          <tbody>
            {arr.map((i) => (
            <tr key={i}>
            <td>#sdkfsdfdsf</td>
            <td>Processing</td>
            <td>3</td>
            <td>€{45.5}</td>
            <td>COD</td>
            <td>
              <Link to={`/order/${"1"}`}>
                <VisibilityIcon />
              </Link>
            </td>
            </tr>
            ))}           
          </tbody>
        </table></div> : <div><h1>You are not logged in</h1><br /><br /></div> }

        {!isReg && ! isLog ? <div><a href="/Register" className="bigHref">Click here to register</a></div> 
        : null }
        
        {isReg && !isLog ? <div><a href="/Login" className="bigHref">Click here to Login</a></div> 
        : null }

      </div><br />
      
    </div>

    );
}

export default MyOrders;