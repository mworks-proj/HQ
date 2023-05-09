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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import "assets/mw/custom.css";


export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToTabs = () => {
    document
      .getElementById("tabs-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Boo</span>str <i className="icon icon tim-icons icon-spaceship" />
          
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Join us in building projects on web3 that benefit communities. By uniting our efforts, we are providing greater access to advanced technologies and resources.
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#bdao" onClick={(e) => e.preventDefault()}>
                 Boostr
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/BoostrDao"
                
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
          
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://tinyurl.com/BoostrMedium"
               
                title="Follow us on Medium"
              >
                <i className="fab fa-medium" />
                <p className="d-lg-none d-xl-none">Medium</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
              <DropdownItem onClick={scrollToTabs}>
                  <i className="tim-icons icon-bank" />
                  DAO
                </DropdownItem>
                <DropdownItem href="https://docs.boostr.wiki/testnet/">
                  <i className="tim-icons icon-notes" />
                  Docs
                </DropdownItem>
                <DropdownItem href="https://tinyurl.com/STRtrust">
                  <i className="tim-icons icon-coins" />
                  XRPL Trustline
                </DropdownItem>
                <DropdownItem href="https://tinyurl.com/buystr">
                  <i className="tim-icons icon-money-coins" />
                  Bag $STR
                </DropdownItem>
                <DropdownItem href="https://tinyurl.com/BoostrMedium">
                  <i className="tim-icons icon-chart-pie-36" />
                  Lite Paper
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              
              <Button
                className="nav-link d-none d-lg-block danimations"
                color="default"
                onClick={scrollToTabs}
              >
                <i className="tim-icons icon-bank" /> DAO
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
