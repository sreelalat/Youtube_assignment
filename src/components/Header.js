import React from 'react'
import MenuIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../assets/images/youtube-logo.png';
import '../scss/Header.scss';

function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header_left">
                    <div className="header_logo">
                        <img src={Logo} alt="logo" className="logo" /> 
                        <MenuIcon className="header_hamburger"/>
                    </div>
                    <div className="header_search">
                        <div className="search" >
                            <input
                                placeholder="Type to search..."
                            />
                            <SearchIcon className="header_searchIcon" />
                        </div>
                        <button className="header_btnUpload">UPLOAD</button>
                    </div>
                </div>
                <div className="header_icons">
                    <div className="header_iconLeft">
                        <Badge badgeContent={1} color="primary">
                            <MailIcon className="mail_icon"/>
                        </Badge>
                        <Badge badgeContent={3} color="primary">
                            <NotificationsIcon className="notification_icon" />
                        </Badge>
                    </div>
                    <div className="user_details">
                        <Avatar 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GUzZs-ZOofVDZeQO3VPVKv5rCj5J8ofH7g&usqp=CAU"
                            alt=""
                        />
                        <div className="user-detailsText">
                            <p className="user_name">Sreelal</p>
                            <p>9 Subscribers</p>
                            <p className="user_status">Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
