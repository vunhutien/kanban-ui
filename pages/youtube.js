import React, { useEffect, useState } from 'react';
import { CursorClickIcon } from '@heroicons/react/outline';
import {Transition} from '@headlessui/react';

function test() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isRingBell, setIsRingBell] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const hideIt = () => {
        setTimeout(function(){
            setIsShow(false);
            setTimeout(function(){
                setIsEnd(true);
            },1000);
        },2000);
    }

    useEffect(() => {
        if(process.browser){
            
            setTimeout(function(){
                document.body.click();
                let audio = new Audio('sound.mp3');
                audio.play();
            },2100);
            
            setIsShow(true);
            setTimeout(function(){
                
                setIsSubscribed(true);
                setTimeout(function(){
                    setIsRingBell(true);
                    hideIt();
                },1000);
            },2000);
        }
    },[]);

    return (
        <>

        {/* <button onClick={() => {setIsShow(!isShow)}}>Show/Hide</button> */}
        <div className="flex flex-col justify-center items-center h-screen duration-300 w-screen bg-blue-500 overflow-hidden">
            {
                isEnd && <label id="end" className="text-blue-500">xxEndxx</label>
            }
            <Transition show={isShow}>
                {/* Background overlay */}
                <Transition.Child
                    enter="transition-all duration-[1000ms]"
                    enterFrom="opacity-0 translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all duration-[1000ms]"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-full"
                >
                    <div className="w-[700px] bg-white rounded-lg p-5 pt-0 shadow-xl">
                        <img src="YouTube-Logo.png" className="h-16"/>
                        <div className="flex space-x-5 items-center w-full justify-between">
                            <div className="flex space-x-5 items-center">
                                <img src="me-200.jpg" className="w-20 h-20 rounded-full"/>
                                <div>
                                    <h1 className="text-3xl font-bold">Coding with Tien</h1>
                                    <h2 className="text-lg text-gray-500">Just the way I did anything!!</h2>
                                </div>
                            </div>
                            
                            <div className="ml-auto flex justify-end items-center space-x-5">
                                <button
                                onClick={() => {setIsSubscribed(true)}}
                                className={`bg-red-500 text-white rounded px-5 py-2 uppercase text-lg font-bold duration-200 transform relative
                                ${!isSubscribed ? 'bg-red-500' : 'bg-gray-400'}`}>
                                    {
                                        isSubscribed ? 'Subscribed' : 'Subscribe'
                                    }
                                    
                                    <Transition.Child
                                        enter="transition duration-[2000ms] transform"
                                        enterFrom="translate-y-24"
                                        enterTo="-translate-y-9"
                                        leave="transition duration-[500ms] transform"
                                        leaveFrom="-translate-y-4"
                                        leaveTo="translate-y-24"
                                    >
                                        {/* <CursorClickIcon className={`w-8 h-8 absolute top-4 left-1/2 -ml-3 text-gray-300 duration-1000
                                        ${isSubscribed && !isRingBell ? 'translate-x-[120px] duration-1000' : isRingBell ? 'translate-x-[130px] translate-y-[10px] duration-300' : ''} `}/> */}
                                        <img src="cursor.png" className={`w-6 absolute top-4 left-1/2 -ml-3 text-white duration-1000 filter grayscale
                                            ${isSubscribed && !isRingBell ? 'translate-x-[120px] duration-1000' : isRingBell ? 'translate-x-[130px] translate-y-[10px] duration-300' : ''} `}/>
                                        
                                        
                                    </Transition.Child>
                                    
                                </button>
                                
                                {
                                    isRingBell ?
                                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#666"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/></svg>
                                    :
                                    <svg onClick={() => {setIsRingBell(true);hideIt();}} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" height="36px" viewBox="0 0 24 24" width="36px" fill="#999"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                                }
                            </div>
                        </div>
                    </div>
                </Transition.Child>

                {/* Sliding sidebar */}
                {/* <Transition.Child
                    enter="transition ease-in-out duration-[1500ms] transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-[1500ms] transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    There
                    
                </Transition.Child> */}
                </Transition>
            
        </div>
        </>
    );
}

export default test;