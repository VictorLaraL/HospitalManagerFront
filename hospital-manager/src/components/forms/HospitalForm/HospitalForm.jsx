import React from 'react'
import {Form, Input, SubmitButton} from 'formik-antd'
import {Button} from 'antd'

const HospitalForm = (props) => {

	const layout = {
		labelCol: {span: 7},
		wrapperCol: {span: 16},
	}

	return (
		
		<Form {...layout} preserve={false}>
			<Form.Item name="name" label="Nombre" required={true}>
				<Input name="name" />
			</Form.Item>
			<Form.Item
				name="city"
				label="Ciudad"
				required={true}
			>
				<Input name="city" />
			</Form.Item>
			<Button
				style={{marginInline: 5, marginLeft: 500}}
				onClick={() => props.onCancel()}
			>
				Cancelar
			</Button>
			<SubmitButton>Guardar</SubmitButton>
		</Form>
	)
}

export default HospitalForm