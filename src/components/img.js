import styled from "styled-components";

const ImgDiv = styled.img`
    width:100%
`

const Img = ({src, alt})=>{
    return <ImgDiv src={src} alt={alt} />
}

export default Img