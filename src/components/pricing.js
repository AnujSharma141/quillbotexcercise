import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip';

import grammarly_suggestion from '../assets/img/grammarly_suggestion.svg'

import tick from '../assets/img/tick.jpg'

const basic = ['Spelling', 'Grammar', 'Punctuation', 'Conciseness']
const premium = ['Clarity-focused sentence rewrites','Tone adjustments'
,'Plagarism detection'
,'Word choice'
,'Formality level'
,'Fluency',
'Additional advanced suggestions']
const SpellingTooltip = (props)=>(
    <Tooltip {...props}><p className='card-list-text'>{props.text}</p></Tooltip>
)

export default function Pricing() {
  return (
    <div className='pricing'>
      <h2 className='pricing-title'>Up-Level Your Communication</h2>
      <p className='pricing-subtitle'>Unlock Grammarly Premium’s advanced features and suggestions.</p>
      <div className='pricing-cards'>
    <Card className='pricing-card'>
        <CardContent>
            <p className='card-pretext'>for casual writing</p>
            <h2 className='card-title'>Free</h2>
            <p className='card-text'>Basic writing suggestions.</p>
            <Button className="card-button button button-disabled" variant="disabled">Included in Premium</Button>
            <ul className='card-list'>
                {basic.map(item=>{
                    return(
                        <li className='card-list-item'>                    
                        <img className='img-tick' src={tick} alt="" />
                        <SpellingTooltip text={item} title={<React.Fragment className='tooltip'>
                            <img className='tooltip-image' src={grammarly_suggestion} alt="" />
                            <p>Eliminate spelling errors</p>
                        </React.Fragment>} placement='bottom-start'></SpellingTooltip>
                    </li>   
                    )
                })}
            </ul>
        </CardContent>
    </Card>
    <Card className='pricing-card'>
        <CardContent>
            <p className='card-pretext'>FOR WORK OR SCHOOL</p>
            <h2 className='card-title'>Premium</h2>
            <p className='card-text'>Style, tone, and clarity improvements for writing at work and school.</p>
            <Button className='card-button button' variant="contained">Upgrade to Grammarly Premium</Button>
            <ul className='card-list'>
                <li className='card-list-item'>
                    <img className='img-tick' src={tick} alt="" />
                    <p className='card-list-text'><b>Everything in Free</b></p>
                </li>

                {premium.map(item=>{
                    return(
                        <li className='card-list-item'>                    
                        <img className='img-tick' src={tick} alt="" />
                        <SpellingTooltip text={item} title={<React.Fragment className='tooltip'>
                            <img className='tooltip-image' src={grammarly_suggestion} alt="" />
                            <p>Eliminate spelling errors</p>
                        </React.Fragment>} placement='bottom-start'></SpellingTooltip>
                    </li>   
                    )
                })}
            </ul>
        </CardContent></Card>
      </div>
    </div>
  )
}
