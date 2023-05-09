import React from "react";
//import classnames from "classnames";
// reactstrap components
import {
  
  Container,
  Row,
  
} from "reactstrap";


export default function Tabs() {
  
  return (
    <div
    className="section section-tabs"
    data-background-color="black"
    id="tabs-section"
  >
      
      <Container className="spcer">
      
        <div className="title">
          <h3 className="mb-3">The DAO is currenty launched on the Goerli Testnet limited to 200ish users until phase 2.</h3>
        </div>
        <Row>
        <iframe id="bdao "title="bdao" src="https://dao.boostr.wiki"
          scrolling="no"
          frameborder="0" marginheight="0px"
          marginwidth=".5em" height="650px"
          width="1200px" allowfullscreen>
        </iframe>
        </Row>
      </Container>
    </div>
  );
}
