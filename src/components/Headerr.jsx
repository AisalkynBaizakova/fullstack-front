import React, { useContext } from 'react';
import './Header.css'
import { Link ,useNavigate} from 'react-router-dom';
import { Button } from "@mui/material";
import { authContext } from '../contexts/AuthContext';




const Header = () => {

    let user = JSON.parse(localStorage.getItem("user"));
    const history = useNavigate();
    const { logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut();
        history("/");
        localStorage.clear();
    };

    let addProductLink
    let addProductHumburgerMenu;


    if (user) {
        if (user.role === "ADMIN") {
           addProductLink = (
               <center>
            <Link to="/product">
                 <div className="product">Add Product</div>
             </Link>
               </center>
           )
    }

    if ( user) {
        if (user.role === "ADMIN") {
            addProductHumburgerMenu = (
                <li><a class="menu__item" href="/product">Add Products</a></li>
            )
        }
    }
}
    return (
        <>
        <div className="header">
              <div className="headerBlock">
                  <div className="headerLeft">
                     <Link to="/">
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TVcwqctRALjbe2s_qnSFBgB_hxVRLohpE1_hkuPIkAQgLbNWUj8hzscJ9nJtG0NPJC8&usqp=CAU' alt="" className="mainIcons" />
                     </Link>
                  </div>
                     <div className="headerCenter">
                        <Link to="/">
                              <div>Home</div>
                        </Link>
                        {addProductLink}
                        <Link to="/products">
                        <div className="productList">Products</div>
                        </Link>
                     </div>
                  <div className="headerRight">

                  {user ? (
                        <>
                           
                            <h6>{user.username}</h6>
                            <Button
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                    handleLogOut();
                                }}
                            >
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="outline-light" >
                                    Войти
                                </Button>
                            </Link>
                        </>
                    )}
              
                  </div>
                            <div class="hamburger-menu">
                              <input id="menu__toggle" type="checkbox" />
                                 <label class="menu__btn" for="menu__toggle">
                                    <span></span>
                                       </label>
                                            <ul class="menu__box">
                                              <li><a class="menu__item" href="/">Home</a></li>
                                              {addProductHumburgerMenu }
                                              <li><a class="menu__item" href="/products">Products List</a></li>
                                              <li><a class="menu__item" href="/login">Login</a></li>
                                            </ul>
                            </div>
              </div>
           <div className="line"></div>
        </div>
        </>
    );
}


export default Header;