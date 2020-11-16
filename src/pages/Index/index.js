import React, { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as UI from './style';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import FoodItem from '../../components/FoodItem';
import PopularSlider from '../../components/PopularSlider'
import AppStore from '../../components/AppStore';
import Offers from '../../components/Offers';
import Category from '../../components/Category'
export default class Index extends Component {
    data =[
        {
            img:require('../../assets/images/beef.jpg'),
            heading:"Jollof Rice & Beef",
            desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
            price:"4,670.00"
        },
        {
            img:require('../../assets/images/chicken.jpg'),
            heading:"Jollof Rice & Chicken-in-Stew",
            desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
            price:"5,670.00"
        },
        {
            img:require('../../assets/images/spag.jpg'),
            heading:"Spaghetti & Barbeque chicken",
            desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
            price:"6,670.00"
        },
        {
            img:require('../../assets/images/rice.jpg'),
            heading:"Chinese Rice & Beef",
            desc:"Same as our regular Jollof rice but Meatier. Perfect for a large party.",
            price:"7,670.00"
        }
    ]
    
    render(){
        return (
            <div>
                <UI.Wrapper>
                    <Banner/>
                    <section className="popular">
                        <PopularSlider data={this.data}/>
                    </section>

                    <section className="categories pb-0">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center heading">
                                <h3 className="mb-0">Our Categories</h3>
                                <Link to="">See All</Link>
                            </div>

                            <div className="categories-content">
                                <div className="row">
                                    <div className="col-xl-3 mb-4 mb-xl-0 col-md-6">
                                        <Link to="/">
                                            <Category type="Breakfast Foods" bg={require('../../assets/images/breakfast.jpg')}/>
                                        </Link>
                                    </div>

                                    <div className="col-xl-3 mb-4 mb-xl-0 col-md-6">
                                        <Link to="">
                                            <Category type="Fast Foods" bg={require('../../assets/images/fastfoods.jpg')}/>
                                        </Link> 
                                    </div>

                                    <div className="col-xl-3 mb-4 mb-xl-0 col-md-6">
                                        <Link to="">
                                            <Category type="Pizzas" bg={require('../../assets/images/pizzas.jpg')}/>
                                        </Link>
                                    </div>

                                    <div className="col-xl-3 mb-4 mb-xl-0 col-md-6">
                                        <Link to="">
                                            <Category type="Beef Soups" bg={require('../../assets/images/beef.jpg')}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="download">
                        <div className="container">
                            <div className="d-flex align-items-center mx-auto download-content flex-wrap">
                                <div className="d-flex comp-app">
                                    <div className="bell d-flex align-items-center justify-content-center">
                                        <img src={require('../../assets/images/bell-white.svg')} alt="" className=""/>
                                    </div>
                                    <h3 className="mb-0">Get our App!</h3>
                                </div>

                                <div className="store-links">
                                    <div className="d-flex align-items-center">
                                        <Link to="">
                                            <div className=" store-container appstore">
                                                <AppStore type="Appstore"/>
                                            </div>
                                        </Link>

                                        <Link to="">
                                            <div className=" store-container mr-0 appstore">
                                                <AppStore type="Playstore"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pt-0 pb-0 offers">
                        <div className="heading container">
                            <h3 className="mb-0">Offers</h3>
                        </div>
                        <Offers/>
                    </section>

                    <section className="popular-slider-2">
                        <PopularSlider data={this.data} mini/>
                    </section>

                    <Footer/>
                    
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

