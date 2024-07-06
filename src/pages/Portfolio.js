import React from 'react'

function Portfolio() {
    return (
        <div id='portfolio' className='portfolio-area area-padding fix' >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='section-headline text-center'>
                            <h2>Our Portfolio</h2>
                        </div>

                    </div>
                </div>

                <div className='row weasome-project-1 fix'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <ul id='portfolio-filters'>
                            <li data-filter="*" className='filter-active'>All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className='row awesome-project-content protfolio-container' >
                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/1.jpg" alt="" />
                            
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/2.jpg" alt="" />
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/3.jpg" alt="" />
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/4.jpg" alt="" />
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/5.jpg" alt="" />
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfollio-item' >
                        <div className='single-awesome-project'>
                            <div className='awesome-img'>
                                <a href="#">
                                    <img src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/portfolio/6.jpg" alt="" />
                                </a>
                                <div className='add-actions text-center'>
                                    <div className='project-dec'>
                                        <a className='portfolio-lightbox' data-gallery='mygallery' href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

// style='position:relative  height:309.6px'
// style='position:absloute  left:0px  top:0px'