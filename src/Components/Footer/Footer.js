import { FaAngleDoubleRight, FaMapMarkerAlt, FaRegClock, FaPhoneVolume } from 'react-icons/fa'
import React, { Component } from 'react';
import './footer.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/social/facebook.png'
import behance from '../../assets/images/social/behance.png'
import linkedin from '../../assets/images/social/linkedin.png'
import img01 from '../../assets/images/gall/gallery-01.png'
import img02 from '../../assets/images/gall/gallery-02.png'
import img03 from '../../assets/images/gall/gallery-03.jpg'
import img04 from '../../assets/images/gall/gallery-04.png'
import img05 from '../../assets/images/gall/gallery-05.jpg'
import img06 from '../../assets/images/gall/gallery-06.png'
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer__container grid">
                    <div className="footer__info flex">
                        <div className="footer__logo"><img src={logo} alt="logo" /></div>
                        <div className="footer__social flex">
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={behance} alt="behance" />
                        </div>
                        <div className="footer__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="footer__links flex">
                        <li><FaAngleDoubleRight /> important links</li>
                        <li><FaAngleDoubleRight />important links</li>
                        <li><FaAngleDoubleRight />important links</li>
                        <li><FaAngleDoubleRight />important links</li>
                        <li><FaAngleDoubleRight />important links</li>
                    </div>
                    <div className="footer__location flex">
                        <div className="location__info">
                            <FaMapMarkerAlt />
                            <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
                        </div>
                        <div className="location__info">
                            <FaRegClock />
                            <p>Business Hours: From 10:00 To 18:00</p>
                        </div>
                        <div className="location__info">
                            <FaPhoneVolume />
                            <div className='flex'>
                                <a href="tel:+201114911898">01114911898</a>
                                <a href="tel:+201114911898">01114911898</a>

                            </div>

                        </div>
                    </div>
                    <div className="footer__imgs">
                        <img src={img01} className='footer__img' alt="footer__img" />
                        <img src={img02} className='footer__img' alt="footer__img" />
                        <img src={img03} className='footer__img' alt="footer__img" />
                        <img src={img04} className='footer__img' alt="footer__img" />
                        <img src={img05} className='footer__img' alt="footer__img" />
                        <img src={img06} className='footer__img' alt="footer__img" />
                    </div>
                </div>
                <div className="made">
                    <p>Made With {'<3'} By Taha</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
