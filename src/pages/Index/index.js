import React, { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as UI from './style';
import Banner from '../../components/Banner';
// import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import FoodItem from '../../components/FoodItem';
import AppStore from '../../components/AppStore';
import Offers from '../../components/Offers'
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
        dots: true,
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
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //           slidesToShow: 3,
        //           slidesToScroll: 1,
        //           infinite: true,
        //           dots: true
        //         }
        //     },
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 991,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      };
    render(){
        return (
            <div>
                <UI.Wrapper>
                    {/* <Header/> */}
                    <Banner/>
                    <section className="popular">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center heading">
                                <h3 className="mb-0">What’s Popular?</h3>
                                <div className="d-flex slider-arrows">
                                    <div><img src={require(`../../assets/images/arrow-left.svg`)} alt="" className="arrow-left" onClick={this.previous}/></div>
                                    <div><img src={require(`../../assets/images/arrow-right.svg`)} alt="" className="arrow-right" onClick={this.next}/></div>
                                </div>
                            </div>
                        </div>
                        <div className="container popular-slider pr-0">
                            <Slider ref={c => (this.slider = c)} {...this.settings}>
                                <FoodItem data={{
                                    img:require('../../assets/images/beef.jpg'),
                                    heading:"Jollof Rice & Beef",
                                    desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
                                    price:"4,670.00"
                                }}/>

                                <FoodItem data={{
                                    img:require('../../assets/images/chicken.jpg'),
                                    heading:"Jollof Rice & Chicken-in-Stew",
                                    desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
                                    price:"5,670.00"
                                }}/>

                                <FoodItem data={{
                                    img:require('../../assets/images/spag.jpg'),
                                    heading:"Spaghetti & Barbeque chicken",
                                    desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
                                    price:"6,670.00"
                                }}/>

                                <FoodItem data={{
                                    img:require('../../assets/images/rice.jpg'),
                                    heading:"Chinese Rice & Beef",
                                    desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
                                    price:"7,670.00"
                                }}/>

                            </Slider>
                        </div>
                    </section>

                    <section className="categories">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center heading">
                                <h3 className="mb-0">Our Categories</h3>
                                <Link to="">See All</Link>
                            </div>

                            <div className="categories-content">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Link to="/">
                                            <div className="category-item d-flex align-items-center justify-content-center" style={{backgroundImage:`linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%), url(${require('../../assets/images/breakfast.jpg')})`}}>
                                                    <h6>Breakfast Foods</h6>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3">
                                        <Link to="">
                                            <div className="category-item d-flex align-items-center justify-content-center" style={{backgroundImage:`linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%), url(${require('../../assets/images/fastfoods.jpg')})`}}>
                                                    <h6>Fast Foods</h6>
                                            </div>
                                        </Link> 
                                    </div>

                                    <div className="col-lg-3">
                                        <Link to="">
                                            <div className="category-item d-flex align-items-center justify-content-center" style={{backgroundImage:`linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%), url(${require('../../assets/images/pizzas.jpg')})`}}>
                                                    <h6>Pizzas</h6>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3">
                                        <Link to="">
                                            <div className="category-item d-flex align-items-center justify-content-center" style={{backgroundImage:`linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%), url(${require('../../assets/images/beef.jpg')})`}}>
                                                    <h6>Beef Soups</h6>
                                            </div> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="download pt-0">
                        <div className="container">
                            <div className="d-flex align-items-center mx-auto download-content">
                                <div className="bell d-flex align-items-center justify-content-center">
                                    <img src={require('../../assets/images/bell-white.svg')} alt="" className=""/>
                                </div>
                                <h3 className="mb-0">Get our App!</h3>
                                <div className="d-flex align-items-center">
                                    <Link to="">
                                        <div className=" store-container appstore">
                                            <AppStore type="Appstore"/>
                                        </div>
                                    </Link>

                                    <Link to="">
                                        <div className=" store-container appstore">
                                            <AppStore type="Playstore"/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pt-0">
                        <div className="heading container">
                            <h3 className="mb-0">Offers</h3>
                        </div>
                        <div>
                            <Offers/>
                        </div>
                    </section>

                    {/* <Footer/> */}
                    
                </UI.Wrapper>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         participant:state.Participant.participant
//     }
// }
// export default connect(mapStateToProps)(Index)

