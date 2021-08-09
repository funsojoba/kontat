import * as Yup from 'yup'


const validateMail = Yup.object({
    subject: Yup.string().required('Mail subject is required'),
    message: Yup.string().required('Mail message is required'),
})

export default validateMail