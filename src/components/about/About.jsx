import React from "react";
import Card from "../home/Card.jsx";
import burgers from "../home/burgers.js";
import MouseIcon from '@mui/icons-material/Mouse';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import nelson from "../../assets/nelson.png";

function About() {

    const [isClicked, setisClicked] = React.useState(false);

    function handleClick() {
        setisClicked(true);
        console.log("clicked");
    }

    return ( 

    <div>

      <div className="aboutUs">About Us</div>
      <div className="aboutUsText">
        <p>
            <h3>Burger Shop</h3>
            This is Burger Shop. The place<br />
            for the tastiest burgers on the entire<br />
            planet.<br /><br />
        </p>
        <p>
            Explore the various types of food<br />
            and burgers. Click below to see the<br />
            menu<br /><br />
            <button onClick={handleClick} className="cartButton"><MouseIcon /></button><br />
        </p>
      </div>
      <div className="nelson">
          <div className="nelsonImg">
            <img src={nelson} alt="Nelson" height="90px" className="nelsonImg" />
          </div>
          <div className="nelsonText">
            <h4>Founder</h4>
            <p className="smallWhite">I am Nelson, the founder of the Burger Shop.<br />
            Dedicated to bring you savoury delights.</p>
          </div>
      </div>
      
      <div class="row">
        <div className="column end"></div>
        <div className="column main">{isClicked ? 
              <Card
                id={burgers[0].id}
          	  	img={burger1}
                price={burgers[0].price}
                desc={burgers[0].desc}
              />
              : <div className="blank"></div>}
        </div>

        <div className="column main">{isClicked ? 
              <Card
                id={burgers[1].id}
          	  	img={burger2}
                price={burgers[1].price}
                desc={burgers[1].desc}
              />
              : null }
        </div>

        <div className="column main">{isClicked ? 
              <Card
                id={burgers[2].id}
          	  	img={burger3}
                price={burgers[2].price}
                desc={burgers[2].desc}
              />
              : null }
        </div>
        <div className="column end"></div>

    </div>

</div>

    );
}

export default About;