import React from 'react'

import { FaTachometerAlt, FaUserCog, FaTasks, FaUsers, FaBell, FaCalendarAlt, FaSignOutAlt, FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Sidebar = () => (
  <div className="bg-[#1f1f1f] text-white h-screen w-64 p-5 fixed">
    <h1 className="text-xl font-bold mb-8"><FaTwitter className="inline text-sm mt-[-15px] " />Task Manager</h1>
    <ul className="space-y-4 text-sm">
      <li><FaTachometerAlt className="inline mr-2" />Dashboard</li>
      <li><FaUserCog className="inline mr-2" />Admin Management <MdKeyboardArrowDown className='inline text-lg justify-end ml-[20px]' /></li>
      <li><FaTasks className="inline mr-2" />Task Management <MdKeyboardArrowDown className='inline text-lg justify-end ml-[20px]' /></li>
      <li><FaUsers className="inline mr-2" />Team Management <MdKeyboardArrowDown className='inline text-lg justify-end ml-[20px]' /></li>
      <li><CgProfile className="inline mr-2" />Profile <MdKeyboardArrowDown className='inline text-lg justify-end ml-[20px]' /></li>
      <li><FaCalendarAlt className="inline mr-2" />Calendar Management </li>
      <li><FaBell className="inline mr-2" />Notification</li>
      <li><FaSignOutAlt className="inline mr-2" />Logout</li>
    </ul>
  </div>
);

export default Sidebar;

