import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const Wrapper = styled.div`
    .slick-initialized .slick-slide{
        // width:fit-content !important;
    }
    .offer-item{
        width: 83vw !important;
        margin-right: 20px;
        .image{
            border-radius: 30px;
            background-position:center;
            background-size:cover;
            height:384px;
            padding:0 0 47px 67px;
        }
        h6{
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 48px;
            color: #FFFFFF;
            margin-bottom:0;
        }
    }
    @media (max-width:991px){
        height:300px;
        .offer-item .image{
            height:300px;
        }
    }
    @media (max-width:767px){
        height:240px;
        .offer-item .image{
            height:240px;
            padding:0 30px 30px 30px;
        }
        .offer-item h6{
            font-size: 28px;
            line-height: 36px;
        }
    }
    @media (max-width:500px){
        height:180px;
        .offer-item .image{
            height:180px;
            border-radius: 20px;
        }
        .offer-item h6{
            font-size: 24px;
            line-height: 34px;
        }
        
    }
    @media (max-width:400px){
        height:160px;
        .offer-item .image{
            height:160px;
            padding:20px 30px 20px 30px;
        }
    }

    @media (max-width:370px){
        height:160px;
        .offer-item .image{
            padding:20px 20px 20px 20px;
            font-size: 22px;
            line-height: 30px;
        }
    }
`

export default class Index extends Component {
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        variableWidth:true,
        centerMode: true,
      };
    render() {
        return (
            <Wrapper className="offers-slider">
                <Slider {...this.settings}>
                    <div className="offer-item ">
                        <div className=" content" >
                            <div className="image d-flex  align-items-end" style={{backgroundImage:`linear-gradient(360deg, rgba(67, 67, 67, 0.4) -22.58%, rgba(67, 67, 67, 0.4) 197.58%), url(${require('../../assets/images/offer-1.jpg')})`}}>
                                <h6>Get 50% off a scheduled <br/>order from Tuesday!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="offer-item ">
                        <div className="content" >
                            <div className="image  d-flex  align-items-end" style={{backgroundImage:`linear-gradient(360deg, rgba(67, 67, 67, 0.4) -22.58%, rgba(67, 67, 67, 0.4) 197.58%), url(${require('../../assets/images/banner.jpg')})`}}>
                                <h6>Get 50% off a scheduled <br/>order from Tuesday!</h6>
                            </div>
                        </div>
                    </div>

                    <div className="offer-item ">
                        <div className="content" >
                            <div className="image d-flex  align-items-end" style={{backgroundImage:`linear-gradient(360deg, rgba(67, 67, 67, 0.4) -22.58%, rgba(67, 67, 67, 0.4) 197.58%), url(${require('../../assets/images/beef.jpg')})`}}>
                                <h6>Get 50% off a scheduled <br/>order from Tuesday!</h6>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Wrapper>
        )
    }
}
