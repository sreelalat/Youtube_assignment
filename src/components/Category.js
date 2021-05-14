import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../scss/Category.scss';
import VideoCard from './VideoCard';

function Category({channel}) {
    return (
        <div className="category">
            <div className="category_details">
                <div className="category_details_top">
                    <Avatar
                        src="https://static.nike.com/a/images/f_auto/dpr_3.0/w_371,c_limit/45cfb1b1-3db6-46cd-aeab-d875f622faf0/nike-just-do-it.jpg"
                        alt="Category Profile Image"
                    />
                    <h3>{channel}</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>MORE VIDEOS</button>
            </div>
            <div className="category_videocard">
                <VideoCard
                    thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                    time="4.03"
                    title="Shakira - Waka Waka"
                    timeStamp="2 Weeks Ago"
                    channel="ShakiraVEVO"
                    views="21 938 743"
                />
            </div>
            <div className="category_videocard">
                <VideoCard
                    thumbnail="https://i3.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg"
                    time="4.03"
                    title="Shakira - Waka Waka"
                    timeStamp="2 Weeks Ago"
                    channel="ShakiraVEVO"
                    views="21 938 743"
                />
            </div>
            <div className="category_videocard">
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
    )
}

export default Category
