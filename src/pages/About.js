import React from "react";
import '../App.scss';
import Layout from "../components/Layout";
import AboutSection from  "../components/AboutSection" 



function About (){
return(
<React.Fragment>

<Layout>        
      <main id="main">
           <div className="text_left">
        <span className="head_text">About Us</span>
                <br/>
        <span>We are a modern innovative Textile Services Company,
            <br/> equipped to support the hospitality, commercial,<br/>
         education and industrial communities of our areas.

.
        </span>
                <br/>
        <button className="home_but">Learn more</button>
        </div>
      

   <span className="head_img"> <img className="about_img" src="./img/undraw_team_spirit_hrr4 (1).png" alt="" /> </span>
       <div>
              
               <AboutSection/>
        
        </div>
    </main>
    </Layout>
</React.Fragment>


);



}


export default About;