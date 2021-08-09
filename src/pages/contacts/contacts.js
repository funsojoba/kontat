import Card from "../../components/card"
import AddContact from "../../components/addContact"
import UserCard from "../../components/userCard"
import Avatar from "../../components/avatar"
import Header from "../../components/navbar"

import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


import getContact from "../../redux/actions/contacts/contact.action.js.js"
import fetchUser from "../../redux/actions/contacts/user.action"
import { searchContact } from "../../redux/actions/contacts/contact.action.js.js"

import MailModal from "../../components/mailModal"


import {
    Icon,
    CardWrapper,
    NoContact,
    Wrapper
} from './styles'


const Contact = ({ contactsData, getContact, userData, getUser, searchContact }) => {
    const [toggle, setToggle] = useState(false)
    const [toggleShow, setShow] = useState(false)
    const [mailModal, setMailModal] = useState(false)
  
    useEffect(() => { getContact() }, [getContact])
    useEffect(() => { getUser() }, [getUser])

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleClose = () => {
        setToggle(false)
    }

    const handleShow = () => {
        setShow(!toggleShow)
    }

    const logOut = ()=>{
        localStorage.clear()
        return <Redirect to='/'/>
    }
    const handleMail = ()=>{
        setMailModal(!mailModal)
        console.log(mailModal)
    }

    return <>
        <ToastContainer />
        <AddContact translate={toggle ? '0px' : '-500px'} handleClose={handleClose} />
        <Header count={contactsData.count}>
        </Header>
        <MailModal display={mailModal ? 'flex' : 'none'} close={()=> setMailModal(false)} ></MailModal>
        <Wrapper>
        {contactsData.count < 1 ? (
            <CardWrapper>
                <NoContact>You don't have any contacts yet</NoContact>
            </CardWrapper>
            ) :(
        <CardWrapper>
            {contactsData && contactsData.data && contactsData.data.map(card => (
        
                <Card key={card.id}
                    firstname={card.first_name}
                    lastname={card.last_name}
                    email={card.email}
                    phone={card.phone}
                    avatar={card.avatar} 
                    handleMail={handleMail}
                    link={`detail/${card.id}`}
                    />))
            }
        </CardWrapper>
        )}
        </Wrapper>
        <Icon onClick={handleToggle}>
            <i className="fas fa-plus fa-lg"></i>
        </Icon>

        <UserCard show={toggleShow ? '1' : '0'} logOut={logOut} />
        <Avatar background={`${userData.avatar}`} onClick={handleShow}></Avatar>
    </>
}

const mapStateToProps = state => ({
    contactsData: state.contactReducer.contacts,
    userData : state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
    getContact: () => dispatch(getContact()),
    getUser: () => dispatch(fetchUser()),
    searchContact: ()=> dispatch(searchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)