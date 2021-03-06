import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header'
import SelectDropdown from '../../components/SelectDropdown'
const Wrapper = styled.div`
    height:100vh;
    background-size:cover;
    background-position:center;
    .content{
        transform:translateY(-18%);
    }
    .big-text{
        font-weight: 500;
        font-size: 48px;
        line-height: 72px;
        color: #000000;
        margin-bottom:29px;
    }
    .small-text{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #000000;
    }
    .order{
        margin-bottom:11px;
    }
    .select{
        width:552px;
        margin-right:16px;
    }
    .delivery-time{
        width:188px;
        margin-right:16px;
    }
    .get-food{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #E8E8E8;
        padding:16px 24px;
        border-radius: 5px;
        cursor:pointer;
        height:56px;
    }
    @media (max-width:1200px){
        
    }

    @media (max-width:991px){
        .select {
            width: 70%;
            margin-right: 16px;
        }
        .delivery-time {
            width: 43%;
            margin-right: 16px;
        }
        .get-food {
            white-space:nowrap;
        }
    }
    @media (max-width:767px){
        .big-text {
            font-size: 42px;
            line-height: 48px;
        }
    }
    @media (max-width:500px){
        .content {
            transform: translateY(-14%);
        }
        .select {
            width: 100%;
            margin-right: 0;
            margin-bottom:20px;
        }
        .delivery-time {
            width: 100%;
            margin-right: 0;
        }
        .options{
            flex-wrap:wrap;
        }
    }
    @media (max-width:360px){
        .logo-text{
            font-size: 29px;
            line-height: 28px;
        }
    }
    @media (max-width:340px){
        .logo-text{
            font-size: 26px;
            line-height: 28px;
        }
        .big-text {
            font-size: 38px;
            line-height: 43px;
        }
    }
`;

export default function Index(props) {
    const [location, setLocation] = useState("Select Closest BlackBells to you")
    const [time, setTime] = useState("Deliver now")
    return (
        <Wrapper style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${require(`../../assets/images/banner.jpg`)})`}}>
            <Header/>
            <div className="container h-100">
                <div className="content d-flex align-items-center w-100 h-100">
                    {/* {props.children} */}
                    <div className="w-100">
                        <h2 className="big-text">What are you eating Today?</h2>
                        <div className="order">
                            <div className="d-flex align-items-center flex-md-nowrap flex-wrap">
                                <div className="d-flex align-items-center mb-3 mb-md-0 options">
                                    <div className="select d-flex align-items-center">
                                        <SelectDropdown img={require(`../../assets/images/location.svg`)} value={location} changeHandler={(value) => setLocation(value)}>
                                            <option disabled selected>Select Closest BlackBells to you</option>
                                            <option value="ikeja">Ikeja</option>
                                            <option value="lekki">Lekki</option>
                                        </SelectDropdown>
                                    </div>
                                    <div className="delivery-time">
                                        <SelectDropdown img={require(`../../assets/images/time.svg`)} value={time} changeHandler={(value) => setTime(value)}>
                                            <option value="now">Deliver now</option>
                                            <option value="later">Deliver later</option>
                                        </SelectDropdown>
                                    </div>
                                </div>
                               
                                <p className="button get-food mb-0">Get Food</p>
                            </div>
                        </div>
                        <Link to="/"><p className="mb-0 small-text">Sign up for extra features</p></Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
