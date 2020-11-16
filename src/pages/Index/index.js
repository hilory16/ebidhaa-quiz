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
import PopularSlider from '../../components/PopularSlider'
import AppStore from '../../components/AppStore';
import Offers from '../../components/Offers'
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
                    {/* <Header/> */}
                    <Banner/>
                    <section className="popular">
                        <PopularSlider data={this.data}/>
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

                    <section className="pt-0 offers">
                        <div className="heading container">
                            <h3 className="mb-0">Offers</h3>
                        </div>
                        <Offers/>
                        
                    </section>

                    <section className="">
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

