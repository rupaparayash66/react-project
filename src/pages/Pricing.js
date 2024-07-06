import React from 'react';
import { BiCheck } from "react-icons/bi";
import { BiX } from "react-icons/bi";

function Pricing() {
    return (
        <div id='pricing' className='pricing-area area-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xs-12 '>
                        <div className='section-headline text-center'>
                            <h2>Pricing Table</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-sm-4 col-xs-12'>
                        <div className='pri_table_list'>
                            <h3>BASIC
                                <br></br>
                                <span>$80 / month</span>
                            </h3>
                            <ol>
                                <li className='cheak'><i><BiCheck /></i><span>Online system</span></li>
                                <li className='cheak'><i><BiX /></i><span>Full access</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Free apps</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Multiple slider</span></li>
                                <li className='cheak'><i><BiX /></i><span><strike>Free domin</strike></span></li>
                                <li className='cheak'><i><BiX /></i><span><strike>Support unlimited</strike></span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Payment online</span></li>
                                <li className='cheak'><i><BiX /></i><span>Cash back</span></li>
                            </ol>
                            <button fdprocessedid="yo4llw">sign up now</button>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-xs-12'>
                        <div className='pri_table_list'>
                            {/* <span class="saleon">top sale</span> */}
                            <h3>STANDARD
                                <br></br>
                                <span>$110  / month</span>
                            </h3>
                            <ol>
                                <li className='cheak'><i><BiCheck /></i><span>Online system</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Full access</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Free apps</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Multiple slider</span></li>
                                <li className='cheak'><i><BiX /></i><span><strike>Free domin</strike></span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Support unlimited</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Payment online</span></li>
                                <li className='cheak'><i><BiX /></i><span><strike>Cash back</strike></span></li>
                            </ol>
                            <button fdprocessedid="47yt3" >sign up now</button>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-xs-12'>
                        <div className='pri_table_list'>
                            <h3>PRIMIUM
                                <br></br>
                                <span>$150  / month</span>
                            </h3>
                            <ol>
                                <li className='cheak'><i><BiCheck /></i><span>Online system</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Full access</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Free apps</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Multiple slider</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Free domin</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Support unlimited</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Payment online</span></li>
                                <li className='cheak'><i><BiCheck /></i><span>Cash back</span></li>
                            </ol>
                            <button fdprocessedid="yo<i><FaCheck /></i>4llw">sign up now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
