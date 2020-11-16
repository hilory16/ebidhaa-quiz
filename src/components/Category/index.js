import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

export default function Index({type, bg}) {
    return (
        <Wrapper className="category-item d-flex align-items-center justify-content-center" style={{backgroundImage:`linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%), url(${bg})`}}>
            <h6>{type}</h6>
        </Wrapper>
    )
}
