import React from 'react'
import {Form, Input} from 'formik-antd'
import {Button} from 'antd'

const LoginForm = (props) => {
	return (
		<Form>
			<Form.Item name="email" required={true}>
				<Input name="email" placeholder="Email" />
			</Form.Item>

			<Form.Item name="password">
				<Input.Password name="password" placeholder="Contraseña" />
			</Form.Item>

			<Button type="primary" htmlType="submit" loading={props.isLoading}>
				Iniciar sesión
			</Button>
		</Form>
	)
}

export default LoginForm