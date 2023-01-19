import logo from "./logo.png";
import { Link } from "@mui/material";
import {
  MdDashboard,
  MdPerson,
  MdDesignServices,
  MdSettings,
  MdReport,
  MdHelp,
  MdProductionQuantityLimits,
} from "react-icons/md";

const Sidebar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/">
            <MdDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdPerson />
            My-Profile
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdDesignServices />
            Services
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdProductionQuantityLimits />
            Products
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdReport />
            Reports
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdSettings />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdHelp />
            Help-Desk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
