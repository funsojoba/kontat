import * as Yup from 'yup'

const validate = Yup.object({
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default validate