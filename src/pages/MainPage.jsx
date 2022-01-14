import React from 'react';
import About from '../components/about/AboutUs';
import MyCarousel from '../components/carousel/MyCarousel';
import Menu from '../components/comments/menu/Menu';

const MainPage = () => {
    return (
        <div>
            <MyCarousel/>
            <About/>
            <Menu/>
        </div>
    );
};

export default MainPage;