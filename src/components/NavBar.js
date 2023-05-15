import React from 'react'
import logo from '../assets/edyoda.png'
import search from '../assets/search.png'

export default function NavBar() {
    return (
        <div className='Navbar'>
            <div className="left">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="course">
                    <select name="Courses" id="">
                        <option value="">Course&nbsp;&nbsp;</option>
                    </select>
                </div>
                <div className="programs">
                    <select name="Courses" id="">
                        <option value="">Programs&nbsp; &nbsp;</option>
                    </select>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <img src={search} />
                </div>
                <div className="login">Log in</div>
                <div className="join">JOIN NOW</div>
            </div>

        </div>
    )
}
