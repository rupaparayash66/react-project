import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Homec() {
    return (
        <Carousel>
            <Carousel.Item interval={1000} className='position-relative'>
                <div className='cbg position-absolute z-2'>
                </div>
                <img className='c-img' src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/hero-carousel/1.jpg" alt="" />
                <Carousel.Caption className='position-absolute z-3'>
                    <h4 className='cen'>The Best Business Information</h4>
                    <h2>We're In The Business Of Helping You Start Your Business</h2>
                    <button>Get Started</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} className='position-relative'>
            <div className='cbg position-absolute z-2'>
            </div>
                <img className='c-img' src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/hero-carousel/2.jpg" alt="" />
                <Carousel.Caption className='position-absolute z-3'>
                    <h4>At vero eos et accusamus</h4>
                    <h2>Helping Business Security & Peace of Mind for Your Family</h2>
                    <button>Get Started</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={200} className='position-relative'>
            <div className='cbg position-absolute z-2'>
            </div>
                <img className='c-img' src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/hero-carousel/3.jpg" alt="" />
                <Carousel.Caption className='position-absolute z-3'>
                    <h4>Temporibus autem quibusdam</h4>
                    <h2>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</h2>
                    <button>Get Started</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Homec;
