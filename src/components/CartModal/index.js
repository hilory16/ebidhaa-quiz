import React,{useState} from 'react';
import styled from 'styled-components';
import SelectDropdown from '../../components/SelectDropdown'

const Wrapper = styled.div`
    position:fixed;
    z-index:3000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    .close{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0; 
    }
    .text-desc{
        font-weight: bold;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom:60px;
    }
    background-color: rgba(0, 0, 0, .35);
    background-image: linear-gradient(45deg, rgba(133, 18, 40, 0.2), rgba(133, 18, 40, 0.2));
    .left{
        .product-img{
            height:330px;
            background-size:cover;
            background-position:center;
            border-top-left-radius:5px;
        }
        .meta{
            background:#000;
            padding:30px 20px 30px 40px;
            border-bottom-left-radius:5px;
            .desc{
                color: #b7b5b5;
                line-height:20px;
                margin-bottom:35px;
            }
            input{
                border:none;
                outline:none;background:#000;
                color:#f2f2f2;
                width:50px;
                text-align:center;
                font-size:24px;
            }
            .buttons{
                background:#fff;
                border-radius:50%;
                width:60px;
                height:60px;
                cursor:pointer;
                img{
                    width:20px;
                }
                .remove{
              
                }
                .add{
                  
                }
            }
            .price{
                font-size:24px;
                font-weight:500;
            }
           
        }
        h4{
            margin-bottom:20px;
        }
    }
    .right{
        background:#fff;
        color:#000;
        padding:80px 60px !important;
        height:100%;
        h3{
            font-weight:500;
            font-size:34px;
            line-height:50px
            text-align:justify;
            text-align:center;
        }
        .select-container{
            border:1px solid #000;
            margin-bottom:15px;
            select{
            }
        }
        .confirm{
            color:#fff;
            background:#000;
            font-weight:500;
            font-size:20px;
            height: 56px;
            cursor:pointer;
        }
    }
    @media (max-width:991px){
        .left .product-img {
            height: 250px;
            border-top-right-radius: 5px;
        }
        .right {
            padding: 35px 35px !important;
        }
        .right h3{
            margin-bottom:30px;
        }
    }
    @media (max-width:767px){
        .left .product-img {
            height: 160px;
        }
        .left .meta {
            padding: 30px 15px 30px 15px;
        }
        .left .meta .buttons {
            width: 50px;
            height: 50px;
        }
        .right h3 {
            font-size: 22px;
            line-height: 34px;
        }
        .right {
            padding: 20px 15px !important;
        }
        .left{
            h4{
                font-size:24px;
                margin-bottom:15px;
            }
        }
        .content{
            height:100%;
            overflow-y:scroll;
        }
    }
    @media (max-width:330px){
        .left .meta input {
            width: 40px;
        }
        .left .meta .buttons {
            width: 40px;
            height: 40px;
        }
        .left .meta .buttons img {
            width: 15px;
        }
    }
`;

export default function Index({action, handleModal}) {
    const [number, setNumber] = useState(1)
    const [location, setLocation] = useState("Select Closest BlackBells to you")

    const decreaseInput = () =>{
        if(number < 2) return setNumber(1)
        setNumber(number - 1)
    }
    return (
        <Wrapper>
            <div className="d-flex align-items-md-center content justify-content-center text-white h-100 py-md-5 py-4" >
                <div className="close" onClick={() => handleModal()}>

                </div>
                <div className="container">
                    <div className="px-xl-5 px-3 px-lg-0">
                        <div className="row">
                            <div className="left col-lg-5 px-0">
                                <div className="product-img" style={{backgroundImage:`url(${require(`../../assets/images/banner.jpg`)})`}}>
                                </div>
                                <div className="meta">
                                    <h4 className="text-center">Spaghetti &amp; Barbeque Chicken</h4>
                                    <p className="desc">Gluten free Cauliflower crust dough with handcrafted tomato sauce, covered with a blend of fine cheese</p>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <p className="mb-0 price">₦4,670.00</p>
                                        <div className="mb-0 d-flex">
                                            <div className="buttons d-flex align-items-center justify-content-center" onClick={decreaseInput}>
                                                <img src={require('../../assets/images/remove.svg')} className="remove" />
                                            </div>
                                            <input type="text" value={number} min={1}/>
                                            <div className="buttons d-flex align-items-center justify-content-center"  onClick={() => setNumber(number + 1)}>
                                                <img src={require('../../assets/images/plus.svg')} className="add"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 px-0">
                                <div className="d-flex flex-column justify-content-between right ">
                                    <h3>We need to confirm the availability of the mean from the Black pepper Annex closest to you.</h3>

                                    <div>
                                        <div className="select d-flex align-items-center ">
                                            <SelectDropdown img={require(`../../assets/images/location.svg`)} value={location} changeHandler={(value) => setLocation(value)}>
                                                <option disabled selected>Select Closest BlackBells to you</option>
                                                <option value="ikeja">Ikeja</option>
                                                <option value="lekki">Lekki</option>
                                            </SelectDropdown>
                                        </div>
                                        <div className="mb-0 w-100 confirm d-flex align-items-center justify-content-center text-center">
                                            <p className="mb-0  ">Confirm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <p className="text-center text-desc col-lg-9 mx-auto">Your registration is successful. We will get in touch with you.</p> */}
                    </div>
                </div>
                
            </div>
        </Wrapper>
    )
}
