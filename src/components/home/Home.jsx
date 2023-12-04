import React from "react";
import Card from "./Card.jsx";
import burgers from "./burgers.js";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

function Home() {

    const [isClicked, setisClicked] = React.useState(false);

    function handleClick() {
        setisClicked(true);
        console.log("clicked");
    }

    return ( 

    <div>
      <div className="aboutUs">Home Page</div>
      <div className="home">
        <h1>Burger Bar</h1>
        <h2>Try our delicious burgers</h2><br />
        <button onClick={handleClick} className="seeMenu">See Our Menu</button><br />
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

export default Home;