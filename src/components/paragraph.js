import styled from "styled-components";


export const PTag = styled.p`
    letter-spacing:1.4px;
    color: #10BDA8;
    text-align:center;
    font-weight:light;
`

const Paragraph = ({children})=>{
    return <PTag>{children}</PTag>
}

export default Paragraph