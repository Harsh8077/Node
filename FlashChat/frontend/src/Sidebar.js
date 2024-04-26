import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar,IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src=""/>
                <div className='sidebar__headerRight'>
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

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;