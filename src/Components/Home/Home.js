import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuUserPlus } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";







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
            <div className='greeting_container'>
                <div className='greeting_navbar'>
                    <p>Ask Catura</p>
                    <div>
                        <SlEnvolope />
                        <span>WhatsApp</span>
                        <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733111676/Frame_sirxnf.png" alt="frame" />
                    </div>
                    <div>
                        <SlEnvolope />
                        <span>Greetings</span>
                        <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733111676/Frame_sirxnf.png" alt="frame" />
                    </div>

                </div>
                <div className='bg_content'>
                    <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733112309/Group_1171287046_qws4vj.png" alt="group" />
                </div>

                <div className='search_container'>
                    <input type='search' className='input_container' placeholder='Type a message...' />
                    <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1733112940/Frame_1171286951_ru59fx.png" alt="click" />
                </div>

            </div>

        </div>
    )
}

export default Home