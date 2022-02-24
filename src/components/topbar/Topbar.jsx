import React from "react";
import "./topbar.css";
import { NotificationsNone, Search, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logoRow">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" alt="" className="topLogo" />
          </div>
          <div className="titleRow">
            <span className="logo">Reservation</span>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Search />
          </div>
          <img src="https://i.pinimg.com/564x/bc/59/fe/bc59fe5b01169f5373fb40be7d482c53.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
