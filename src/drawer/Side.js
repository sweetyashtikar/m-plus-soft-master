import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GiHamburgerMenu } from "rreact-icons/gi";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import HelpDesk from "../pages/Help-Desk";
import MyProfile from "../pages/My-Profile";
import Products from "../pages/Products";
import Reports from "../pages/Reports";
import Services from "../pages/Services";
import Settings from "../pages/Settings";
import "./Sidebar.css";

function Side() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>

        <Sidebar show={showNav} />
        <div className="main">
          <Route path="/myprofile" exact={true} components={MyProfile} />
          <Route path="/helpdesk" exact={true} components={HelpDesk} />
          <Route path="/dashboard" exact={true} components={Dashboard} />
          <Route path="/products" exact={true} components={Products} />
          <Route path="/reports" exact={true} components={Reports} />
          <Route path="/settings" exact={true} components={Settings} />
          <Route path="/services" exact={true} components={Services} />
        </div>
      </Router>
    </>
  );
}

export default Side;
