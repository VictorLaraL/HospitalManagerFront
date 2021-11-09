import * as Yup from 'yup'

const LoginFormValidation = Yup.object().shape({
	email: Yup.string()
		.email('Email inválido')
		.required('El email es requerido'),
	password: Yup.string().required('El password es requerido'),
})

export default LoginFormValidation