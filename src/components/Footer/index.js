import React from "react";
import { Container,Row,Col } from "react-bootstrap";
// import '../App.scss';
// import {Link} from 'react-router-dom';



function Foot(){
return (
<React.Fragment>
    <div className="footer">
        <div>

            <Container>
                <Row>
                    <Col md={4}>
                    <img className="footer_link" src="./img/Group 4.png" alt =""/>
                    <br/>

                    <br/>
                    <p>We offer a complete range of textile care services, backed by the latest technical knowledge and resources.</p>
                    <input className="form_input"   placeholder="  Enter your e-mail here "             />
                   <button className="footer_but"> SUSCRIBE</button>
                    </Col>

                    <Col md={4}>
                        <h5 style={{margin:"1rem"}}>
                        Information
                        </h5>
                        <ul className="_list">
                            <li>Contact Us</li>
                            <li>About us</li>
                            <li>News & Articles</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    
                    </Col>

                    <Col md={4}>





                    <h5 style={{margin:"1rem"}}>
                    Services
                        </h5>
                        <ul className="_list">
                            <li>Drop off Laundry</li>
                            <li>Free Pick-Up and Delivery</li>
                            <li>Eco-Friendly Products</li>
                            <li>Fast & High Quality</li>
                            <li>Self Service and Laundromat</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
<hr/>

<div className="socials">
<span><i className="fa fa-instagram"></i></span>
<span><i className="fa fa-twitter"></i></span>
<span><i className="fa fa-facebook"></i></span>

</div>
    </div>
</React.Fragment>



);


}


export default Foot;


















