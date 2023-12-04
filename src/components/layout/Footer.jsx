import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const year = new Date().getFullYear();

console.log("year is " + year);

function Footer() {
  
    return (
      
      
      <footer> 
        <div className="flex">
        <div className="left">
            <p class="burgerText">Burger Bar</p>
            <p className="smallWhite">Our Goal is to delight you with our delicious burgers</p>
            <p className="smallWhite">We welcome your feedback at <a href="mailto:feedback@burgershop.com">feedback@burgershop.com</a></p>
        </div>

        <div className="center"><p>Copyright &#169; {year}</p></div>

        <div className="right whiteText">
        
        Follow Us:<br /><br />
        <TwitterIcon /> &nbsp; &nbsp; <InstagramIcon />  &nbsp; &nbsp;  <YouTubeIcon />  &nbsp; &nbsp;  <FacebookIcon />
        
        </div>

        </div>
      </footer> 
    );
  }
  
  export default Footer;