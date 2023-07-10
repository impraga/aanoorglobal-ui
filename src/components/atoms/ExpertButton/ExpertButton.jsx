import React from 'react'

import './ExpertButton.scss'
import supportIcon from '../../../../public/assets/icons/support.png'

const ExpertButton = () =>
  <button className='expert-button' type='button'>
    <div className='text'>Connect with expert</div>
    <div className='circle' />
    <div className='icon-cont'>
      <img src={supportIcon} alt="Support Icon" />
    </div>
  </button>


export default ExpertButton
