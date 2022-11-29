import React from 'react'
import Img1 from '../../assets/about/image 25.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__component">
                <div className="about__left">
                    <h2 className='about__title'>О <br /> нас</h2>
                    <p className='about__p'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem 
                    ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                     ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                </div>
                <div className="about__right">
                    <img src={Img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About