import styled from "styled-components";


export const Body = styled.div`
    background: #F9FAFF;
    display:flex;
    padding:30px;
    flex-wrap:wrap;
    margin-top:130px;
    justify-content: space-around;
    position:relative;
`

export const Container = styled.div`
    margin: 7.5px;
    flex:1;
    border-radius:30px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .1);
    padding:30px;
    background:#fff;
`

export const DetailSection = styled.div`
    width: 100%;
`

export const ImageDiv = styled.div`
    width: 220px;
    height:220px;
    border-radius:50%;
    margin:auto;
    background:url(${props => props.avatar ? props.avatar : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627605865/contact_api/avatar3_chs26r.png"});
    background-size:cover;
    background-position: center;
    position:relative;
    overflow:hidden;
    cursor: pointer;

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

export const Name = styled.div`
    border-bottom: solid 1px #D1D1D1;
    h3{
        color:#525252;
        text-align:center;
    }
    `

export const NumberDiv = styled.div`
    border-bottom: solid 1px #D1D1D1;
    p{
        text-align:center;
        color:#525252;
    }
`

export const Socials = styled.div`
    padding:10px;
    display:flex;
    justify-content:space-around;

    a{
        color:#525252;
        display:inline-block;
    }
`

export const DeleteDiv = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const Small = styled.div`
    text-align: center;
    color: #10BDA8;
`

export const Arrow = styled.div`
    position: absolute;
    background: #10BDA8;
    width:50px;
    height:30px;
    border-radius:10px;
    top:0;
    left:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor:pointer;
`

export const ErrMsg = styled.small`
    color: #FF2A5D;
    margin-bottom: 5px;
`