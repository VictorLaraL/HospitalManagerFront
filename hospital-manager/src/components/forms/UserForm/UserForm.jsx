import React from 'react'
import {Form, Input} from 'formik-antd'
import {Button} from 'antd'

const UserForm = (props) => {
	return (
		<Form>
			<Form.Item name="email" required={true}>
				<Input name="email" placeholder="Email" />
			</Form.Item>

			<Form.Item name="password">
				<Input.Password name="password" placeholder="Contraseña" />
			</Form.Item>    

            <Form.Item name="name" required={true}>
				<Input name="name" placeholder="Nombre" />
			</Form.Item>

			<Button type="primary" htmlType="submit" loading={props.isLoading}>
				Registrarte
			</Button>
		</Form>
	)
}

export default UserForm