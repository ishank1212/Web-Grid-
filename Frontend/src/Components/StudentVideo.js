import React from 'react'
import './StudentVideo.css'

const StudentVideo = (props)=>
{
    return(
        <div className='live-video-student'>
            Student Video
            <p>Emotional Status : {props.emotionalStatus}</p>
        </div>
    )
}

export default StudentVideo;