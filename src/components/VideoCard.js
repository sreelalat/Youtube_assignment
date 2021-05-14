import React from 'react';
import '../scss/VideoCard.scss';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

function Videocard({thumbnail, time, title, timeStamp, channel, views}) {
    return (
        <div className="videocard">
            <div className="thumbnail_container">
                <img src={thumbnail} alt="Video Thumbnail" className="thumbnail" />
                <p className="video_time">{time}</p>
                <div className="middle">
                    <ArrowForwardIos className="play_btn"/>
                </div>
            </div>
            <h3>{title}</h3>
            <div className="video_footer">
                <p><span className="timeStamp">{timeStamp}</span> By <span className="channel">{channel}</span></p>
                <p>{views} Views</p>
            </div>
        </div>
    )
}

export default Videocard
