import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const Wrapper = styled.div`
    height:384px;
    overflow:hidden;
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
        }
    }
`

export default class Index extends Component {
    settings = {
        dots: true,
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
