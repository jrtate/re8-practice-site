import React from 'react';
import Background from '../assets/background/page_bg-chara.png';
import './Home.css';

const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};

const Home = () =>(
    <div className='backgroundContainer' style={backgroundStyle}>
    </div>
);

export default Home;