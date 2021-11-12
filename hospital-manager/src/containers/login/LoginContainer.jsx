import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Layout, message} from 'antd'
import {Formik} from 'formik'
import {getAuthUser} from '../../redux/actions/authUserActions'
import LoginForm from '../../components/forms/LoginForm/LoginForm'
import LoginFormValidation from '../../components/forms/LoginForm/LoginFormValidation'

import './LoginContainer.css'

const LoginContainer = () => {
    const {Content,Header} = Layout
	const dispatch = useDispatch()
	const {isAuthenticated, isLoadingAuthRequest, showErrorLoginMessage} =
		useSelector((state) => state.authUserReducer)

	const handleSubmit = (values) => {
		dispatch(getAuthUser(values))
	}

	useEffect(() => {
		if (showErrorLoginMessage) {
			message.error('Usuario o contraseña incorrecto, intente nuevamente')
		}
	}, [showErrorLoginMessage])

	if (isAuthenticated) {
		return <Redirect to="/patients" />
	} else {
		return (
			<Layout className="page-login">
				<Header style={{background:"#fff"}}>
					
				</Header>
				<Content>
					<div className="login">
						<Formik
							validationSchema={LoginFormValidation}
							onSubmit={handleSubmit}
							initialValues={{
								email: '',
								password: '',
							}}
						>
							{() => (
								<LoginForm isLoading={isLoadingAuthRequest} />
							)}
						</Formik>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default LoginContainer