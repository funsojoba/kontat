import * as Yup from 'yup'

const validate = Yup.object({
    first_name: Yup.string().required('first name is required'),
    last_name: Yup.string().required('last name is required'),
})

export default validate