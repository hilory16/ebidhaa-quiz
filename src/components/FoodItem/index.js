import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width:26vw !important;
    margin-right:20px;
    overflow:hidden;
    .popular-content{
        .food-img{
            margin-bottom:14px;
            border-radius: 20px;
            height:264px;
            width:100%;
            object-fit:cover;
        }
        .text{
            h6{
                font-weight: normal;
                font-size: 22px;
                line-height: 161.2%;
                color: #000000;
            }
            .desc{
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                margin-bottom:11px;
            }
            .actions{
                background:#000;
                height:32px;
                padding:0 16px;
                border-radius: 5px;
                width:fit-content;
                .line{
                        border: 0.4px solid #404040;
                        height:16px;
                        margin:0 19px;
                }
                p{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 24px;
                        color: #FFFFFF;
                        cursor:pointer;
                }
            }
        }
    }
    
    @media (max-width:1168px){
        width:28.5vw !important;
    }
    @media (max-width:1064px){
        width:38vw !important;
    }

    @media (max-width:991px){
        
    }

    @media (max-width:785px){
        width:45vw !important;
    }
    @media (max-width:676px){
        width:55vw !important;
    }
    @media (max-width:550px){
        width:83vw !important;
        margin-right:15px;
    }
    @media (max-width:360px){
        width:88vw !important;
        
    }
    @media (max-width:340px){
        width:89vw !important;
        margin-right:10px;
        
    }
    @media (max-width:320px){
        .popular-content .text h6{
            font-size:18px !important;
        }
    }
`



export default function Index({data}) {
    const {img,heading,desc,price} = data
    return (
        <Wrapper className="popular-item">
            <div className="popular-content ">
                <img src={img} alt="" className="food-img"/>
                <div className="text">
                    <div className="d-flex flex-column justify-content-between h-100">
                        <h6 className="mb-1">{heading}</h6>
                        <div>
                            <p className=" desc">{desc} </p>
                            <div className="d-flex meta align-items-center justify-content-between actions">
                                <p className="mb-0 price">₦ {price} </p>
                                <div className="line"></div>
                                <p className="mb-0 add-to-cart">Add to Cart</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Wrapper>
    )
}
