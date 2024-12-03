import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowClockwise, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuUserPlus } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";
import { TbSearch } from "react-icons/tb";
import { RiPushpinLine } from "react-icons/ri";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
import { TiArrowRightOutline } from "react-icons/ti";






import "./Home.css"
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className='header_container'>
                <div className='cb_cards'>
                    <span className='cb_container'>CB</span>
                    <p className='cb_content'>Cheyenne Bergson</p>
                </div>
                <div className='cb_cards'>
                    <span className='cb_container1'>CB</span>
                    <p className='cb_content'>Jonathan Higgins</p>
                </div>
                <div className='cb_cards'>
                    <span className='cb_container1'>CB</span>
                    <p className='cb_content'>Capt. Trunk</p>
                </div>
                <div className='cb_cards'>
                    <span className='cb_container1'>CB</span>
                    <p className='cb_content'>Hannibal Smi..</p>
                </div>
                <div className='cb_cards'>
                    <span className='cb_container1'>CB</span>
                    <p className='cb_content'>Capt. Trunk</p>
                </div>
                <div className='cb_cards'>
                    <span className='cb_container1'>CB</span>
                    <p className='cb_content'>Hannibal Smi..</p>
                    <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733110586/Frame_1171287397_hh84dh.png" alt="two" />
                </div>
                <div className='msgcb_cards'>
                    <FaRegComments className='comments' />

                    <p className='cb_content'>Cheyenne Bergson</p>
                    <MdOutlineKeyboardArrowRight className='greater_arrow' />
                </div>
            </div>
            <div className='Home_container'>
                <div>
                    <div className='hannible_main'>
                        <div>
                            <div>
                                <div className='hannible_container' >
                                    <div>
                                        <span className='cb_container2'>CB</span>
                                    </div>
                                    <div className='location_cotainer'>
                                        <h3 className='cb_content'>Hannibal Smith</h3>
                                        <IoLocationOutline className='location_content' />
                                        <span className='location_content'>1 Market Street San Francisco, CA 94105</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='id_container'>
                            <p className='customerId'>Custmor ID</p>
                            <div className='number_container'>
                                <span className='number'>12345</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='id_container'>
                            <p className='customerId'>Email Address</p>
                            <div className='number_container'>
                                <span className='number'>rachel@sample.com</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='id_container'>
                            <p className='customerId'>PhoneNumber</p>
                            <div className='number_container'>
                                <span className='number'>8051298905</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='add_container'>
                            <AiOutlinePlusCircle className='plus_icon' />
                            <span className='add_content'>Add</span>
                        </div>
                        <div>

                        </div>

                        <div className='id_container'>
                            <p className='customerId'>Loyalty Tier</p>
                            <div className='number_container'>
                                <span className='number'>Silver</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='id_container'>
                            <p className='customerId'>Segment</p>
                            <div className='number_container'>
                                <span className='number'>Sleepy Customer</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='add_container'>
                            <AiOutlinePlusCircle className='plus_icon' />
                            <span className='add_content'>Add</span>
                        </div>

                        <div className='id_container'>
                            <p className='customerId'>Lifetime Value</p>
                            <div className='number_container'>
                                <span className='number'>$ 1M</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='id_container'>

                            <p className='customerId'>Propensity to Purchase</p>

                            <div className='number_container'>
                                <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733107015/Group_1171287003_oguklp.png" alt="piechart" />
                                <span className='perc_conytent'>75%</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='add_container'>
                            <AiOutlinePlusCircle className='plus_icon' />
                            <span className='add_content'>Add</span>
                        </div>
                        <div className='id_container'>

                            <p className='customerId'>Engagement Score</p>

                            <div className='number_container'>
                                <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733107470/Group_1171287003_1_b3anfu.png" alt="piechart" />
                                <span className='eightypercentage'>80%</span>
                                <BsThreeDotsVertical className='dots_icon' />

                            </div>
                        </div>
                        <div className='add_container'>
                            <AiOutlinePlusCircle className='plus_icon' />
                            <span className='add_content'>Add</span>
                        </div>

                        <div className='other_agent_btn'>
                            <LuUserPlus className='plus_icon' />
                            <span className='otheragent'>Assign other Agent</span>
                        </div>
                        <div className='newwidget'>
                            <span className='otheragent'>Add New Widget</span>
                        </div>
                    </div>

                </div>

                <div className='chat_card_container'>
                    <div className='conversation_options'>
                        <p>Conversation</p>
                        <p>Address Update</p>
                        <IoClose />
                        <p>Fee Reversal</p>
                        <IoClose />
                        <p>Retail Onboarding</p>
                        <IoClose />
                        <span className='Eascalate_btn'>Escalate</span>
                    </div>
                    <div className='msg_container'>
                        <div className='msg_tabs'>
                            <h4>Conversation</h4>
                            <h4>Attachment</h4>
                        </div>
                        <div className='content_card'>
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.</p>
                        </div>
                        <div className='chat_history_container'>
                            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1733233296/Group_1171287144_gp3xhs.png' alt='groupslot' />
                            <div>
                                <div className='chat_data_container'>

                                    <div className='chat_data'>

                                        <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1733233288/Frame_1171287398_augdat.png' alt='cb' />
                                        <div className='time'>
                                            <p>Rachel Adams</p>
                                            <p>9:08PM     Received  By  WhatsApp
                                                <MdDone />

                                            </p>
                                        </div>

                                        <div>
                                            <BiDotsHorizontalRounded />
                                        </div>
                                    </div>

                                    <div className='content_card1'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</p>
                                    </div>
                                </div>

                                <div className='chat_data_container' >

                                    <div className='chat_data'>
                                        <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1733233280/Frame_1171287398_1_nkiciv.png' alt='cb' />
                                        <div className='time'>
                                            <p>You</p>
                                            <p>27 jul, 2024  9:08PM    sent  By  WhatsApp
                                                <MdDone />

                                            </p>
                                        </div>
                                        <div>
                                            <BiDotsHorizontalRounded />
                                        </div>
                                    </div>

                                    <div className='content_card1'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" checked />
                                <lable style={{ color: "#0F8BFD" }}>SMS</lable>
                                <input type="checkbox" />
                                <lable>Whatsapp</lable>
                                <input type="checkbox" checked />
                                <lable style={{ color: "#0F8BFD" }}>Email</lable>

                            </div>
                            <div>
                                <input type="text" placeholder='Type a massage...' className='text_input' />
                                <span className='clip_container'><GoPaperclip />
                                </span>
                                <span className='sent_btn'> <TiArrowRightOutline />
                                    Send</span>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

                <div className='greeting_container'>
                    <div className='greeting_navbar'>
                        <p className='Aksura'>Ask Catura</p>
                        <div>
                            <SlEnvolope className='envolope' />
                            <span className='whatsup'>WhatsApp</span>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733111676/Frame_sirxnf.png" alt="frame" />
                        </div>
                        <div>
                            <SlEnvolope className='envolope' />
                            <span className='Greetings'>Greetings</span>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733111676/Frame_sirxnf.png" alt="frame" />
                        </div>

                    </div>
                    <div>
                        <div className='bg_content'>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733112309/Group_1171287046_qws4vj.png" alt="group" />
                        </div>

                        <div className='search_container'>
                            <input type='search' className='input_container' placeholder='Type a message...' />
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733112940/Frame_1171286951_ru59fx.png" alt="click" />
                        </div>
                    </div>
                    <div className='action_luncher_container'>
                        <h4 className='Action_lancher'>Action Launcher</h4>
                        <div className='action_search_container'>
                            <TbSearch />
                            <input type="search" placeholder='Search Actions...' className='action_input_element' />
                        </div>
                        <div className='action_btn_container'>
                            <span className='add_action_btn'>
                                <AiOutlinePlusCircle className='plus_icon' />
                                <span className='add_content' style={{ color: 'white' }}>Add</span>
                            </span>
                            <span className='add_action_btn1'> Free Reversal </span>
                        </div>
                        <div className='action_btn_container'>
                            <span className='add_action_btn1'> Retail Onboarding </span>
                            <span className='add_action_btn1'> Address Update </span>
                        </div>
                        <div className='case_favorite_container'>
                            <div className='case_card'>
                                <RiPushpinLine className='pin_icon' />

                                <span className='case_favorite'>Case Favorite</span>
                            </div>
                            <div>
                                <div className='lorem'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                                </div>
                                <div className='photo_container'>
                                    <HiOutlinePhoto />
                                    <span>Photo</span>
                                </div>
                                <div className='lorem'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </div >
    )
}

export default Home