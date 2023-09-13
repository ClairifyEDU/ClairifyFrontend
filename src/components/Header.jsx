import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiLogoDiscordAlt, BiSolidHome, BiSolidGroup, BiSolidDonateHeart, BiTask, BiSolidDownArrow } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="bg-white h-[60px] w-full flex items-center justify-center fixed">
        <div className="w-[100%] h-[100%] mx-[3rem] h-[40px] flex items-center justify-between relative">
            <div className="flex items-center justify-center">
                <NavLink to="/">
                    <img
                        src="/img/ClairifyLogo.png"
                        className="h-[40px]"
                        alt="Clarify logo"
                    />
                </NavLink>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <NavLink to="/notes" className="flex items-center justify-center font-bold space-x-1 text-dark p-[0.5rem] hover:text-gray-500 transition duration-200">
                    <span>NOTES</span>
                    <BiSolidDownArrow size="20px" />
                </NavLink>
            </div>

            <div className="flex h-[100%] items-center justify-content gap-[30px]">
                <NavLink to="/team" className="flex items-center justify-center font-bold space-x-1 text-dark p-[0.5rem] hover:text-orange transition duration-200">
                    <BiSolidGroup size="20px" />
                    <span>TEAM</span>
                </NavLink>
                <NavLink to="/apply" className="flex items-center justify-center font-bold space-x-1 text-dark p-[0.5rem] hover:text-teal transition duration-200">
                    <BiTask size="20px" />
                    <span>APPLY</span>
                </NavLink>
                <NavLink to="/donate" className="flex items-center justify-center font-bold space-x-1 text-dark p-[0.5rem] hover:text-blue-paypal transition duration-200">
                    <BiSolidDonateHeart size="20px" />
                    <span>DONATE</span>
                </NavLink>
                <NavLink to="/discord" className="flex items-center justify-center font-bold space-x-1 text-dark p-[0.5rem] hover:text-purple-discord transition duration-200">
                    <BiLogoDiscordAlt size="20px" />
                    <span>DISCORD</span>
                </NavLink>
            </div>

        </div>
    </div>
  )
}

export default Header
