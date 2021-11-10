import * as Yup from 'yup'

const HospitalFormValidation = Yup.object().shape({
	name: Yup.string().required('El nombre es requerido'),
	city: Yup.string().required('La ciudad es requerida'),
})

export default HospitalFormValidation