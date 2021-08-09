import styled from "styled-components";


const Avatar = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    background:url(${props => props.background ? props.backgorund : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627554344/contact_api/ContactUser_ukg9ug.png"});
    right: 20px;
    bottom:20px;
    border:solid 3px #fff;
    border-radius:50%;
    background-size:cover;
    background-position:center;
    transition: all ease 150ms;
    cursor:pointer;
    &:hover{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
        transform:scale(1.1)
    }
`

const Icon = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    left: 20px;
    bottom:20px;
    background:#F1F3FF;
    border:solid 3px #FFF;
    border-radius:50%;
    transition: all ease 150ms;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    color:#10BDA8;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .1);

    &:hover{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
        transform:scale(1.1)
    }
`

const CardWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:20px;

    justify-content: space-around;
`


const CountContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    background:#000;
`

const SearchDiv = styled.div`
    display:flex;
    align-items: center;
`

const NoContact = styled.div`
    color:#10BDA8;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .1);
    background:#fff;
    padding:30px;
    width:300px;
    border-radius:30px;
`

const Wrapper = styled.div`
    margin-top:60px
`

export {
    Avatar,
    Icon,
    CardWrapper,
    CountContainer,
    SearchDiv,
    NoContact,
    Wrapper
    
}

