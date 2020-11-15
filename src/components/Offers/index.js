import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const Wrapper = styled.div`

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
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        variableWidth:true,
      };
    render() {
        return (
            <Wrapper>
                <Slider>
                    <div>
                        <div className="offer-item">
                            <h6>Get 50% off a scheduled <br/>order from Tuesday!</h6>
                        </div>
                    </div>
                    <div>2</div>
                </Slider>
            </Wrapper>
        )
    }
}
