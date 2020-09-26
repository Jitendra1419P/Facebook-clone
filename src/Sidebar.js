import React from 'react'
import SidebarRow from "./SidebarRow"
import "./Sidebar.css"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return ( <div className="sidebar">
       <SidebarRow  src={user.photoURL} title={user.displayName}/>
       <SidebarRow  Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
       <SidebarRow  Icon={EmojiEmotionsIcon} title="Pages"/>
       <SidebarRow  Icon={PeopleIcon} title="Friend"/>
       <SidebarRow  Icon={ChatIcon} title="Messenger"/>
       <SidebarRow  Icon={StorefrontIcon} title="Marketplace"/>
       <SidebarRow  Icon={VideoLibraryIcon} title="Videos"/>
       <SidebarRow  Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    );
}

export default Sidebar