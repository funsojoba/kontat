import * as Yup from 'yup'

const validateFile = Yup.object().shape({
    avatar: Yup.mixed().required('File is required'),
})

export default validateFile
