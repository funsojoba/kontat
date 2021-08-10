import Button from "../../components/button"
import Input from "../../components/input"
import Img from "../../components/img"
import validate from "./validate"
import { Body, Div, SmallText, Circle, Paragraph, Section, Form, Image } from './style'
import { ErrorMsg } from "../register/registerStyles"

import Loader from 'react-spinners/SyncLoader'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Formik } from "formik"


import login from "../../redux/actions/auth/login.action"


const Register = ({ loginData, login }, props ) => {

    return <Body>
        <Div>
            <Circle />

            <Paragraph>Welcome back</Paragraph>
            <Section>
                <ToastContainer />
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                        await login(values)
                    }}>
                    {({ values, errors, handleChange, handleSubmit, touched, handleBlur }) => (
                        <Form onSubmit={handleSubmit}>

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
                                
                                {loginData && loginData.loading ? (<Loader color="#fff" />): 'Login'}
                                
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Image>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627383456/contact_api/authpage/undraw_Login_re_4vu2_voo7zq.png" alt="login page" />
                </Image>
            </Section>

            <SmallText>Don't have an account? &nbsp; <Link to="/signup">Sign up</Link></SmallText>
        </Div>
    </Body>
}

const mapStateToProps = (store) => ({
    loginData: store.loginReducer
})

// const mapDispatchToProps = dispatch => ({
//     sendRegister: (value) => dispatch(register(value))
// })

export default connect(mapStateToProps, { login })(Register)