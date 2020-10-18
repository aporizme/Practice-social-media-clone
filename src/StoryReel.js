import React from 'react';
import Story from './Story';
import './StoryReel.css';
function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image= {require('./img/story1.jpg')} 
            profileSrc= {require('./img/prof1.jpg')} 
            title="Miko Icasiano"/>
            <Story
            image= {require('./img/story2.jpg')} 
            profileSrc= {require('./img/prof2.jpg')} 
            title="Jayson Bondoc"/>
            <Story
            image= {require('./img/story3.jpg')} 
            profileSrc= {require('./img/prof3.jpg')} 
            title="Jhomar Salazar"/>
            <Story
            image= {require('./img/story4.jpg')} 
            profileSrc= {require('./img/prof4.jpg')} 
            title="Asian Cutie"/>
            <Story
            image= {require('./img/story5.jpg')} 
            profileSrc= {require('./img/prof5.jpg')} 
            title= "Eduard Dagsaan"/>
            
        </div>
    )
}

export default StoryReel
