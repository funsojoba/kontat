import styled from "styled-components"
import { Link } from "react-router-dom"
import Input from "./input"
import Img from "./img"

// import { Formik } from "formik"
import { useState } from "react"
import { connect } from "react-redux"
import { searchContact } from "../redux/actions/contacts/contact.action.js"

const HeaderDiv = styled.div`
    background:#fff;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    color:#10BDA8;
    position:relative;
    padding:20px;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
    position:fixed;
    top:0;
    z-index:3;
    @media only screen and (max-width:750px){
        padding:10px
    }
`


const CounterDiv = styled.div`
    background:#10BDA8;
    width:50px;
    height:50px;
    border-radius:20px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Logo = styled.div`
    width:50px;
`

const HeaderContent = styled.div`
    flex:1;
    display:${props => props.display ? props.display : 'flex'};
    align-items: center;
    justify-content: center;
`

const Header = ({ count, display, searchContact }) => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
        searchContact(search)
    }

    return <HeaderDiv>
        <HeaderContent>
            <Logo>
                <Link to="/">
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628029248/contact_api/authpage/Group_23_lfxeeb.png" />
                </Link>
            </Logo>
        </HeaderContent>
        <HeaderContent display={display}>
            <Input value={search} onChange={handleChange} type="search" placeholder="Search" bottom='0px' />
        </HeaderContent>
        <HeaderContent>
            <CounterDiv>{count}</CounterDiv>
        </HeaderContent>
    </HeaderDiv>
}


const mapStateToProps = state =>({
    contactState : state.contactReducer.contacts
})

export default connect(mapStateToProps, { searchContact })(Header)