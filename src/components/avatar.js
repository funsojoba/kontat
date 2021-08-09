import styled from "styled-components";


const AvatarDiv = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    background:url(${props => props.background ? props.background : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627554344/contact_api/ContactUser_ukg9ug.png"});
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

const Avatar = ({background, onClick})=>{
    return <AvatarDiv background={background} onClick={onClick} />
}

export default Avatar