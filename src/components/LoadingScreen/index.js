import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:fixed;
    z-index:3000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,.8);

`;

export default function Index() {
    return (
        <Wrapper>
            <div className="d-flex align-items-center justify-content-center text-white h-100">
                <div>
                    <img src={require('../../assets/img/rolling.gif')} alt="" />
                    <h6 className="text-center">Please wait...</h6>
                </div>
            </div>
        </Wrapper>
    )
}
