import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import Layout from '../Layout';




function PriceTable(){
return(
    <React.Fragment>
        <Layout>
            <div> 
               <div className="price_header">
                <p style={{color:"#454ee8"}}> Our Pricing Table</p>

                <h3>
                AFFORDABLE PRICES
                </h3>
               </div>
             
            
                <Container>
                <Row>
                    <Col md={3}>
                
                    <div className="price_card">
                            <h4>Regular Bag</h4>

                            <h1>10$</h1>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>
                            <br/>
                            <br/>

                            <button className="price_but">
                                Order Now
                            </button>
                    </div>

                    </Col>
                    <Col md={3}>
                    <div className="price_card">
                            <h4>Regular Bag</h4>

                            <h1>10$</h1>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <br/>
                            <br/>

                            <button className="price_but">
                                Order Now
                            </button>
                    </div>

                    </Col>
                    <Col md={3}>
                    <div className="price_card">
                            <h4>Regular Bag</h4>

                            <h1>10$</h1>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <br/>
                            <br/>

                            <button className="price_but">
                                Order Now
                            </button>
                    </div>

                    </Col>
                    <Col md={3}>
                    <div className="price_card">
                            <h4>Regular Bag</h4>

                            <h1>10$</h1>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>

                            <p>5rbs</p>

                            <hr/>
                            <br/>
                            <br/>

                            <button className="price_but">
                                Order Now
                            </button>
                    </div>

                    </Col>
                
                </Row>
                </Container>
            

           <div className="price_section">

               <Container>
                   <Row>
                       <Col md={6}>
                       <h3 className="price_h">Special Items</h3>

                       <span>
                       Fancy Dresses
                       </span>
                       <span className="price_right"> $527.99+(Call)</span>

                       <hr/>

                       <span>
                       Blankets
                       </span>
                       <span className="price_right"> $14.99</span>

                       <hr/>
                       <span>
                    
                            Comforters
                       </span>
                       <span className="price_right"> $29.99</span>

                       <hr/>
                       <span>
                     
                       Down Comforters
                       </span>
                       <span className="price_right"> $34.99</span>

                       <hr/>
                       <span>
                       Vests
                       </span>
                       <span className="price_right"> $6.39</span>

                       <hr/>
                       <span>
                       Duvet Cover (dry clean)
                       </span>
                       <span className="price_right"> $29.99</span>

                       <hr/>

                       </Col>

                       <Col md={6}>
                       
                       <h3 className="price_h"> Leather Items</h3>

                            <span>
                                Bags                      
                            </span>
                            <span className="price_right">     $15.65</span>

                            <hr/>

                            <span>
                            Standard Shoes
                            </span>
                            <span className="price_right">   $10.99</span>

                            <hr/>
                            <span>
                           Boots Above Mid-Calf
                          
                            </span>
                            <span className="price_right">  $37.99</span>

                            <hr/>
                            <span>
                           
                            Suede
                            </span>
                            <span className="price_right">   add $30.00</span>

                            <hr/>
                            <span>
                            Leather Reconditioning & Shines 
                            </span>
                            <span className="price_right">   $26.99</span>

                            <hr/>
                            <span>
                            Belts
                            </span>
                            <span className="price_right">  $2.49</span>

                            <hr/>
                       </Col>
                   </Row>

                   <Row>
                       <Col md={6}>
                       <h3 className="price_h"> Dry cleaning</h3>

                       <span>
                       Tie, Scarf
                       </span>
                       <span className="price_right"> $5.99</span>

                       <hr/>

                       <span>
                       Blouse, Sweater
                       </span>
                       <span className="price_right"> $6.39</span>

                       <hr/>
                       <span>
                       Pants, Jeans, Skirt
                       </span>
                       <span className="price_right"> $6.39</span>

                       <hr/>
                       <span>
                     
                        Blazer, Jacket
                       </span>
                       <span className="price_right"> $8.99</span>

                       <hr/>
                       <span>
                       Coat, Heavy Jacket, Dress
                       </span>
                       <span className="price_right"> $11.99</span>

                       <hr/>
                       <span>
                       Belts
                       </span>
                       <span className="price_right"> 1.99$</span>

                       <hr/>

                       </Col>

                       <Col md={6}>
                       
                       <h3 className="price_h"> Special Handling of Fess</h3>

                            <span>
                            Boxed Shirts
                            </span>
                            <span className="price_right"> $5.99</span>

                            <hr/>

                            <span>
                            French Cuffs
                            </span>
                            <span className="price_right"> $5.99</span>

                            <hr/>
                            <span>
                           
                                Beads / Special Decoration
                            </span>
                            <span className="price_right"> 5.99$</span>

                            <hr/>
                            <span>
                           
                                Silk / Rayon / Linen
                            </span>
                            <span className="price_right"> 5.99$</span>

                            <hr/>
                            <span>
                            Hand Wash
                            </span>
                            <span className="price_right"> 5.99$</span>

                            <hr/>
                            <span>
                            Crease on Sleeves
                            </span>
                            <span className="price_right"> 5.99$</span>

                            <hr/>
                       </Col>
                   </Row>
               </Container>
           </div>
            </div>
        </Layout>

    </React.Fragment>
);


}

export default PriceTable;