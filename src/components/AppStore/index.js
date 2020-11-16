import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #000000;
    border-radius: 8px;
    height:71px;
    width:100%;
    padding:0 15px;
    .circle{
        border-radius:50%;
        width:34px;
        height:34px;
        margin-right:19.5px;
    }
    p{
        font-weight: normal;
        font-size: 12px;
        line-height: 108.3%;
        padding-left:3px;
    }
    h6{
        font-weight: 500;
        font-size: 24px;
        line-height: 108.3%;
        margin-bottom:8px;
    }
    @media (max-width:1168px){
        h6 {
            font-size: 22px;
        }
        .circle {
            width: 32px;
            height: 32px;
            margin-right: 16px;
        }
    }
    @media (max-width:500px){
        padding:0 10px;
        height:58px;
        h6 {
            font-size: 20px;
        }
        .circle {
            width: 28px;
            height: 28px;
            margin-right: 12px;
        }
    }
    @media (max-width:340px){
        .circle {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
`;

export default function Index({type,alternate}) {
    return (
        <Wrapper className="store appstore d-flex align-items-center" style={{background:alternate ? '#DADADA' :'#000000'}}>
            <div>
                <div className="d-flex align-items-center">
                    <div className="circle" style={{background:alternate ? '#000' :'#F2F2F2'}}></div>
                    <div className="text" style={{color:alternate ? '#000' :'#F2F2F2'}}>
                        <p className="mb-0">Get on the</p>
                        <h6 className="">{type}</h6>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
