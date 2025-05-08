import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";
import { FaCode, FaSpinner, FaUsers } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";



const Dashboard = () => {

    return (

        <div className="ml-64 pt-20 px-6 min-h-screen bg-[#121212]">
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-800 text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 w-full sm:w-[48%] lg:w-[23%]">
                    <GoProjectRoadmap className="text-lg" />
                    <span>Total Project</span>
                </div>

                <div className="bg-gray-800 text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 w-full sm:w-[48%] lg:w-[23%]">
                    <MdPendingActions className="text-lg" />
                    <span>Pending</span>
                </div>

                <div className="bg-blue-800 text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 w-full sm:w-[48%] lg:w-[23%]">
                    <FaSpinner className="text-lg animate-spin" />
                    <span>In Process</span>
                </div>

                <div className="bg-yellow-600 text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 w-full sm:w-[48%] lg:w-[23%]">
                    <IoMdCheckmarkCircleOutline className="text-lg" />
                    <span>Completed</span>
                </div>
            </div>

            <div className="pt-5 pl-6 pb-8 m-15 min-h-screen bg-[#121212]">
                <div className="flex flex-wrap justify-between">
                    {/* In Process Column */}
                    <div className="w-full md:w-[32%]">
                        <h3 className="text-cyan-400 border border-cyan-400 rounded-md px-4 py-2 font-semibold">
                            In Process
                        </h3>

                        {/* Card 1 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">Sumit Pamrod</h4>
                            <p className="text-sm text-gray-400">Sales Teams</p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-green-500 font-medium">Low</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">Sumit Pamrod</h4>
                            <p className="text-sm text-gray-400">Sales Teams</p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-green-500 font-medium">Low</span>
                            </div>
                        </div>
                    </div>

                    {/* Completed Column */}
                    <div className="w-full md:w-[32%]">
                        <h3 className="text-yellow-400 border border-yellow-400 rounded-md px-4 py-2 font-semibold">
                            Completed
                        </h3>

                        {/* Card 1 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">12345</h4>
                            <p className="text-sm text-gray-400">abcds</p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-yellow-400 font-medium">Medium</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">12345</h4>
                            <p className="text-sm text-gray-400">abcds</p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-yellow-400 font-medium">Medium</span>
                            </div>
                        </div>
                    </div>

                    {/* InComplete Column */}
                    <div className="w-full md:w-[32%]">
                        <h3 className="text-green-500 border border-green-500 rounded-md px-4 py-2 font-semibold">
                            InComplete
                        </h3>

                        {/* Card 1 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">Codebase Setup</h4>
                            <p className="text-sm text-gray-400">
                                Developer ko naye module ke liye local dev environment setup karna hai.
                            </p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-red-500 font-medium">High</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="mt-4 h-[300px] bg-[#1f1f1f] rounded-xl p-4 text-white shadow-sm border border-[#333] flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="bg-[#333] text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <FaCode /> Designing
                                </span>
                                <BsThreeDotsVertical />
                            </div>
                            <h4 className="text-lg font-bold mt-3">Codebase Setup</h4>
                            <p className="text-sm text-gray-400">
                                Developer ko naye module ke liye local dev environment setup karna hai.
                            </p>
                            <div className="flex justify-between items-center mt-auto text-sm">
                                <span className="flex items-center gap-1">
                                    <FaUsers />
                                </span>
                                <span className="text-red-500 font-medium">High</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Dashboard;
