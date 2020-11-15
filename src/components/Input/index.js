import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    input{
        width:95%;
        outline:none;
        background: #FFFFFF;
        border-radius: 8px;
        height:50px;
        border:none;
        padding:0 15px;
        ::placeholder{
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 23px;
            color: #000000;
        }
    }
    label{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        margin-bottom:10px;
        
    }
    @media (max-width:767px){
        input{
            width:100%;
        }
    }
`;

export const TextInput = ({type, label, placeholder, value, onChange, optional}) =>{
    return(
        <Text>
            <label>{label}</label>
            <input type={type ? type : 'text'} placeholder={""} value={value} onChange={onChange} required={optional ? false : true }/>
        </Text>
    )
}

// export default function Index() {
//     return (
//         <div>
            
//         </div>
//     )
// }
