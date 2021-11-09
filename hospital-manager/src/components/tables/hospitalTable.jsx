import React from 'react'
import {Table, Space, Popconfirm, Button} from 'antd'

const {Column} = Table

const HospitalTable = (props) => {
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
		name:info.name,
		city:info.city,
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
			<Column title="Nombre" dataIndex="name" key="name" />
			<Column title="Ciudad" dataIndex="city" key="city" />
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

export default HospitalTable