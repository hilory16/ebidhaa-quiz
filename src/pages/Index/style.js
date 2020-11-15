import styled from 'styled-components';

export const Wrapper = styled.div`
    .slick-dots li button:before {
        color: #fff !important;
        opacity:.6;
    }
    .slick-dots li.slick-active button:before{
        opacity:.35;
       
    }
    .slick-dots {
        bottom: -70px;
    }
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
        .popular-slider{
            padding-right:0 !important;
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
    .download{
        .download-content{
            width:fit-content;
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
    .app-features{
        background: #1E0C2D;
        color:#fff;
        position:relative;
        .bg{
            object-fit:contain;
            opacity:.1;
        }
        .features-content{
            height:fit-content;
        }
        .left{
            position:relative;
            // .pattern{
            //     position:absolute;
            //     bottom:0;
            //     left:0;
            //     height:50%;
            // }
            .phones{
                width:100%;
                .phone-1{
                    // width:50%;
                    // z-index:200;
                    // height:auto;
                }
                // .phone-2{
                //     width:45%;
                //     margin-left:-10%;
                //     height:auto;
                // }
            }
        }
        .right{
            
            h6{
                font-family: Lato;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 30px;
                color: #FFFFFF;
            }
            ul li{
                font-family: Lato;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 30px;
                color: #FFFFFF;
            }
            .download-app{
                a{
                    width:45%;
                    img{
                        width:100%;
                    }
                }
            }
        }
    }
    .testimonials{
        background-color: #1E0C2D;
        background-image:linear-gradient(45deg, #24D0F6,#24D0F6);
        background-blend-mode: multiply;
        position:relative;
        .testimonies{
            padding-right:0 !important;
        } 
        .top-right{
            .content{
                width:100%;
            }
            img{
            }
        }
        .small-cloud{
            position:absolute;
            top:0%;
            right:0;
            width:50%;
            height:60%;
            img{
                // object-fit:contain;
                margin-top:-10%;
                height:100%;
                width:100%;
                opacity:.1;
            }
        }
        .testimonial-item{
            .testimonial-content{
                .testimony{
                    background: radial-gradient(50% 50% at 50% 50%, #321847 0%, rgba(47, 30, 61, 0.64) 100%);
                    border-radius: 10px;
                    font-family: Lato;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 157%;
                    color: #FFFFFF;
                    height:150px;
                }
                .meta{
                    img{
                        width:60px;
                    }
                }
                .bio{
                    font-family: Lato;
                    font-size: 18px;
                    line-height: 157%;
                    color: #FFFFFF;
                    h6{

                    }
                    p{
                        font-weight: normal;
                        font-size: 16px;
                        color:rgba(255,255,255,.8);
                    }
                }
            }
        } 
        .get-started{
            a{

            }
        }
    }
    .become{
        .left{
            position:relative;
            .user-1{
                // background: #321847;
                // mix-blend-mode: multiply;
                // border-radius: 16.3326px;
                // background-repeat:no-repeat;
                // height:70%;
                width:105%;
                margin-left:-15%;
                margin-top:-5rem;
                img{
                    height:100%;
                    width:100%;
                }
                
                // background-size:cover;
                // z-index:50;
                // position:relative;
                // background-position:top center;

            }
        }
        // .drop{
        //     position:absolute;
        //     left:-50px;
        //     top:0;
        //     z-index:-1;
        //     height:100%;
        //     img{
        //         height:100%;
        //         width:100%;
        //     }
        // }
        .right{
            .text{
                
                z-index:100;
                position:relative;
            }
        }
        .user-2{
            img{
                // height:380px;
                width:100%;
                margin-top:-28%;
                margin-right:-15%;
            }
            
            // border-radius: 16.3326px;
            // background-position:center;
            // background-repeat:no-repeat;
            // background-size:cover;
            // width:100%;
            // img{
            //     width:50%;
            //     border-radius: 16.3326px;
            //     margin-top:-20%;
            // }
        }
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
        .become .user-2 img{
            margin-top:-40%;
        }
    }
    
    @media (max-width:1300px){
        .download-now{
            .left{
                img{
                    // bottom:-7.5%;
                    // transform: scale(1.3);
                }
            }
        }
    }
    @media (max-width:1110px){
        .become .user-2 img{
            margin-top:-55%;
            margin-right: 0%;
        }
        .become .left .user-1 {
            width: 105%;
            margin-left: -10%;
            margin-top: -5rem;
        }
        .download-now{
            background: #32114B;
            .left{
                // height:300px;
                img{
                    // bottom:-10%;
                    margin-top: -7%;
                    // height:120%;
                    // transform: scale(1);
                }
            }
        }
    }
        
    @media (max-width: 991px){
    
        .become{
            .become-content{
                padding:0 !important;
            }
            .left{
                .user-1{
                    // height:400px;
                    margin-left: -6%;
                    margin-top: -3rem;
                    z-index:50;
                }
            }
            // .drop{
            //     position:absolute;
            //     left:-50px;
            //     top:0;
            //     z-index:-1;
            //     height:100%;
            //     img{
            //         height:100%;
            //         width:100%;
            //     }
            // }
        }
        .download-now{
            .left{
                height:230px;
                img{
                    margin-left: -4%;
                }
            }
            .right{
                .get-started{
                    a{
                        width:45%;
                    }
                    img{
                        width:100%;
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        .download-now .left img {
            transform:scale(1);
        }
        // .app-features .left .phones .phone-2 {
        //     width: 52%;
        // }
        // .app-features .left .phones .phone-1 {
        //     width: 59%;
        // }
        // .app-features .left{
        //     padding-bottom:35px;
        // }
        .become .left .user-1 {
            margin-left: 0%;
            margin-top: 0rem;
        }
    }
    @media (max-width: 500px){
        .download-links{
            // justify-content:between !important;
            a{
                width:45%;
                img{
                    width:100%;
                }
            }
        }
        .program-desc{
            font-size:45px;
            line-height: 55px;
        }
        .become .left .user-1 {
            width: 95%;
        }
    
    }
    @media (max-width: 380px){
        .program-desc{
            font-size:37px;
            line-height: 47px;
        }
        p.small-heading{
            font-size: 18px;
            line-height: 30px;
        }
    
    }
    @media (max-width: 360px){
        .program-desc{
            font-size:37px;
            line-height: 47px;
            margin-bottom:20px !important;
        }
        p.small-heading{
            font-size: 16px;
            line-height: 27px;
            margin-bottom:20px !important;
        }
    
    }
    @media (max-width: 320px){
        .program-desc{
            font-size:35px;
            line-height: 40px;
            margin-bottom:20px !important;
        }
        p.small-heading{
            font-size: 16px;
            line-height: 27px;
            margin-bottom:20px !important;
        }
    }
}
// @media (min-width: 1350px){
//     .container {
//         max-width: 1250px;
//     }
// }
`;