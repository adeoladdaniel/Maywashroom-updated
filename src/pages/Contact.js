import React from "react";
import '../App.scss';
import Layout from '../components/Layout';
import ContactSection from "../components/ContactSection"




function Contact (){
return(
<React.Fragment>
<Layout>        
      <main id="main">
           <div className="text_left">
        <span className="head_text">Contact Us</span>
                <br/>
        <span>If you do not find the answer to your questions related to our laundry services,<br/>
         feel free to contact us. We are here to help.

.
        </span>
                <br/>
        <button className="home_but">Learn more</button>
        </div>
      

   <span className="head_img"> <img className="about_img" src="./img/undraw_contact_us_15o2.png" alt="" /> </span>
       <div>
       
        <ContactSection/>
        </div>
    </main>
    </Layout>

</React.Fragment>


);



}


export default Contact;