import React from 'react'
import {Form, Input, SubmitButton, Select, DatePicker} from 'formik-antd'
import {Button} from 'antd'

const HospitalForm = (props) => {

	const layout = {
		labelCol: {span: 7},
		wrapperCol: {span: 16},
	}

    const dateFormat = 'DD/MM/YYYY'

    const optionSex = [
		{value: 'M', label: 'Masculino'},
		{value: 'F', label: 'Femenino'},
	]

	return (
		
		<Form {...layout} preserve={false}>
			<Form.Item name="names" label="Nombres" required={true}>
				<Input name="names" />
			</Form.Item>
			<Form.Item
				name="last_name"
				label="Apellido paterno"
				required={true}
			>
				<Input name="last_name" />
			</Form.Item>
            <Form.Item
				name="second_last_name"
				label="Apellido materno"
				required={true}
			>
				<Input name="second_last_name" />
			</Form.Item>
            <Form.Item
				name="sex"
				label="Sexo"
				required={true}
			>
				<Select
					name="sex"
					options={optionSex}
					placeholder="Seleccione un Sexo"
				/>
			</Form.Item>
            <Form.Item
				name="birthday"
				label="F. Nacimiento"
				required={true}
			>
                <DatePicker placeholder="Fecha" format={dateFormat} name="birthday"/>
			</Form.Item> 
            <Form.Item
				name="inscription_date"
				label="F. Inscripcion"
				required={true}
			>
                <DatePicker placeholder="Fecha" format={dateFormat} name="inscription_date"/>
			</Form.Item>
            <Form.Item
				name="id_hospital"
				label="Hospital"
				required={true}
			>
				<Input name="id_hospital" />
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