import React from 'react'
import Swoosh from '../assets/img/swoosh.png'
import grammarly_suggestion from '../assets/img/grammarly_suggestion.svg'
import writing_sample from '../assets/img/writing_sample.svg'


export default function Carousel() {
    return (
    <div>
      <img src={Swoosh} className="carousel-bg" alt="" />
      <div className='carousel-section'>
        <div className='carousel-images'>
            <img className='carousel-slide-1' src={writing_sample} alt="" />
            <img className='carousel-slide-2' src={grammarly_suggestion} alt="" />
        </div>
        <div className='carousel-tabs'>
            <ul className='tabs-list'>
            <li className='tab-list-item'>
                <h1 className='tab-list-heading'>Clear, confident communication</h1>
                <p className='tab-list-text'>Take the guesswork out of great writing.</p>
                <div className='tab-progress-bar'>

                </div>
            </li>
            <li className='tab-list-item'>
                <h1 className='tab-list-heading'>Comprehensive real-time feedback</h1>
                <p className='tab-list-text'>Effective writing takes more than good grammar.</p>
            <div className='tab-progress-bar'>
                    
                </div>
            </li>
            <li className='tab-list-item'>
                <h1 className='tab-list-heading'>Support you can rely on</h1>
                <p className='tab-list-text'>Write with a second pair of eyes that never gets tired.</p>
                <div className='tab-progress-bar'>
                    
                </div>
            </li>
            <li className='tab-list-item'>
                <h1 className='tab-list-heading'>Strike the right tone</h1>
                <p className='tab-list-text'>Make the best impression, every time.</p>
                <div className='tab-progress-bar'>
                    
                </div>
            </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
