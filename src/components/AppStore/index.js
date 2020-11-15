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
        background: #F2F2F2;
        width:34px;
        height:34px;
        margin-right:19.5px;
    }
    p{
        font-weight: normal;
        font-size: 12px;
        line-height: 108.3%;
        color: #F2F2F2;
        padding-left:3px;
    }
    h6{
        font-weight: 500;
        font-size: 24px;
        line-height: 108.3%;
        color: #F2F2F2;
        margin-bottom:8px;
    }
`;

export default function Index({type}) {
    return (
        <Wrapper className="store appstore d-flex align-items-center">
            <div>
                <div className="d-flex align-items-center">
                    <div className="circle"></div>
                    <div>
                        <p className="mb-0">Get on the</p>
                        <h6 className="">{type}</h6>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
