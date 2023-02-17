import React from 'react'
import "./sidebar.css" 
import {TbArrowBigTop, TbUser, TbListDetails, TbMail} from 'react-icons/tb'

const Sidebar = () => {
    return (
        <aside className='aside'>
           <div></div>
            <nav className='nav'>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className="nav_item">
                            <a href="#home" className="nav_link"><TbArrowBigTop/></a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link"><TbUser/></a>
                        </li>
                        <li className="nav_item">
                            <a href="#project" className="nav_link"><TbListDetails/></a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link"><TbMail/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div></div>
        </aside>
    )
}

export default Sidebar