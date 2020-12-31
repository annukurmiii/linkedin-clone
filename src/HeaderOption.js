import { Avatar } from '@material-ui/core';
import React from 'react';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />} {/** if icon is passed than only it will render icon image. */}
             {avatar && (
                <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
             )}
                
            
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
