import { Body, Div, Image, Container, H3, Paragraph, Form, ErrMsg } from './style'
import Button from '../../components/button'
import Header from '../../components/navbar'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import Modal from '../../components/modal'

import { useState } from 'react'
import { Formik } from 'formik'
import validate from './validate'
import validateFile from '../../validateFile'
import { ToastContainer } from 'react-toastify'


import { connect } from 'react-redux'

import getUserAvatar from '../../redux/actions/contacts/userAvater.action'

const UserProfile = ({ userData, getUserAvatar }) => {
    // useEffect(() => { getUser() }, [getUser])
    const [openModal, setOpenModal] = useState(false)
    const [openResetPassword, setResetPassword] = useState(false)

    const { first_name, last_name, email } = userData.user

    const firstInitial = first_name.slice(0, 1)
    const lastInitial = last_name.slice(0, 1)
    return <Body>
        <Header count={first_name && last_name ? (firstInitial.toUpperCase() + lastInitial.toUpperCase()) : null} display="none" />
        <Div>
        <ToastContainer />
            <Modal display={openModal ? 'flex' : 'none'} close={()=>setOpenModal(false)} >
                <Formik
                    initialValues={{ avatar: "" }}
                    validationSchema={validateFile}
                    onSubmit={async values =>{
                        const imageInput = document.querySelector("#avatar")
                        let data = new FormData()
                        data.append('avatar', imageInput.files[0])
                        console.log(imageInput.files)
                        await getUserAvatar(data)
                    }}>
                    {({ touched, errors, values, handleChange, handleSubmit, handleBlur }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input type="file"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.avatar}
                                name="avatar"
                                id="avatar" />
                            <ErrMsg>{touched.avatar && errors.avatar ? errors.avatar : null}</ErrMsg>
                            <Button type="submit">Upload</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <Container>
                <Image background={userData.user.avatar} onClick={()=>setOpenModal(true)} >
                    <div className="photo"><i className="fas fa-camera fa-2x"></i></div>
                </Image>
            </Container>

            <Container column="column">
                <H3>{first_name} {last_name}</H3>
                <Paragraph>{email}</Paragraph>
            </Container>

            <Modal display={openResetPassword ? 'flex' : 'none'} close={()=> setResetPassword(false)} >
                <Formik
                    initialValues={{password:"", passwordConfirmation:""}}
                    validationSchema={validate}
                >
                    {({values, handleBlur, handleChange, handleSubmit, touched, errors})=>(
                        <Form onSubmit={handleSubmit}>
                            <Input 
                                placeholder="New password" 
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password} 
                                name="password"
                                />
                            <ErrMsg>{touched.password && errors.password ? errors.password : null}</ErrMsg>
                            <Input 
                                placeholder="Confirm new password" 
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.passwordConfirmation}
                                name="passwordConfirmation" />
                            <ErrMsg>{touched.passwordConfirmation && errors.passwordConfirmation ? errors.passwordConfirmation : null}</ErrMsg>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <Container>
                <Button width="60%" background="#fff" color="#10BDA8" onClick={()=> setResetPassword(true)}>reset password</Button>
            </Container>
            <>
                <Paragraph>Back to <Link to="/contacts">Dashboard</Link></Paragraph>
            </>

        </Div>
    </Body>
}

const mapStateToProps = (store) => ({
    userData: store.userReducer
})


export default connect(mapStateToProps, { getUserAvatar} )(UserProfile)
