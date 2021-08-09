import Input from "../../../components/input";
import TextArea from "../../../components/textArea";
import Button from "../../../components/button";
import Header from "../../../components/navbar";
import DeleteModal from "../../../components/deleteModal";
import Modal from "../../../components/modal";
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import validateFile from "../../../validateFile";

import { connect } from "react-redux";
import { useState, useEffect } from "react";
import sendMail from "../../../redux/actions/contacts/sendMail.action";
import updateContact from "../../../redux/actions/contacts/updateContact.action";
import getContactDetail from "../../../redux/actions/contacts/contactDetail.action";
import deleteContact from "../../../redux/actions/contacts/deleteContact.action";
import getContactAvatar from "../../../redux/actions/contacts/contactAvatar.action";

import { Body, Container, DetailSection, ImageDiv, Name, NumberDiv, Socials, DeleteDiv, Form, Small, Arrow, ErrMsg } from './detailStyle'
import validateMail from "./validateMail";

const DetailPage = ({ sendMail, match, updateContact, getContactDetail, contactDetailData, deleteContact, getContactAvatar }) => {
    let id = match.params.id

    useEffect(()=> getContactDetail(id), [getContactDetail, id])

    const previous = () => {
        window.history.back()
    }

    const [toggleModal, setToggleModal] = useState(false)

    const [openModal, setOpenModal] = useState(false)

    const toggle = () => {
        setToggleModal(!toggleModal)
    }

    const firstInitial = contactDetailData.first_name.slice(0, 1).toUpperCase()
    const lastInitial = contactDetailData.last_name.slice(0, 1).toUpperCase()
    return <>
        <ToastContainer />
        <Header  display="none" count={firstInitial + lastInitial } />
        <DeleteModal onClick={()=>deleteContact(id)} name={contactDetailData.first_name} display={toggleModal ? 'flex' : 'none'} close={() => setToggleModal(false)}></DeleteModal>
        <Body>
            <Arrow onClick={previous}>
                <i className="fas fa-long-arrow-alt-left fa-lg"></i>
            </Arrow>
            <Container>
                <DetailSection>
                    <Modal display={openModal ? "flex" : "none"} close={()=>setOpenModal(false)}>
                        <Formik
                            validationSchema={validateFile}
                            initialValues={{avatar:""}}
                            onSubmit={async values =>{
                                const imageInput = document.querySelector('#avatar')
                                let data = new FormData()
                                data.append('avatar', imageInput.files[0])
                                getContactAvatar(data, id)
                            }}
                        >
                            {({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                    <Input 
                                        type="file"
                                        name="avatar"
                                        value={values.avatar}
                                        onBlur={handleBlur}
                                        onChange={handleChange} 
                                        id="avatar"
                                        />
                                    <ErrMsg>{touched.avatar && errors.avatar ? errors.avatar : null}</ErrMsg>
                                    <Button type="submit">Upload</Button>
                                </Form>
                            )}
                        </Formik>
                    </Modal>
                    <ImageDiv onClick={()=> setOpenModal(true)} avatar={contactDetailData.avatar}>
                        <div className="photo"><i className="fas fa-camera fa-2x"></i></div>
                    </ImageDiv>

                    <Name>
                        <h3>{contactDetailData.first_name} {contactDetailData.last_name}</h3>
                    </Name>

                    <NumberDiv>
                        <p>{contactDetailData.phone}</p>
                         <p>{contactDetailData.email}</p>
                         <p>{contactDetailData.state}</p>
                    </NumberDiv>

                    <Socials>
                        {contactDetailData.facebook ? <a href={contactDetailData.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a> : null}
                        {contactDetailData.twitter ? <a href={contactDetailData.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a> : null}
                        {contactDetailData.instagram ? <a href={contactDetailData.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a> : null}
                        {contactDetailData.linkedin ? <a href={contactDetailData.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a> : null}
                    </Socials>

                    <DeleteDiv>
                        <Button border="none" background="#FF2A5D" onClick={toggle}> <i className="far fa-trash-alt fa-lg"></i> Delete</Button>
                    </DeleteDiv>
                </DetailSection>
            </Container>

            <Container>
                <Small>
                    <p>Update {contactDetailData.first_name}'s contact</p>
                </Small>
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                        facebook: "",
                        instagram: "",
                        twitter: "",
                        linkedin: "",
                        state: "",
                        avatar: "",
                    }}
                    onSubmit={
                        async (values) =>{
                            await updateContact(values, id)
                            console.log(values)
                        }
                    }
                >
                    {({handleBlur, handleChange, handleSubmit, errors, values, touched})=>(

                    <Form onSubmit={handleSubmit}>
                        <Input
                            placeholder={contactDetailData.first_name}
                            type="text"
                            onChange={handleChange}
                            value={values.first_name}
                            onBlur={handleBlur}
                            name="first_name" />

                        <Input
                            placeholder={contactDetailData.last_name}
                            type="text"
                            onChange={handleChange}
                            value={values.last_name}
                            onBlur={handleBlur}
                            name="last_name" />

                        <Input
                            placeholder={contactDetailData.email ? contactDetailData.email : "email"}
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            name="email" />
                        <Input
                            placeholder={contactDetailData.phone ? contactDetailData.phone : "phone"}
                            type="tel"
                            onChange={handleChange}
                            value={values.phone}
                            onBlur={handleBlur}
                            name="phone" />
                        <Input
                            placeholder={contactDetailData.facebook ? contactDetailData.facebook : "facebook"}
                            type="text"
                            onChange={handleChange}
                            value={values.facebook}
                            onBlur={handleBlur}
                            name="facebook" />
                        <Input
                            placeholder={contactDetailData.instagram ? contactDetailData.instagram : "instagram"}
                            type="text"
                                onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.instagram}
                            name="instagram" />
                        <Input
                            placeholder={contactDetailData.twitter ? contactDetailData.twitter : "twitter"}
                            type="text"
                            onChange={handleChange}
                            value={values.twitter}
                            onBlur={handleBlur}
                            name="twitter" />
                        <Input
                            placeholder={contactDetailData.linkedin ? contactDetailData.linkedin : "linkedin"}
                            type="text"
                            onChange={handleChange}
                            value={values.linkedin}
                            onBlur={handleBlur}
                            name="linkedin" />
                        <Input
                            placeholder={contactDetailData.state ? contactDetailData.state : "state"}
                            type="text"
                            onChange={handleChange}
                            value={values.state}
                            onBlur={handleBlur}
                            name="state" />
                        <Button
                            type="submit">Update Contact</Button>
                    </Form>
                    )}
                </Formik>

            </Container>

            <Container>
                <Small>
                    <p>Send mail to {contactDetailData.first_name}</p>
                </Small>
                <Formik
                    initialValues={{
                        subject: "",
                        message: ""
                    }}
                    validationSchema={validateMail}
                    onSubmit={ async (values) => {
                        await sendMail(values, id)
                    }}
                >
                    {({ values, errors, handleBlur, handleChange, handleSubmit, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                value={values.subject}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Subject"
                                name="subject"
                                type="text"
                            />
                            <ErrMsg>{touched.subject && errors.subject ? errors.subject : null}</ErrMsg>
                            <TextArea
                                placeholder="Message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="message"></TextArea>
                            <ErrMsg>{touched.message && errors.message ? errors.message : null}</ErrMsg>

                            <Button type="submit"> <i className="far fa-paper-plane"></i> Send mail</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Body>
    </>
}

const mapStateToProps = (state, ownProps) => {
    // let id = ownProps.match.params.id
    return {
        // detail: state.contactReducer.contacts.data.find(detail => detail.id === id),
        sendMailDetail: state.sendMailReducer,
        updateContact: state.updateContactReducer,
        contactDetailData: state.contactDetailReducer.detail
    }
}

export default connect(mapStateToProps, { sendMail, updateContact, getContactDetail, deleteContact, getContactAvatar })(DetailPage)
