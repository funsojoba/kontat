import styled from "styled-components"

const Body = styled.body`
    padding:50px;
    background:#F9FAFF;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    box-sizing:border-box;
    @media only screen and (max-width:750px){
        padding:10px;
    }
`

const Div = styled.div`
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    display:flex;
    flex-direction:column;
    width:70%;
    position:relative;
    overflow:hidden;
    @media only screen and (max-width:750px){
        width:90%;
    }
`
const SmallText = styled.small`
    color:#515151;
    text-align:center;
    display:inline-block;
    z-index: 5;
`
const Circle = styled.div`
    position:absolute;
    top:-70px;
    left:-60px;
    border-radius:50%;
    width:200px;
    height:200px;
    background: rgba(16, 189, 168, .4);
    @media only screen and (max-width:750px){
        top:-110px;
        left:-110px;
    }
`

const P = styled.p`
    letter-spacing:1.4px;
    color: #10BDA8;
    text-align:center;
    font-weight:light;
`

const Section = styled.div`
    display:flex;
    width: 100%;
    padding:20px;
    @media only screen and (max-width:750px){
        padding:0;
    }
`
const Form = styled.form`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content: space-around;
    padding:20px;

    @media only screen and (max-width:750px){
        padding:0;
        align-items:center;
    }
    
`
const Image = styled.div`
    flex: 1;
    display:flex;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width:750px){
        display:none;
    }
`

const ErrorMsg = styled.small`
    color:#FF2B5E;
    font-size:.6em;
    margin-bottom:5px ;
`


export {
    Body,
    Div,
    SmallText,
    Circle,
    P,
    Section,
    Form,
    Image,
    ErrorMsg
}

