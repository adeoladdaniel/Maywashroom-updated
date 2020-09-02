import React from "react";
import '../App.scss';
import Layout from "../components/Layout";
import HomeSection from "../components/HeaderSection";
// import {Container, Col, Row} from 'react-bootstrap';




function Home (){
return(
<React.Fragment>
    <Layout>        
      <main id="main">
           <div className="text_left">
        <span className="head_text">Maywashroom</span>
                <br/>
        <span>The Laundry Company provides a premium laundry,<br/>
         ironing, dry cleaning and alteration service for <br/>
          domestic and small businesses in the Nigeria.
        </span>
                <br/>
        <button className="home_but">Learn more</button>
        </div>
      

   <span className="head_img"> <img className="h_img" src="./img/technical-service-worker-repairing-washing-machine_179970-1213-removebg-preview.png" alt="" /> </span>
       <div>
              
               <HomeSection/> 
               
        
        </div>
    </main>
    </Layout>
 



</React.Fragment>


);



}


export default Home;