import React from "react";
import './header-style.css'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import cross from '../images/icon-close.svg'


function Header(){

    const btnMobile = document.querySelector('.btn-mobile')
    const menuMobile = document.querySelector('.mobile-navegation')
    const desktopNav = document.querySelector('.navegation')
    const login = document.querySelector('.btn-login')
    const hamberguer = document.querySelector('.open')
    const close = document.querySelector('.close')
    let checked = false
    

    desktopNav.addEventListener('click',(event)=>{
        event.preventDefault()
    })
    menuMobile.addEventListener('click',(event)=>{
        event.preventDefault()
    })
    login.addEventListener('click',(event)=>{
        event.preventDefault()
    })
    btnMobile.addEventListener('click', (event) =>{
        if(!checked){
            menuMobile.style.display = 'flex';
            hamberguer.style.display = 'none';
            close.style.display = 'flex'
            checked = true
        } else {
            menuMobile.style.display = 'none';
            hamberguer.style.display = 'flex';
            close.style.display = 'none'
            
            checked = false
        }
    event.preventDefault()
    })
    

    return(
        <>
            <header>
                <div className="header-container">
                    <div className="header-space-content">
                        <div className="left-side">
                            <a href=""><img src={logo} alt="" /></a>
                        </div>
                        <div className="right-side"> 
                            <div className="navegation">
                                <nav>
                                    <ul>
                                       <li><a href="">Product</a></li>
                                       <li><a href="">Features</a></li>
                                       <li><a href="">Pricing</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="btn-login">
                                <a href="">login</a>
                            </div>
                            <div className="btn-mobile">
                                <img className="open" src={hamburger} alt="" />
                                <img className="close" src={cross} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-navegation">
                    <nav>
                        <ul>
                            <li><a href="">Product</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                        
                        </ul>
                    </nav>
                    <div className="btn-login-mobile">
                       <a href="">login</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

