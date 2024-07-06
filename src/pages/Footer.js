import React from 'react';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Footer() {
  return (
    <footer>
    <div className='footer-area'>
      <div className='container' >
        <div className='row'>
          <div className='col-md-4'>
            <div className='footer-content'>
              <div className='footer-head'>
                <div className='footer-logo'>
                  <h2>
                    <span>e</span>
                    Business
                  </h2>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                <div className='footer-icons'>
                  <ul>
                    <li><a href="#"><BiLogoFacebookCircle /></a></li>
                    <li><a href="#"><BiLogoTwitter /></a></li>
                    <li><a href="#"><BiLogoInstagram /></a></li>
                    <li><a href="#"><BiLogoLinkedinSquare /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-contect'>
              <div className='footer-head'>
                <h4>information</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='footer-contacts'>
                  <p>
                    <span>Tel:</span>
                    " +123 456 789"
                  </p>
                  <p>
                    <span>Email:</span>
                    "contact@example.com"
                  </p>
                  <p>
                    <span>Working Hours:</span>
                    "9am-5pm"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-content'>
              <div className='footer-head'>
                <h4>Instagram</h4>
                <div className='flicker-img'>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/1.jpg" alt="" /></a>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/2.jpg" alt="" /></a>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/3.jpg" alt="" /></a>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/4.jpg" alt="" /></a>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/5.jpg" alt="" /></a>
                  <a href="#"> <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/6.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-area-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="copyright text-center">
                <p>
                  © Copyright <strong>eBusiness</strong>. All Rights Reserved
                </p>
              </div>
              <div class="credits text-center">
                {/* <!--
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
            --> */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
