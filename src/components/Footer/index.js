import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Wrapper = styled.footer`

@media (max-width:500px){
    
}
`;


export default function Index() {
    return (
        <Wrapper style={{backgroundImage:`linear-gradient(rgba(31,9,48,0.3), rgba(31,9,48,.3)), url(${require(`../../assets/images/banner.jpg`)})`}}>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>

        </Wrapper>
    )
}
