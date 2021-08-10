import styled from 'styled-components'
import Input from './input'
import Button from './button'

import { Formik } from 'formik'
import { connect } from 'react-redux'
import Loader from 'react-spinners/SyncLoader'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import validate from './validator/validator'
import addContact from '../redux/actions/contacts/addContact.action'

const Div = styled.div`
    position:relative;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;

`
const Icon = styled.div`
    width:30px;
    height:30px;
    color:#fff;
    background:#FF2B5E;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    cursor:pointer;
    transition:ease-in 200ms ;
    &:hover{
        transform:rotate(90deg)
    }
`
const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    width:450px;
    background:rgba(16, 189, 168, .9);
    backdrop-filter: blur(10px);
    box-shadow:5px 0 30px rgba(16, 189, 168, .9);
    height:100vh;
    overflow:scroll;
    transition:all ease-in 300ms;
    @media only screen and (max-width:750px){
        width:90%;
    }
    transform:translateX(${props => props.translate ? props.translate : "-900px"})

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
    padding:30px;
    @media only screen and (max-width:750px){
        padding:10px 30px;
    }
`
const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;
    background:#fff;
    width:100%;
    p{
        color:#10BDA8;
    }
`

const AddContact = ({ translate, handleClose, addContactData, addContact }) => {

    return <Container translate={translate}>
        <Div>
            <Header>
                <p>Add contact</p>
                <Icon onClick={handleClose} >
                    <i className="fas fa-times fa-lg"></i>
                </Icon>
            </Header>
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
                }}
                validationSchema={validate}
                onSubmit={ async (values) => {
                    await addContact(values)
                }}
            >
                {({ handleChange, handleSubmit, values, touched, handleBlur, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            placeholder="First name"
                            type="text"
                            onChange={handleChange}
                            value={values.first_name}
                            onBlur={handleBlur}
                            name="first_name" />
                        <small>{touched.first_name && errors.first_name ? errors.first_name : null}</small>
                        <Input
                            placeholder="Last name"
                            type="text"
                            onChange={handleChange}
                            value={values.last_name}
                            onBlur={handleBlur}
                            name="last_name" />
                        <small>{touched.last_name && errors.last_name ? errors.last_name : null}</small>
                        <Input
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            name="email" />
                        <Input
                            placeholder="Phone number"
                            type="tel"
                            onChange={handleChange}
                            value={values.phone}
                            name="phone" />
                        <Input
                            placeholder="Facebook"
                            type="text"
                            onChange={handleChange}
                            value={values.facebook}
                            name="facebook" />
                        <Input
                            placeholder="Instagram"
                            type="text"
                            onChange={handleChange}
                            value={values.instagram}
                            name="instagram" />
                        <Input
                            placeholder="Twitter"
                            type="text"
                            onChange={handleChange}
                            value={values.twitter}
                            name="twitter" />
                        <Input
                            placeholder="Linkedin"
                            type="text"
                            onChange={handleChange}
                            value={values.linkedin}
                            name="linkedin" />
                        <Input
                            placeholder="State"
                            type="text"
                            onChange={handleChange}
                            value={values.state}
                            name="state" />
                        
                        <Button
                            background="#fff"
                            color="#525252"
                            type="submit">{addContactData && addContactData.loading ? (<Loader color="#10BDA8" />): 'upload'}</Button>
                    </Form>
                )}
            </Formik>
        </Div>
    </Container>
}

const mapStateToProps = (store) => ({
    addContactData: store.addContactReducer
})

export default connect(mapStateToProps, { addContact })(AddContact)