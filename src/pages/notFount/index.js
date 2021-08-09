import Img from "../../components/img";

import { Body } from "../login/style";
import MyLink from "../../components/myLink";
import Paragraph from "../../components/paragraph";

import styled from "styled-components";

const DivSection = styled.div`
    flex:1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const ImageSection = styled.div`
    flex:1;
    @media only screen and (max-width:750px){
        display:none;
    }
`

const Div = styled.div`
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    display:flex;
    width:70%;
    position:relative;
    overflow:hidden;
    @media only screen and (max-width:750px){
        width:90%;
    }
`


const NotFound = ()=>{
    return <Body>
        <Div>
            <DivSection>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627771425/contact_api/authpage/404_fgpuqj.png"/>
                <Paragraph>Seems somthing is missing</Paragraph>
                <MyLink to="/">Go back home</MyLink>
            </DivSection>
            <ImageSection>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627771426/contact_api/authpage/undraw_Lost_re_xqjt_wzsudw.png"/>
            </ImageSection>

        </Div>
    </Body>
}

export default NotFound