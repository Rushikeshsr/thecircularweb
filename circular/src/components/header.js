import React from 'react'
import '../css/header.css'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { FaCaretDown } from "react-icons/fa";
const Header = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <nav className='col-12 nav-bar'>
                <div className='logo-text'>
                    <Link className='link d-flex' style={{alignItems:"center"}} to="/home">
                        <img className='logo' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849377/Circular%20website/logo_l4dzvx.png" alt="logo"/>
                        <h1 className='main-head'>The Circular</h1>
                    </Link>
                </div>
                <ul className='list'>
                    <div className='dropdown'>
                        <Link className='link' to="/focus"><li className='list-items'>Focus <FaCaretDown style={{fontSize:'14px'}}/></li></Link>
                        <div className='focus-items'>
                            <Link className='link' to="/focus/circulareconomy">Circular Economy</Link>
                            <Link className='link' to="/focus/nature">Nature</Link>
                            <Link className='link' to="/focus/medicine">Medicine</Link>
                            <Link className='link' to="/focus/hospitality">Hospitality</Link>
                            <Link className='link' to="/focus/hepatology">Hepatology</Link>
                            <Link className='link' to="/focus/gynaecology">Gynaecology</Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <Link className='link' to="/partnerships"><li className='list-items'>Partnerships <FaCaretDown style={{fontSize:'14px'}}/></li></Link>
                        <div className='focus-items'>
                            <Link className='link' to="/partnerships/desc">DESC</Link>
                            <Link className='link' to="/partnerships/smae">SMAE</Link>
                            <Link className='link' to="/partnerships/caregood">CareGood</Link>
                            <Link className='link' to="/partnerships/aranya">Aranya</Link>
                            <Link className='link' to="/partnerships/rer">RER</Link>
                            <Link className='link' to="/partnerships/others">Others</Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <Link className='link' to="/humancapital"><li className='list-items'>Human Capital <FaCaretDown style={{fontSize:'14px'}}/></li></Link>
                        <div className='focus-items'>
                            <Link className='link' to="/humancapital/education">Education</Link>
                            <Link className='link' to="/humancapital/skills">Skills</Link>
                            <Link className='link' to="/humancapital/health">Health</Link>
                            <Link className='link' to="/humancapital/quality">Quality</Link>
                            <Link className='link' to="/humancapital/transparency">Transparency</Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <Link className='link' to="/aboutus"><li className='list-items'>About Us <FaCaretDown style={{fontSize:'14px'}}/></li></Link>
                        <div className='focus-items'>
                            <Link className='link' to="/aboutus/visionandmission">Vision & Mission</Link>
                            <Link className='link' to="/aboutus/leadership">Leadership</Link>
                            <Link className='link' to="/aboutus/operations">Operations</Link>
                            <Link className='link' to="/aboutus/fieldtrips">Field Trips</Link>
                            <Link className='link' to="/aboutus/impact">Impact</Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <Link className='link' to="/contactus"><li className='list-items'>Contact Us <FaCaretDown style={{fontSize:'14px'}}/></li></Link>
                        <div className='focus-items' style={{minWidth:"120px"}}>
                            <HashLink smooth className='link' to="/contactus/#supportus">Support Us</HashLink>
                            <HashLink smooth className='link' to="/contactus/#joinus">Join Us</HashLink>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    </>
    
  )
}

export default Header;