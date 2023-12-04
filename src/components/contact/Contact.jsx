import React from "react";

function Contact() {

    const [contact, setContact] = React.useState({
        name: "",
        email: "",
        feedback: ""
      });

    const [isClicked,setisClicked] = React.useState(false);
  
      function handleChange(event) {
        const { name, value } = event.target;
    
        setContact(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    function handleClick(event) {
        console.log(contact);
        setisClicked(prevValue => { return !prevValue});
        event.preventDefault();
      }

    return ( 

    <div>

      <div className="aboutUs">Contact Us</div>
        
        <div className="contactForm">

    <div className="contactFormInner">
      
      <h3>Contact Us</h3>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} name="name" type="text" placeholder="What's your name?" value={contact.name} required /><br />
        <input onChange={handleChange} name="email" type="text" placeholder="What's your email?" value={contact.email} required /><br />
        <textarea onChange={handleChange} name="feedback" placeholder="What's your feedback?" rows="8" cols="21" value={contact.feedback} required></textarea><br />

        <input type="submit" value="Send" />
      </form>
      
    </div>

        </div><br /><br />

        {isClicked ?  
        <div className="popUp">
          <h3>Thank you {contact.name} &nbsp; &nbsp; <button onClick={handleClick}>X</button></h3>
          <br /><br />
          Your feedback was as follows:<br /><br />{contact.feedback}
          <br /><br />
           We will send you a confirmation email to {contact.email}. 
        </div>

        : null }
      
</div>

    );
}

export default Contact;