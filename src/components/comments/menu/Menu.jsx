import React from 'react';
import menu1 from '../../../images/menu1.jpeg'
import menu2 from '../../../images/menu2.jpeg'
import menu3 from '../../../images/menu3.jpeg'
import menu4 from '../../../images/menu4.jpeg'
import menu5 from '../../../images/menu5.jpeg'
import './menu.css'

const Menu = () => {
    return (
        <>
        <div className="menuMainBlock">
            <center>

                <div className="menu-text">
                    <h2>Menu</h2>
                </div>
            </center>
            
            <div className="menuBlock">

                <div className="menu-img">
                  <img src={menu1} alt="" />                    
                </div>

                <div className="menu-img">
                  <img src={menu2} alt="" />                    
                </div>

                <div className="menu-img">
                  <img src={menu3} alt="" />                    
                </div>

                <div className="menu-img">
                  <img src={menu4} alt="" />                    
                </div>

                <div className="menu-img">
                  <img src={menu5} alt="" />                    
                </div>

            </div>
        </div>
        
        </>
    );
};

export default Menu;