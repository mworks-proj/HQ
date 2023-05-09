import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view : remove ( // )  to show view on page and add the <NameofSection/> inside main class
//import Basics from "views/IndexSections/Basics.js";
//import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
//import Pagination from "views/IndexSections/Pagination.js";
//import Notifications from "views/IndexSections/Notifications.js";
//import Typography from "views/IndexSections/Typography.js";
//import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import JavaScript from "./IndexSections/JavaScript";
//import Basics from "./IndexSections/Basics";
//import Notifications from "./IndexSections/Notifications";
//import Download from "./IndexSections/Download";
//import Signup from "views/IndexSections/Signup.js";
//import Examples from "views/IndexSections/Examples.js";
//import Download from "views/IndexSections/Download.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          
          <JavaScript />
        
          <Tabs />

          <NucleoIcons />
          
        </div>
        <Footer />
      </div>
    </>
  );
}
