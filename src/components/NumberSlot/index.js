import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    {
        font-family:Roboto;
        font-weight:500;
        font-size:70px;
        padding:15px 30px;
        background: rgba(255, 255, 255, 0.2);
        color:#fff;
        backdrop-filter: blur(5px);
        border-radius: 10px;
    }
    @media (max-width:991px){
        font-size:60px;   
    }
    @media (max-width:500px){
        padding:5px 15px;
        .number-slot{
            font-size:28px;
        }
    }
    @media (max-width:320px){
        padding: 5px 12px;
    }

`;

export default function Index({value}) {
    return (
        <Wrapper>
            <div className="d-flex align-items-center justify-content-center">
                <div className="number-slot">
                    {value}
                </div>
            </div>
        </Wrapper>
    )
}
