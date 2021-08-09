import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    position:fixed;
    right: 20px;
    bottom:100px;
    transform-origin:bottom right;
    transform: scale(${props => props.show ? props.show : '0'});
    transition:all ease-in 200ms;
`

const Div = styled.div`
    width:160px;
    border-radius:20px;
    background:#fff;
    box-shadow: 0 6px 23px rgba(0,0,0,.06);
    padding:15px;
    position: relative;

    a{
        color:#10BDA8;
        display:inline-block;
        padding:5px 10px;
        text-decoration:none;
        position:relative;
        overflow: hidden;
        
        &:after{
            content:"";
            position:absolute;
            left:0;
            bottom:0;
            width:0;
            height:5%;
            background:#10BDA8;
            transition:all ease-in-out 200ms;
        }

        &:hover::after{
            width:100%;
        }
    }
`

const Talk = styled.div`
    clip-path: polygon(100% 0, 17% 0, 100% 100%);
    background:#fff;
    width:50px;
    height:30px;
    position:absolute;
    bottom:-10px;
    right:10px;
`

const UserCard = ({ show, logOut }) => {
    return <Container show={show}>
        <Div>
            <Link to="/user" >Profile</Link>
            <Link to="#" onClick={logOut} >Logout</Link>

            <Talk />
        </Div>
    </Container>
}

export default UserCard