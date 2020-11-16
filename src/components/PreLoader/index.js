import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:100vh;
    background: #fff;
    h2{
        font-weight:bold;
        text-align:center;
    }
`;

export default function Index() {
    return (
        <Wrapper className="d-flex align-items-center justify-content-center">
            <h2>Blackpeppereats</h2>
        </Wrapper>
    )
}
