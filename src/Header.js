import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { logout } from "./features/userSlice";

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://lh3.googleusercontent.com/proxy/4iH5uhrbCrWy3DgxzpM_YFRQy98OsxJR-1-leIStbnFb0JhiaIXYM1Q9q7AxQemarodNmrE4cv_QEIVAsVFpm9YtEix8GYLWkTy2uvIGONpenhi6Z-FdAp-z72cX" alt="" />

                <div className="header__search">
                    {/** searchIcon */}
                    <SearchIcon />
                    <input placeholder="search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
