import * as Yup from 'yup'

const ClientValidationForm = Yup.object().shape({
	names: Yup.string().required('Requerido'),
    last_name: Yup.string().required('Requerido'),
	second_last_name: Yup.string().required('Requerido'),
	sex: Yup.string().required('Requerido'),
})

export default ClientValidationForm