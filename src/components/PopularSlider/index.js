import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import FoodItem from '../FoodItem';

const Wrapper = styled.div`
    .popular-slider{
        padding-right:0 !important;
    }
    @media (max-width:1168px){
        
    }
`;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        variableWidth:true,
    };
    renderItem = () =>{
        return this.props.data ? this.props.data.map((item, i) =>(
            <FoodItem data={item} key={i}/>
        ))
        :null
    }
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className={`${this.props.mini ? 'd-none' : `d-flex`} justify-content-between align-items-center heading`}>
                        <h3 className="mb-0 mr-3">What’s Popular?</h3>
                        <div className="d-flex slider-arrows">
                            <div><img src={require(`../../assets/images/arrow-left.svg`)} alt="" className="arrow-left" onClick={this.previous}/></div>
                            <div><img src={require(`../../assets/images/arrow-right.svg`)} alt="" className="arrow-right" onClick={this.next}/></div>
                        </div>
                    </div>
                </div>
                <div className="container popular-slider">
                    <Slider ref={c => (this.slider = c)} {...this.settings}>
                       {this.renderItem()}
                    </Slider>
                </div>
            </Wrapper>
        )
    }
}
