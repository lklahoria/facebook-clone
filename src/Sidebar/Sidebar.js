import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import { ExpandMoreOutlined, LocalHospital, PeopleOutline, Storefront, VideoLibrary } from "@material-ui/icons";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import userEvent from "@testing-library/user-event";
import { useStateValue } from "../StateProvider1/StateProvider";

function Sidebar() {

  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
      <SidebarRow
        title={user.displayName}
        src={user.photoURL}
      />
      <SidebarRow title="COVID-19 information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleOutline} />
      <SidebarRow title="Messange" Icon={ChatIcon} />
          <SidebarRow title="MarketPlace" Icon={Storefront} />
          <SidebarRow title="Videos" Icon={VideoLibrary} />
          <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
