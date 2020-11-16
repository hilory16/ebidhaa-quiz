import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppStore from '../../components/AppStore'
const Wrapper = styled.footer`
    padding:64px 0 81px 0;
    position:relative;
    
    .pattern{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-position:cover;
    }
    h4{
        a{
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 48px;
            color: #F2F2F2;
        }
    }
    .download-app{
        margin-bottom:70px;
        .appstore{
            margin-right:32px;
        }
    }
    .copyright{
        font-weight: normal;
        font-size: 16px;
        line-height: 108.3%;
        color: #FFFFFF;
    }
    .links{
        ul{
            li{
                list-style:none;
                margin-right:45px;
                a{
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 108.3%;
                    color: #FFFFFF;
                }

            }
        }
    }
    .socials{
        ul{
            li{
                margin-right:10px;
                list-style:none;
                img{
                    width:22px;
                }
            }
        }
    }
@media (max-width:500px){
    
}
`;


export default function Index() {
    return (
        <Wrapper style={{backgroundImage:`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))`}}>
            <div className="pattern" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${require(`../../assets/images/footer-pattern.svg`)})`}}>

            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h4><Link to="">Blackpeppereats</Link></h4>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-end download-app">
                        <Link to="/" className="appstore">
                            <AppStore type="Appstore" alternate/>
                        </Link>
                        <Link to="/">
                            <AppStore type="Playstore" alternate/>
                        </Link>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <p className="mb-0 copyright">© 2020 Blackpepper</p>
                    </div>

                    <div className="col-lg-4 d-flex justify-content-center links">
                        <ul className="p-0 m-0 d-flex align-items-center">
                            <li className=""><Link to="">Legals</Link></li>
                            <li className=""><Link to="">Legals</Link></li>
                            <li className=""><Link to="">Legals</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 d-flex justify-content-end socials">
                        <ul className="m-0 p-0 d-flex align-items-center">
                            <li className="">
                                <a href=""><img src={require(`../../assets/images/facebook.svg`)} alt="" className=""/></a>
                            </li>
                            <li className="">
                                <a href=""><img src={require(`../../assets/images/twitter.svg`)} alt="" className=""/></a>
                            </li>
                            <li className="">
                                <a href=""><img src={require(`../../assets/images/instagram.svg`)} alt="" className=""/></a>
                            </li>
                            <li className="">
                                <a href=""><img src={require(`../../assets/images/youtube.svg`)} alt="" className=""/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}
