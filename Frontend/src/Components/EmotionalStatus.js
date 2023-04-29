import React from 'react'
import './EmotionalStatus.css';

const EmotionalStatus = (props)=>
{
    return(
        <div className='emotional-status'>
            <label htmlFor='emotional-status' className='h3'>How are you feeling?</label>
            <div>
            <input type ='text' id= 'emotional-status' onChange={props.onEmotionalStatusChange}></input>
            </div>
        </div>
    )
}

export default EmotionalStatus;