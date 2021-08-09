
import styled, { keyframes } from "styled-components";
import Button from "./button";

const slideIn = keyframes`
    0% {transform:translateY(-10px); opacity:0}
    100% {transform:translateY(0); opacity:1}
`

const Body = styled.div`
    background: rgba(16, 189, 168, .6);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display:${props => props.display ? props.display : 'none'};
    justify-content: center;
    align-items:center;
    animation: ${slideIn} .12s ;
    `

const DivWrapper = styled.div`
    background:#fff;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    border-radius: 20px;
    width:70%;
    padding:30px;
    position:relative;
    @media only screen and (max-width:750px){
        width:90%;
        padding:15px;
    }
    `

const Div = styled.div`
    width:100%;

    h3{
        text-align:center;
        color: #757575;
    }
`
const Icon = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    
    .fas{
        color: #FF2B5E;
        background:#fff;
        border-radius:20px;
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
        cursor:pointer;
        transition:all 100ms ease-in;

        &:hover{
            transform:rotate(90deg)
        }
    }
`
const Btns = styled.div`
    display:flex;
`


const DeleteModal = ({ display, close, name, onClick }) => {
    return <Body display={display}>
        <DivWrapper>
            <Icon>
                <i onClick={close} className="fas fa-times-circle fa-2x"></i>
            </Icon>
            <Div>
                <h3>Are you sure you want to delete {name}'s contact?</h3>
                <Btns>
                    <Button onClick={close} >Cancle </Button> &nbsp;
                    <Button onClick={onClick} background="#FF2B5E" border="none">Delete <i class="far fa-trash-alt"></i></Button>
                </Btns>
            </Div>
        </DivWrapper>
    </Body>
}

export default DeleteModal