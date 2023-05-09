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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap eco-system
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  //ListGroupItem,
  //ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core ecosystem

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  return (
    <>
    
      <div className="wrapper spcer"> 
        <div className="page-header">
          
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Official Contract <br />
                  <span className="text-white"> Addresses</span>
                </h1>
                <p className="text-white mb-3">
                Use the below contract addresses when interacting with boostr eco-system.
                This is an extremely important step to ensure secure interactions 
                with the Boostr projects. This helps to ensure that users' funds stay secure &amp; that 
                their transactions are going to the correct address.
                </p>
                <div className="btn-wrapper mb-5">
                <p className="category text-success d-inline">
                rpWZ28TyCoXLKarAuuaZD1Td4BezsKFArJ
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    size="sm"
                  >
                    <i className="tim-icons icon-coins" /> XRPL
                  </Button>

                <p className="category text-success d-inline">
                  0xB500BCd2A135b2b2b24da84E09AAFB05f0749631
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    size="sm"
                  >
                    <i className="tim-icons icon-coins" /> Mbr NFT
                  </Button>
                  <p className="category text-success d-inline">
                  0x170E71c034791b1F9Fb19C1ae8cD5c2A66fb6dF4
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    size="sm"
                  >
                    <i className="tim-icons icon-coins" /> Gov Token
                  </Button>
                  <p className="category text-success d-inline">
                  0x5c035F0E633961b6F53fF2B7EfC7423229ecAAb8
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    size="sm"
                  >
                    <i className="tim-icons icon-coins" /> Gov Vote
                  </Button>
                  
                </div>
                <div className="btn-wrapper">
                  
                </div> 
              </Col>
              <Col lg="4" md="3">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/ripp.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-atom text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">pending</CardTitle>
                                <p />
                                <p className="card-category">Farmers</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-money-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">5 Bill</CardTitle>
                                <p />
                                <p className="card-category">Max Supply</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-spaceship text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">222</CardTitle>
                                <p />
                                <p className="card-category">Members</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-world text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">49.95%</CardTitle>
                                <p />
                                <p className="card-category">Governance</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>  
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5 spcer">
                    <h1>
                      Boostr <i className="icon icon tim-icons icon-spaceship" /><br />
                      EcoSystem
                    </h1>
                    <p>
                    Built by developers for entrepreneurs &amp; aspiring web3 
                    aficionados. Boostr fosters the creation of innovative use-cases with 
                    distributed ledger technology (DApps). The eco-system is composed of 10% marketing,
                    20%  farming, 40% community, 20% p2e projects &amp; 10% development team,
                    allowing business owners to create, launch &amp; manage their own DApps
                    while providing them with the tools &amp;resources they need to develop &amp; 
                    maintain the applications. 
                    </p>
                    <br />
                    <p>
                     The farming system provides incentives for members to remain
                     active &amp; engaged with the community curated projects, while the p2e projects allow 
                     users to receive additional rewards for their learning &amp; particpation. The 
                     development team is also involved in the project, providing technical 
                     &amp; design support to increase the likelyhood of project success. All of these
                     components work together to foster a thriving &amp; collaborative eco-system.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://sologenic.org/market-index/STR+rpWZ28TyCoXLKarAuuaZD1Td4BezsKFArJ"
                      
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    
        <section className="section section-lg">
    
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">DAO Member Benefits</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-bulb-63" />
                      </div>
                      <h4 className="info-title">Education</h4>
                      <hr className="line-warning" />
                      <p>
                      We launch testnet projects - these projects 
                      don't require real money, &amp; instead give 
                      our members a safe &amp; secure environment in
                      which to learn &amp; make decisions about the market
                      without risking their funds. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Lower Entry Point</h4>
                      <hr className="line-primary" />
                      <p>
                      Lower entry points help new members enter the market at little to no risk.
                      Boostr offers access to web3 projects, built on XRPL, 
                      Ether, Polygon &amp; Cosmos. Allowing them to start using 
                      Web 3 technologies with a minimal upfront cost. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-check-2" />
                      </div>
                      <h4 className="info-title">Verified Projects</h4>
                      <hr className="line-success" />
                      <p>
                      Verified projects have the potential to bring greater
                      utility &amp; value to the Boostr ecosystem, as they are
                      subject to higher standards of quality &amp; security.
                      As such, verified projects are vital to Boostr as they
                      promote optimal member experience.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className="section section-lg">
      
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Boostr <i className="icon icon tim-icons icon-spaceship" /></h5>
                    <CardTitle tag="h2">Roadmap</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
       

      </div>
    </>
  );
}
