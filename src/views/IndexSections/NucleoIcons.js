/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title"> Boostr <i className="icon icon-sm tim-icons icon-spaceship" /></h2>
            <h4 className="description">
              With courage and a commitment to excellence, 
             Boostr is a movement that had to happen. This project 
             will open up a world of opportunities and bring 
             greater access to web 3 technology to entrepreneurs and business owners.
            </h4>
           <br></br>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
            Join us in building projects on web3 that benefit communities. <br></br>By uniting our efforts, we are providing greater access to advanced<br></br> technologies and resources.
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
