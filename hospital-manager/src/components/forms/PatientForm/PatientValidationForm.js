import * as Yup from 'yup'

const PatientValidationForm = Yup.object().shape({
	names: Yup.string().required('Requerido'),
    last_name: Yup.string().required('Requerido'),
})

export default PatientValidationForm