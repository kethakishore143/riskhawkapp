import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";

import "./Navbar.css"



const Navbar = () => {
    return (
        <div>
            <div className='nav_container'>
                <p className='chat'>Chat/Feed Chat</p>
                <div className='home_icon_container'>
                    <AiOutlineHome className='home_icon' />
                    <span className='process_owner_container'>Process Owner HOD</span>
                    <span className='Admin_container'>Admin</span>
                    <span className='palakbansal'>Palak Bansal</span>
                    <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733069172/98ac8b5440b32e95a31a25f0b7d349ac_rpwesv.jpg" alt="profileimage" className='profile_img' />
                    <IoSettingsOutline className='settings_icon' />
                    <PiSignOut className='sign_out_icon' />
                    <span className='logout_btn'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar