import React from 'react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <div id='contact' className='contact-area'>
            <div className='contact-inner area-padding'>
                <div className='contact-overly'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <div className='section-headline text-center'>
                                <h2>Contact Us </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row' >
                        <div className='col-md-4'>
                            <div className='contact-icon text-center'>
                                <div className='single-icon'>
                                     <i><HiOutlineDevicePhoneMobile /></i> 
                                    <p>
                                        Call: +1 5589 55488 55<br></br>
                                        <span>Monday-Friday (9am-5pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='contact-icon text-center'>
                                <div className='single-icon'>
                                      <i><MdOutlineMailOutline /></i>
                                    <p>
                                        Email: info@example.com<br></br>
                                        <span>Web: www.example.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='contact-icon text-center'>
                                <div className='single-icon'>
                                        <i><FaLocationDot /></i>
                                    <p>
                                        Location: A108 Adam Street<br></br>
                                        <span>NY 535022, USA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                        <div className='col-md-6'>
                            <div className='from contact-form'>
                                <from >
                                    <div className='form-group'>
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" fdprocessedid="jsgw5j"></input>
                                    </div>
                                    <div className='from-group mt-3'>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" fdprocessedid="elosna"></input>
                                    </div>
                                    <div className='from-group mt-3'>
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" fdprocessedid="ctf3y"></input>
                                    </div>
                                    <div className='from-group mt-3'>
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                    </div>
                                    <div class="my-3">
                                        {/* <div class="loading">Loading</div> */}
                                        <div class="error-message"></div>
                                        {/* <div class="sent-message">Your message has been sent. Thank you!</div> */}
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" fdprocessedid="nzrkbb">Send Message</button>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
