import React from 'react';
import VideoCard from './VideoCard';
import '../scss/Video.scss';

function Videos() {
    return (
        <div className="videos">
            <div className="videos_main">
                <div className="videocard_main">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
                <div className="videocard_main">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
            </div>
            <div className="videos_suggestions">
                <div className="videocard_suggestions">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
                <div className="videocard_suggestions">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
                <div className="videocard_suggestions">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
                <div className="videocard_suggestions">
                    <VideoCard
                        thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                        time="4.03"
                        title="Shakira - Waka Waka"
                        timeStamp="2 Weeks Ago"
                        channel="ShakiraVEVO"
                        views="21 938 743"
                    />
                </div>
            </div>
        </div>
    )
}

export default Videos
