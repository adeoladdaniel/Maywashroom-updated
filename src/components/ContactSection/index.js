import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import Layout from '../Layout';



function ContactSection(){
return(
    <React.Fragment>
        <Layout>
            <div className="contact_sec">
               
              
                <div className="sec_icon">
                <Container>
                <Row>
                    <Col md={3}>
                    <img className="sec_img" src="./img/home.png" alt="" />
                    <h6 className="icon_text"><b>ADDRESS</b><br/>
                    </h6>
                    <p>21 alhaji salisu Street Obanikoro </p> 
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/phone.png" alt="" />
                    <h6 className="icon_text">Phone:</h6>
                    <p>09052027107</p>
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/email.png" alt="" />
                    <h6 className="icon_text">E-Mail:</h6>
                    <p> Info@Maywashroom.Com</p>
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/clock.png" alt="" />
                    <h6 className="icon_text">Opening Hours</h6>
                    <p>8.00 - 18.00 Mon-Sat</p>
                    </Col>
                
                </Row>
                </Container>
            </div>

           
            </div>
        </Layout>

    </React.Fragment>
);


}

export default ContactSection;