import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const Wrapper = styled.div`
    // position:fixed;
    transition:all ease .3s;
    top:0;
    left:0;
    width:100%;
    right: 0;
    height: fit-content;
    z-index:1000;
    .menu{
        width:18px;
        margin-right:15px;
        cursor:pointer;
    }
    .bell{
        width:20px;
        margin-right:8px;
    }
    .logo-text{
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
        margin-bottom:0;
    }
    .button{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        padding:8px 29px;
        border-radius: 6px;
    }
    .header-content{
        height:80px;
    }
    .nav-menu{
        li{
            list-style:none;
            a{
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
                color: #FFFFFF;
            }
            .active{
                font-weight: 400;
            }

        }
    }
    
    @media (max-width:991px){
        
        .nav-bar{
            background:#1E0C2D;
            position:fixed;
            top:0;
            left:-100%;
            height:100vh;
            width:50%;
            transition:all ease .3s;
        }
        .nav-bar.show{
            left:0;
        }
    }
    @media (max-width:767px){
        .nav-bar{
            width:70%;
        } 
    }
`;
export default function Index({half}) {
    const [sticky, setSticky] = useState(false)
    const [showNav, setShowNav] = useState(false)
    window.addEventListener('scroll', () =>{
        if(window.pageYOffset > "50"){
            setSticky(true)
        }else{
            setSticky(false)
        }
    })

    useEffect(() =>{

    },[])

    return (
        <Wrapper >
            <div className=" header-content align-items-center d-flex" style={{background:sticky ?" rgba(30,12,45,0)" :""}}>
                <div className="container  w-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-flex">
                                <img src={require(`../../assets/images/menu.svg`)} alt="hamburger menu" className="menu"  onClick={() => setShowNav(!showNav)}/>
                                <img src={require(`../../assets/images/bell.svg`)} alt="bell" className="bell"/>
                                <Link to="/"><h1 className="logo-text">Blackpeppereats</h1></Link>
                            </div>
                        </div>
                        
                        <div className={`col-lg-6 nav-bar ${showNav ? 'show' : ''}`}>
                            <div className="d-lg-flex align-items-center justify-content-end nav-menu">
                                <a href=""><p className="mb-0 button">Sign in</p></a>
                            </div>
                            
                        </div>

                        {/* <div className={`col-6 d-lg-none d-flex justify-content-end`}>
                            {showNav 
                            ? <img src={require(`../../assets/images/cancel.svg`)} alt="" style={{width:"25px"}} onClick={() => setShowNav(!showNav)}/>
                            : <img src={require(`../../assets/images/menu.svg`)} alt="" style={{width:"35px"}} onClick={() => setShowNav(!showNav)}/>}
                        </div> */}
                    </div>
                </div>
                
            </div>
        </Wrapper>
    )
}
