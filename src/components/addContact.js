import styled from 'styled-components'
import Input from './input'
import Button from './button'

import { Formik } from 'formik'
import validate from './validator/validator'

import { connect } from 'react-redux'
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
    transform:translateX(${props => props.translate ? props.translate : "-500px"})

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
                    avatar: "",
                }}
                validationSchema={validate}
                onSubmit={ async (values) => {
                    const imageInput = document.querySelector("#coverImage")
                    let data = new FormData()

                    data.append("first_name", values.first_name)
                    data.append("last_name", values.last_name)
                    data.append("email", values.email)
                    data.append("phone", values.phone)
                    data.append("facebook", values.facebook)
                    data.append("instagram", values.instagram)
                    data.append("twitter", values.twitter)
                    data.append("linkedin", values.linkedin)
                    data.append("state", values.state)
                    data.append("avatar", imageInput.files[0])
                    data.append("something", "nice")

                    await addContact(data)
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
                        <Input
                            placeholder="User image"
                            type="file"
                            onChange={handleChange}
                            value={values.avatar}
                            name="avatar"
                            id="coverImage"
                        />
                        <Button
                            background="#fff"
                            color="#525252"
                            type="submit">Add Contact</Button>
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