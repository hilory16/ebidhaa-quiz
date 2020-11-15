import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        height:100%;
        z-index:2000;
        width:100%;
        background:rgba(0,0,0,.9);
        color:#fff;

        h3{
            font-family: Segoe;
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 47px;
            margin-bottom:40px;

        }
        form{
            
        }
        .close{
            cursor:pointer;
        }
    @media (max-width:767px){
            overflow-y:scroll;
            h3{
                font-size:28px;
                margin-bottom:30px;
                margin-top:20px;
            }
    }
`;

export default function Index({children, closeModal}) {
    return (
        <Wrapper className="form-modal py-3">
            <div >
                <div className="d-flex align-items-md-center h-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 mx-auto">
                                <div className="content">
                                    <div className="d-flex justify-content-end"><img src={require('../../assets/img/close.svg')} alt="" className="close" onClick={() => closeModal(false)}/></div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </Wrapper>
    )
}
