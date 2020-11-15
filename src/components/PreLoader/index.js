import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:100vh;
    background: #1E0C2D;
`;

export default function Index() {
    return (
        <Wrapper className="d-flex align-items-center justify-content-center">
            <img src={require('../../assets/images/logo.svg')} alt=""/>
        </Wrapper>
    )
}
