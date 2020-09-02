import React from "react";
import '../App.scss';
import Layout from "../components/Layout";
import PriceTable from "../components/PriceTable"




function Price (){
return(
<React.Fragment>
<Layout>        
      <main id="main">
           <div className="text_left">
        <span className="head_text">Pricing</span>
                <br/>
        <span>Our prices suit your pocket is one of our priority. <br/>
        You can choose one of our 4 pricing plans according to your needs.

.
        </span>
                <br/>
        <button className="home_but">Learn more</button>
        </div>
      

   <span className="head_img"> <img className="about_img" src="./img/undraw_personal_finance_tqcd.png" alt="" /> </span>
       <div>
            <PriceTable/>
        
        </div>
    </main>
    </Layout>

</React.Fragment>


);



}


export default Price;