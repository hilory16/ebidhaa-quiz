import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Wrapper = styled.div`
a{
    width:fit-content;
    // display:block;
}
.know-more{
    background: rgba(255, 255, 255, 0.25);
    color:#fff;
    font-family:Roboto;
    font-size:18px;
    width:250px;
    border-radius: 5px;
    padding:0 15px;
    height:60px;
    cursor:pointer;
    outline:none;
    border:none;
    text-align:center;
    position:relative;
    
    p{
        width:100%;
    }
    img{
        width:45px;
        margin-right:30px;
        position:absolute;
        left:13px;
        height: 51px;
        z-index: 10;
        // position:relative;
    }
    @media (max-width:500px){
        // width:200px;
        // height:50px;
        // img{
        //     height:41px;
        // }
    }
}
`;

export default function Button({link, text, type,action}) {
    const renderButton = (type) =>{
        switch(type){
            case "link":
                return(
                    <div className="d-flex align-items-center justify-content-center">
                        <Link to={link}>
                            <div className="know-more d-flex align-items-center">
                                <img src={require('../../assets/img/logo-mark-grey.svg')} alt="wiilyve logo" />
                                <p className="mb-0">{text}</p>
                            </div>
                        </Link>
                    </div>
                    
                )

            case "form":
                return(
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="know-more d-flex align-items-center">
                            <img src={require('../../assets/img/logo-mark-grey.svg')} alt="wiilyve logo" />
                            <p className="mb-0">{text}</p>
                        </button>
                    </div>
                   
                )

            case "modal":
                return(
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="know-more d-flex align-items-center" onClick={() => action(true)}>
                            <img src={require('../../assets/img/logo-mark-grey.svg')} alt="wiilyve logo" />
                            <p className="mb-0">{text}</p>
                        </div>
                    </div>
                    
                )


            default :
            return(
                <div className="d-flex align-items-center justify-content-center">
                    <Link to={link}>
                        <div className="know-more d-flex align-items-center">
                            <img src={require('../../assets/img/logo-mark-grey.svg')} alt="wiilyve logo" />
                            <p className="mb-0">{text}</p>
                        </div>
                    </Link>
                </div>
            )
        }
    }
    return (
        <Wrapper>
           {renderButton(type)}
        </Wrapper>
    )
}
