import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar(props) {
    return (
        <div className="h-16 pl-40 fixed bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-5">
            <div className="flex px-5 items-center">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input type="text" placeholder="Search for tasks ..."
                className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"/>
            </div>
            <div className="flex space-x-6">
                <AtSymbolIcon className="w-7 h-7 text-white"/>
                <BellIcon className="w-7 h-7 text-white"/>
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">M. John Doe</h3>
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;