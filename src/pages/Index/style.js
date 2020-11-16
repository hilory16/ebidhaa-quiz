import styled from 'styled-components';

export const Wrapper = styled.div`
   
    .program-desc{
        font-family: Lato;
        font-weight: 900;
        font-size: 50px;
        line-height: 60px;
        color: #FFFFFF;
    }
    p.small-heading{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 35px;
        color: #FFFFFF;
    }
    section{
        padding:66px 0;
        h3{
            font-weight: 500;
            font-size: 48px;
            line-height: 72px;
            color: #000000;
        }
    }
    .popular{
        .heading{
            margin-bottom:37px;
            .slider-arrows{
                .arrow-left{
                    margin-right:22px;
                }
                img{
                    width:50px;
                    cursor:pointer;
                }
            }
        }
        
    }
    .categories{
        .heading{
            margin-bottom:28px;
        }
        a{
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 161.2%;
            color: #000000;
        }
        .category-item{
            height:248px;
            // background-size:cover;
            background-size:115%;
            border-radius: 20px;
            background-position:center;
            cursor:pointer;
            transition:all ease-in-out .4s;
            padding:0 15px;
            h6{
                font-weight: 500;
                font-size: 32px;
                line-height: 48px;
                color: #FFFFFF;
            }
            :hover{
                background-size:125%;
            }
        }
    }
    .offers{
        .heading{
            margin-bottom:37px;
        }
    }
    .download{
        padding:97px 0 97px 0;
        .download-content{
            width:fit-content;
        }
        .comp-app{

        }
        .store-links{

        }
        .bell{
            width:88px;
            height:81px;
            background:#000;
            border-radius: 8px;
            margin-right:48px;
            img{
                width:30px;
            }
        }
        h3{
            margin-right:53px;
        }
        .store-container{
            width:208px;
        }
        .appstore{
            margin-right:32px;
        }
        
    }
    .popular-slider-2{
        padding:80px 0 100px 0;
    }
    .download-now{
        background: #32114B;
        .left{
            height:280px;
            position:relative;
            img{
                width:100%;
                // position:absolute;
                // bottom:0%;
                height:100%;
                margin-top:-5%;
                margin-left:-10%;
                // transform: scale(1.1);
            }
        }
    }

    @media (max-width:1427px){
        
    }
    
    @media (max-width:1283px){
        .popular-content .text h6{
            font-size:21px !important;
        }
    }
    @media (max-width:1225px){
        .popular-content .text h6{
            font-size:20px !important;
        }
    }
    @media (max-width:1168px){
        .download h3 {
            margin-right: 35px;
        }
        section h3 {
            font-size: 44px;
            line-height: 68px;
        }
        .download .bell {
            width: 70px;
            height: 65px;
            margin-right: 30px;
            .download .bell img{
                width:25px;
            }
        }
        .download .appstore {
            margin-right: 20px;
        }
        .download .store-container {
            width: 200px;
        }
    }
        
    @media (max-width: 991px){
        section{
            padding:50px 0;
        }
        .download{
            padding:70px 0;
        }
        .download{
            .download-content{
                display: block !important
            }
            .download-content .comp-app, .download-content .store-links{
                width:fit-content;
                margin:0 auto 30px auto;
            }
            .download-content .store-links{
                width:fit-content;
                margin:0 auto;
            }
        }
    }
    @media (max-width: 500px){
        section{
            padding:45px 0;
        }
        .download{
            padding:60px 0;
        }
        section h3 {
            font-size: 34px;
            line-height: 40px;
        }
        .categories a {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 161.2%;
            color: #000000;
        }
        .download .store-container{
            width:160px;
        }
        .download .bell {
            width: 60px;
            height: 55px;
            margin-right: 30px;
        }
        .download .bell img {
            width: 25px;
        }
        .download h3 {
            margin-right: 0px;
        }
    }
    @media (max-width: 380px){
        
    }
    @media (max-width: 360px){
        
    
    }
    @media (max-width: 340px){
        .download .bell{
            margin-right:20px;
            width:46px;
            height:42px;
            img{
                width:16px;
            }
        }
        section h3 {
            font-size: 30px;
            line-height: 40px;
        }
        .download .store-container {
            width: 145px;
        }
        .download .appstore {
            margin-right: 6px;
        }
        .download h3 {
            margin-right: 0px;
        }
        .categories a {
            font-size: 16px;
        }
    }
}
// @media (min-width: 1350px){
//     .container {
//         max-width: 1250px;
//     }
// }
`;