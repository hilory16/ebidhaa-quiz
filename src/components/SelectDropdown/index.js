import React,{useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:56px;
    padding:0 20px 0 15px;
    background:#fff;
    border-radius: 5px;
    width:100%;
    span{
        img{
            width:14px;
            margin-right:16px;
        }
    }
    select{
        border:none;
        outline:none;
        width:100%;
        height:100%;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }
`
export default function index({img, children, value, changeHandler}) {
    return (
        <Wrapper className="d-flex align-items-center select-container">
            <span><img src={img} alt="" /></span>
            <select value={value} onChange={e => changeHandler(e.target.value)}>
                {children}
            </select>
        </Wrapper>
    )
}
