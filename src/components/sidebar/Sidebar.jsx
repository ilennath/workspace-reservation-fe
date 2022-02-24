import "./sidebar.css";
import {
  Dashboard,
  EventSeat,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Main menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
            <li className="sidebarListItem">
              <EventSeat className="sidebarIcon" />
              Booking
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">General</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
