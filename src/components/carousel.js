import React, { useState } from 'react'
import Swoosh from '../assets/img/swoosh.png'
import grammarly_suggestion from '../assets/img/grammarly_suggestion.svg'
import writing_sample from '../assets/img/writing_sample.svg'
import image2a from '../assets/img/image2a.svg'
import image2b from '../assets/img/image2b.svg'
import image3a from '../assets/img/image3a.svg'
import image3b from '../assets/img/image3b.svg'
import image4a from '../assets/img/image4a.svg'
import image4b from '../assets/img/image4b.svg'

export default function Carousel() {
    const [active, setActive] = useState(1)
    setInterval(()=>{
        setActive(active==4?1:active+1)
    },7000)

    const ImageSlider = () =>{
        if(active == 1) return<>
        <img className='carousel-slide-1' src={writing_sample} alt="" />
            <img className='carousel-slide-2' src={grammarly_suggestion} alt="" />
        </>
        if(active == 2) return<>
        <img className='carousel-slide-1' src={image2a} alt="" />
        <img className='carousel-slide-2' src={image2b} alt="" />
        </>
        if(active == 3) return<>
        <img className='carousel-slide-1' src={image3a} alt="" />
        <img className='carousel-slide-2' src={image3b} alt="" />
        </>
        if(active == 4) return<>
        <img className='carousel-slide-1' src={image4a} alt="" />
        <img className='carousel-slide-2' src={image4b} alt="" />
        </>
    }

    return (
    <div>
      <img src={Swoosh} className="carousel-bg" alt="" />
      <div className='carousel-section'>
        <div className='carousel-images'>
            <ImageSlider />
        </div>
        <div className='carousel-tabs'>
            <ul className='tabs-list'>
            <li className='tab-list-item' onClick={()=>{setActive(1)}}>
                <h1 className={active==1?`tab-list-heading tab-active`:'tab-list-heading'}>Clear, confident communication</h1>
                <p className='tab-list-text'>Take the guesswork out of great writing.</p>
                <div className='tab-progress-bar'>
                {active==1?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(2)}}>
                <h1 className={active==2?`tab-list-heading tab-active`:'tab-list-heading'}>Comprehensive real-time feedback</h1>
                <p className='tab-list-text'>Effective writing takes more than good grammar.</p>
            <div className='tab-progress-bar'>
            {active==2?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(3)}}>
                <h1 className={active==3?`tab-list-heading tab-active`:'tab-list-heading'}>Support you can rely on</h1>
                <p className='tab-list-text'>Write with a second pair of eyes that never gets tired.</p>
                <div className='tab-progress-bar'>
                {active==3?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(4)}}>
                <h1 className={active==4?`tab-list-heading tab-active`:'tab-list-heading'}>Strike the right tone</h1>
                <p className='tab-list-text'>Make the best impression, every time.</p>
                <div className='tab-progress-bar'>
                {active==4?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
