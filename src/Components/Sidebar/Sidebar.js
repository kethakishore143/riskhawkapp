import React from 'react'
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { AiOutlineFileDone } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";
import { LiaSitemapSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { TbCircleNumber1 } from "react-icons/tb";
import { Bs2Circle } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { SlWrench } from "react-icons/sl";


import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div className='sidebar_container'>
            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733041619/28fdeb1cca31293321203f289a781c25_kczb8t.png" alt="riskhawk" className='logo_img' />

            <div className='listitmes'>

                <TbReportSearch className='items_icons' />
                <div className='sidebar_items'>
                    <p className='icon_content'>Internal Audit</p>
                    <MdOutlineKeyboardArrowRight className='greater_arrow' />
                </div>

            </div>
            <div className='listitmes'>
                <AiOutlineFileDone className='items_icons' />
                <div >
                    <p className='icon_content'>UAT Testing</p>
                </div>

            </div>

            <div className='listitmes'>
                <IoIosLink className='items_icons' />
                <div className='sidebar_items'>
                    <p className='icon_content'>Intract</p>

                    <MdOutlineKeyboardArrowRight className='greater_arrow' />
                </div>

            </div>

            <div className='listitmes'>
                <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733058939/users_pgskht.png" alt="queue" className='queue_icons' />
                <div >
                    <p className='icon_content'>Queue</p>
                </div>

            </div>
            <div className='listitmes'>
                <LiaSitemapSolid className='items_icons' />
                <div >
                    <p className='icon_content'>Workflow</p>
                </div>

            </div>

            <div className='listitmes'>
                <FiUser className='items_icons' />
                <div >
                    <p className='icon_content'>Admin</p>
                </div>

            </div>

            <div className='listitmes'>
                <HiOutlineCube className='items_icons' />

                <div >
                    <p className='icon_content'>Assest</p>
                </div>

            </div>

            <div className='listitmes'>
                <FiUsers className='items_icons' />

                <div >
                    <p className='icon_content'>Parent</p>
                </div>

            </div>
            <div className='listitmes'>
                <TbCircleNumber1 className='items_icons' />

                <div >
                    <p className='icon_content'>Option One</p>
                </div>

            </div>
            <div className='listitmes'>
                <Bs2Circle className='items_icons' />

                <div >
                    <p className='icon_content'>Option Two</p>
                </div>

            </div>
            <div className='listitmes'>
                <SlWrench className='items_icons' />

                <div >
                    <p className='icon_content'>All Accessories</p>
                </div>

            </div>

            <div className='listitmes'>

                <TbReportSearch className='items_icons' />
                <div className='sidebar_items'>
                    <p className='icon_content'>Internal Audit</p>
                    <MdOutlineKeyboardArrowRight className='greater_arrow' />
                </div>

            </div>
            <div className='listitmes'>

                <img src=' https://res.cloudinary.com/dyq2jhzds/image/upload/v1733061876/star-06_lnbgmi.png' alt="star" className='queue_icons' />
                <div className='sidebar_items'>
                    <p className='icon_content'>Decorating</p>
                    <MdOutlineKeyboardArrowRight className='greater_arrow' />
                </div>


            </div>

            <div className='listitmes'>
                <GoGift className='items_icons' />

                <div >
                    <p className='icon_content'>Presenting</p>
                </div>

            </div>

        </div>
    )
}

export default Sidebar