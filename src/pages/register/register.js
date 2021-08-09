import Button from "../../components/button"
import Input from "../../components/input"
import Img from "../../components/img"

import { Link } from "react-router-dom"
import { Formik } from 'formik'
import { useState } from "react"

import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PulseLoader from 'react-spinners/PulseLoader'

import validate from "./register.validate"
import register from "../../redux/actions/auth/register.action"

import { Body, Div, SmallText, Circle, P, Section, Form, Image, ErrorMsg } from './registerStyles'



const Register = ({  registerData, register }) => {
    console.log("registerData:", registerData)
    const [loading, setLoading] = useState(false)
    // const [label, setLabel] = useState("Sign Up")


    return <Body>
        <Div>
            <Circle />

            <P>Let's get you started</P>
            <Section>
            <ToastContainer />
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                        setLoading(true)
                        await register(values)
                        setLoading(false)
                    }}>
                    {({ values, errors, handleChange, handleSubmit, touched, handleBlur }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                placeholder="First name"
                                type="text"
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMsg>{touched.first_name && errors.first_name ? (errors.first_name) : null}</ErrorMsg>

                            <Input
                                placeholder="Last name"
                                type="text"
                                name="last_name"
                                value={values.last_name}
                                onBlur={handleBlur}
                                onChange={handleChange} />
                            <ErrorMsg>{touched.last_name && errors.last_name ? (errors.last_name) : (null)}</ErrorMsg>


                            <Input
                                placeholder="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange} />
                            <ErrorMsg>{touched.email && errors.email ? (errors.email) : (null)}</ErrorMsg>

                            <Input
                                placeholder="password"
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                value={values.password}
                                onChange={handleChange} />
                            <ErrorMsg>{touched.password && errors.password ? (errors.password) : (null)}</ErrorMsg>
                            <Button type="submit"> 
                                {" "}
                                {loading ? "" : "Sign up"}
                                <PulseLoader loading={loading}/>
                            </Button>
                        </Form>
                    )}
                </Formik>

                <Image>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627383456/contact_api/authpage/undraw_teacher_35j2_iu1wxk.png" alt="signup page" />
                </Image>
            </Section>

            <SmallText>Already have an account? &nbsp; <Link to="/login">Login</Link></SmallText>
        </Div>
    </Body>
}

const mapStateToProps = (store) => ({
    registerData: store.registerReducer
})

// const mapDispatchToProps = dispatch => ({
//     sendRegister: (value) => dispatch(register(value))
// })

export default connect(mapStateToProps, {register})(Register)