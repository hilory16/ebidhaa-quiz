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
    .top{
        margin-bottom:70px;
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
                    font-weight: 300;
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
                margin-right:15px;
                list-style:none;
                img{
                    width:22px;
                }

                .facebook{
                    width:11px;
                }
                .twiiter{
                    width:22px;
                }
                .instagram{
                    width:20px;
                }
            }
        }
    }
    @media (max-width:500px){
        .download-app .appstore {
            margin-right: 5px;
        }
        .top {
            margin-bottom: 30px;
        }
    }
`;


export default function Index() {
    return (
        <Wrapper style={{backgroundImage:`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))`}}>
            <div className="pattern" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${require(`../../assets/images/footer-pattern.svg`)})`}}>

            </div>
            <div className="container">
                <div className="row align-items-center top">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <h4 className="mb-0"><Link to="">Blackpeppereats</Link></h4>
                    </div>

                    <div className="col-lg-6   d-flex justify-content-lg-end download-app ">
                        <Link to="/" className="appstore">
                            <AppStore type="Appstore" alternate/>
                        </Link>
                        <Link to="/" className="pr-md-4 d-block">
                            <AppStore type="Playstore" alternate/>
                        </Link>
                    </div>

                </div>

                <div className="row align-items-center flex-column-reverse flex-column flex-md-row ">
                    <div className="col-md-4">
                        <p className="mb-0 copyright">© 2020 Blackpepper</p>
                    </div>

                    <div className="col-md-8 mb-3 mb-md-0">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 d-flex justify-content-md-center links mb-3 mb-md-0">
                                <ul className="p-0 m-0 d-flex align-items-center">
                                    <li className=""><Link to="">Legals</Link></li>
                                    <li className=""><Link to="">Legals</Link></li>
                                    <li className=""><Link to="">Legals</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-6  col-md-4 d-flex justify-content-md-end socials">
                                <ul className="m-0 p-0 d-flex align-items-center">
                                    <li className="first">
                                        <a href=""><img src={require(`../../assets/images/facebook.svg`)} alt="" className="facebook"/></a>
                                    </li>
                                    <li className="">
                                        <a href=""><img src={require(`../../assets/images/twitter.svg`)} alt="" className="twitter"/></a>
                                    </li>
                                    <li className="">
                                        <a href=""><img src={require(`../../assets/images/instagram.svg`)} alt="" className="instagram"/></a>
                                    </li>
                                    <li className="">
                                        <a href=""><img src={require(`../../assets/images/youtube.svg`)} alt="" className="youtube"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

        </Wrapper>
    )
}
