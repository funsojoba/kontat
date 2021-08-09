import styled from "styled-components";
import MyLink from "./myLink";

const Container = styled.div`
    margin:50px 10px 0;
    `

const Div = styled.div`
    padding:30px;
    background:#fff;
    position:relative;
    border-radius:80px;
    width:300px;
    height:auto;
    box-shadow: 0 6px 55px rgba(0,0,0,.06);
    transition: all 120ms ease-in;
    
    &:hover{
        box-shadow: 0 6px 55px rgba(0,0,0,.16);

    }

    @media only screen and (max-width:750px){
        width:250px;
    }

    @media only screen and (max-width:400px){
        width:95%;
    }
`

const ImageDiv = styled.div`
    width: 180px;
    height:180px;
    border-radius:50%;
    margin:auto;
    background:url(${props => props.avatar ? props.avatar : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627605865/contact_api/avatar3_chs26r.png"});
    background-size:cover;
    background-position: center;
`
const DetailDiv = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
`
const Name = styled.div`
    border-bottom: solid 1px #D1D1D1;
    h3{
        color:#525252;
    }
    `

const Numbers = styled.div`
    border-bottom: solid 1px #D1D1D1;
    p{
        color:#525252;
    }
`

const CardLink = styled.div`
    display:flex;
    justify-content:center;
    padding-top: 7px;
`


const Card = ({firstname, lastname, email, phone, avatar, link})=>{
    return <Container>
    <Div>
        <ImageDiv avatar={avatar}/>

        <DetailDiv>
            <Name><h3>{firstname} {lastname}</h3></Name>
            <Numbers>
                <p>{phone}</p>
                <p>{email}</p>
            </Numbers>
        </DetailDiv>

        <CardLink>
            <MyLink to={link}>Visit</MyLink>
        </CardLink>
    </Div>
    </Container>
}

export default Card