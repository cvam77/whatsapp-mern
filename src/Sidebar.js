import React from 'react'
import '../src/Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from '../src/SidebarChat';


function Sidebar() {
    return (
        <div className='sidebarbar'>
            {/* <h1>I am a sidebar</h1> */}
            <div className="sidebar_header">
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton> 
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                  <div className="sidebar_searchContainer">
                      <SearchOutlined/>
                      <input placeholder="Search or start new chat" type="text"/>
                  </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
