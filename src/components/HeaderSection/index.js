import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import Layout from '../Layout';




function HomeSection(){
return(
    <React.Fragment>
        <Layout>
            <div className="section_header">
               
                <div className="section_text">
                <h5 style={{textAlign:"center", color:"#bdcff8", margin:"1rem"}}>In 4 easy steps</h5>
                   <h3> HOW IT WORKS</h3>
                </div>
                <div className="sec_icon">
                <Container>
                <Row>
                    <Col md={3}>
                    <img className="sec_img" src="./img/order.png" alt="" />
                    <h6 className="icon_text">BOOK ORDER</h6>
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/truck (2).png" alt="" />
                    <h6 className="icon_text">FREE PICKUP</h6>
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/washing-machine.png" alt="" />
                    <h6 className="icon_text">PROCESSING</h6>
                    </Col>
                    <Col md={3}>
                    <img className="sec_img" src="./img/truck (1).png" alt="" />
                    <h6 className="icon_text">DELIVERY</h6>
                    </Col>
                
                </Row>
                </Container>
            </div>

            <div className="sub_section">

            <div className="section_text">
                <h5 style={{textAlign:"center", color:"#bdcff8", margin:"1rem"}}>Our Features</h5>
                   <h3> WHY CHOSSE US</h3>
                </div>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div>
                              <span> <img className="sub_img" src="./img/like (1).png" alt="" /></span>
                              <span className="sub_header">Persionalized Experience</span>
                              </div>
                              <span>
                              We take utmost care of your clothes, the laundry is done according to the cloth type and the nature of stains.
                              </span>
                            </Col>
                            <Col md={4}>
                            <div>
                              <span> <img className="sub_img" src="./img/money.png" alt="" /></span>
                              <span className="sub_header">Affordable Pricing</span>
                              </div>
                              <span>
                              Prices that suit your pocket is one of our priority. You can choose one of our 4 pricing plans according to your needs.
                              </span>
                            </Col>
                           <Col md={4}>
                           <div>
                              <span> <img className="sub_img" src="./img/plane (1).png" alt="" /></span>
                              <span className="sub_header">Convenience</span>
                              </div>
                              <span>
                              With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.
                              </span>
                            </Col>

                            
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                        <Col md={4}>
                           <div>
                              <span> <img className="sub_img" src="./img/champion.png" alt="" /></span>
                              <span className="sub_header">Quality</span>
                              </div>
                              <span>
                              We use the best in class products, to assure that your favorite clothes are always there for you to wear.
                              </span>
                            </Col>

                            <Col md={4}>
                           <div>
                              <span> <img className="sub_img" src="./img/truck (1).png" alt="" /></span>
                              <span className="sub_header">Express Delivery</span>
                              </div>
                              <span>
                              Forgot to wash your clothes for interview/business meeting, never mind. With our super express delivery, we would get your laundry done in less than 8 hours.
                              </span>
                            </Col>

                            <Col md={4}>
                           <div>
                              <span> <img className="sub_img" src="./img/diamond.png" alt="" /></span>
                              <span className="sub_header">Instant Order Update</span>
                              </div>
                              <span>
                              Regular updates of your order, to help you keep a track of your laundry and plan accordingly.
                              </span>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </div>
        </Layout>

    </React.Fragment>
);


}

export default HomeSection;