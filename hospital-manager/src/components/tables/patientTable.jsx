import React from 'react'
import {Table, Space, Popconfirm, Button} from 'antd'

const {Column} = Table

const PatientTable = (props) => {
	const {
		loadingTable,
		dataTable,
		totalItems,
		onPagination,
		onDelete,
		getDetail,
		currentPage,
	} = props

	const hospitalInfo = dataTable.map(info => ({
		key:info.id,
		names:info.names,
		last_name:info.last_name,
        second_last_name:info.second_last_name,
        sex:info.sex,
        birthday:info.birthday,
        inscription_date:info.inscription_date,
        id_hospital:info.id_hospital,
	}))

	return (
		<Table
			loading={loadingTable}
			dataSource={hospitalInfo}
			pagination={{
				onChange: (page) => {
					onPagination(page)
				},
				pageSize: process.env.REACT_APP_API_PAGINATION,
				current: currentPage,
				total: totalItems,
			}}
		>
			<Column title="Nombres" dataIndex="names" key="names" />
			<Column title="Apellido" dataIndex="last_name" key="last_name" />
            <Column title="Sexo" dataIndex="sex" key="sex" />
            <Column title="F. Nacimiento" dataIndex="birthday" key="birthday" />
			<Column title="F. Inscripcion" dataIndex="inscription_date" key="inscription_date" />
            <Column title="Hospital" dataIndex="id_hospital" key="birthday" />
            <Column
				title="Acción"
				key="accion"
				align="center"
				render={(text, record) => (
					<Space size="middle">
						<Button
							type="link"
							onClick={() => {
								getDetail(record.key)
							}}
						>
							Editar
						</Button>
						<Popconfirm
							title="¿Seguro que desea eliminar este registro?"
							okText="Si"
							cancelText="No"
							onConfirm={() => {
								onDelete(record.key)
							}}
						>
							<Button type="link">Eliminar</Button>
						</Popconfirm>
					</Space>
				)}
			/>
		</Table>
	)
}

export default PatientTable