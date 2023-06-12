import React, { useState } from "react";
const Dropdown = ({name}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative z-40">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShow(!show)}>
                <p className="pl-3 py-3 text-white  text-sm leading-3 tracking-normal font-normal">{name}</p>
                <div className="cursor-pointer text-white mr-3">
                    {show ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    )}
                </div>
            </div>
            {show && (
                <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                    {/* <li className="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-indigo-700 text-white px-3">
                        <span className="font-medium">Steven Johnson</span>
                        <span className="font-normal mt-2">stevedoe@gmail.com</span>
                    </li> */}
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">ITI</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">B-Tech</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Medical</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Defence</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Hotel-management</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">aah</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">bbg</li>
                </ul>
            )}
        </div>
    );
};
export default Dropdown;
