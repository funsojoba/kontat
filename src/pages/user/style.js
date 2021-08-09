import styled from "styled-components";


export const Body = styled.body`
    padding:50px;
    background:#F9FAFF;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    margin-top:70px;
    box-sizing:border-box;
   @media only screen and (max-width:750px){
        padding:12px;
    }
`

export const Div = styled.div`
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    display:flex;
    flex-direction:column;
    width:70%;
    position:relative;
    overflow:hidden;
    margin-top:60px;
    @media only screen and (max-width:750px){
        width:90%;
        padding:20px}
        `

export const Image = styled.div`
    width:300px;
    height:300px;
    border-radius:50%;
    cursor:pointer;
    background:url(${props => props.background ? props.background : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627605865/contact_api/avatar3_chs26r.png"});
    background-size: cover;
    background-position: center;
    box-shadow:0px 2px 30px rgba(10, 136, 121, .1);
    position:relative;
    @media only screen and (max-width:750px){
        width: 200px;
        height:200px;
    }

    .photo{
        width:100%;
        height:100%;
        border-radius:50%;
        background: rgba(0,0,0,.5);
        color:#fff;
        display:flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom:0;
        left:0;
        transition:all ease 200ms;
        transform:scale(0)
    }

    &:hover .photo{
        transform: scale(1)
    }
`

export const Container = styled.div`
    padding: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.column ? props.column : ''};
`
export const H3 = styled.h3`
    color:#707070;
    text-align:center
`
export const Paragraph = styled.p`
    color:#707070;
    text-align:center
`

export const Form = styled.form`
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
export const ErrMsg = styled.small`
    color: #FF2A5D;
`