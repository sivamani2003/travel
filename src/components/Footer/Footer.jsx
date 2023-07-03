import React,{useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md' 
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videodiv">
        <video src="https://media.istockphoto.com/id/1366224791/video/dubai-drone-4k.mp4?s=mp4-640x640-is&k=20&c=2Q-QPdpdcVyGBLBEMGbToxzcb3h4kHlkBImxTw5E5e8=" loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
                SEND<FiSend className="icon"/>
            </button>
          </div>
        </div>
        <div className="footercard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore  className="icon"/>Travel
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, neque ipsam? Odio, sed. Quibusdam est accusantium minus esse iste
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiOutlineYoutube className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
            <div className="footerlinks grid">
                <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                  <span className="grouptitle">
                    OUR AGENCY
                  </span>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Services
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Insurance
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Agency
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Tourism
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Payment
                  </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="4000"className="linkGroup">
                  <span className="grouptitle">
                    LAST MINTUE
                  </span>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    London
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Claifonia
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    NewYorl
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Hyderabad
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Tadikonda
                  </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                  <span className="grouptitle">
                    PARTNERS
                  </span>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Booking
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Rentcars
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    HostelWorld
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    Trivago
                  </li>
                  <li className="footerlist flex">
                    <FiChevronRight className="icon"/>
                    TripAdvisor
                  </li>
                </div>

            </div>
          </div>
          <div className="footerDiv">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - SIVAMANI 2003</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
