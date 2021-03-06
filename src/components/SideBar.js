import React, {useEffect} from 'react';
import { toggleMenu, bootScrollspy } from '../custom';
import logo from '../images/logo.png';
import Navbar from './Navbar';

const SideBar = () => {

  useEffect(() => {
    toggleMenu();
    bootScrollspy();
  }, [])

  return (
    <>
      <header className="left float-left shadow-dark" id="header">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      <div className="header-inner d-flex align-items-start flex-column">

        <Profile />

        <Navbar />

        <div className="footer mt-auto">
          <SocileList />
          <span className="copyright">© 2021 Benjamin</span>
        </div>

      </div>
      </header>
    </>
  )
}

const Profile = () => {
  return (
    <>
      <a href="index.html"><img src={logo} alt="Benjamin Pelto" /></a>
      <a href="index.html" className="site-title dot mt-3">Full-stack</a>
      <b className="site-slogan">Web Developer</b>
      <span >10 years of experience in </span>
      <b>building web and apps</b>
    </>
  )
}

const SocileList = () => {
  return (
    <>
      <ul className="social-icons list-inline">
        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
        <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
        <li className="list-inline-item"><a href="#"><i className="fab fa-dribbble"></i></a></li>
      </ul>
    </>
  )
}

export default SideBar;