import * as Yup from 'yup'

const LoginFormValidation = Yup.object().shape({
	name: Yup.string().required('El nombre es requerido'),
	city: Yup.string().required('La ciudad es requerida'),
})

export default LoginFormValidation