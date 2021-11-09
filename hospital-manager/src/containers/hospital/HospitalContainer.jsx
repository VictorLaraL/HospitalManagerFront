import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, message} from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal/LayoutInternal'
import {
	addHospital,
	getHospital,
	getDetailHospital,
	deleteHospital,
	editHospital,
} from '../../redux/actions/hospitalActions'
import HospitalTable from '../../components/tables/hospitalTable'
import HospitalModal from '../../components/modals/hospitalModal'

const HospitalContainer = () => {
	const dispatch = useDispatch()

	const listHospital = useSelector((state) => state.hospitalReducer.list.hospitals)

	const {
		isLoadingHospitalList,
		isLoadingAddHospital,
		isLoadingUpdateHospital,
		isLoadingFetchHospital,
		showError,
		showSuccess,
	} = useSelector((state) => state.hospitalReducer)

	const itemsTotalList = useSelector((state) => state.hospitalReducer.list.length)

	const currentPage = useSelector((state) => state.hospitalReducer.currentPage)

	const detailRecord = useSelector((state) => state.hospitalReducer.detail)

	useEffect(() => {
		dispatch(getHospital({page: 1}))
	}, [dispatch])

	useEffect(() => {
		if (!isLoadingUpdateHospital) {
			handleCancelEditHospital()
		}
	}, [isLoadingUpdateHospital])

	useEffect(() => {
		if (showError) {
			message.error('Accion realizada incorrectamente')
		} else if (showSuccess) {
			message.success('Accion realizada correctamente')
		}
	}, [showError, showSuccess])

	const [isModalAddHospitalVisible, setIsModalAddHospitalVisible] = useState(false)

	const [isModalEditHospitalVisible, setIsModalEditHospitalVisible] =
		useState(false)

	const showModalAddHospital = () => {
		setIsModalAddHospitalVisible(true)
	}

	const showModalEditHospital = () => {
		setIsModalEditHospitalVisible(true)
	}

	const handleCancelAddHospital = () => {
		setIsModalAddHospitalVisible(false)
	}

	const handleCancelEditHospital = () => {
		setIsModalEditHospitalVisible(false)
	}

	const handleHospitalSubmit = (values, actions) => {
		const formatAddValues = {
			name: values.name,
			city: values.city,
		}

		const formatEditValues = {
			id: values.id,
			name: values.name,
			city: values.city,
		}

		values.hasOwnProperty('id')
			? dispatch(editHospital(formatEditValues))
			: dispatch(addHospital(formatAddValues))

		actions.resetForm()
		setIsModalAddHospitalVisible(false)
	}

	const handleChangePagination = (numberPag) => {
		dispatch(getHospital({page: numberPag}))
	}

	const handleDelete = (key) => {
		dispatch(deleteHospital(key))
	}

	const getDetail = (key) => {
		dispatch(getDetailHospital(key))
		showModalEditHospital()
	}

	return (
		<LayoutInternal mainTitle="Hospitales">
			<Button
				type="primary"
				style={{marginBottom: 16}}
				onClick={showModalAddHospital}
			>
				Agregar
			</Button>

			<HospitalTable
				loadingTable={isLoadingHospitalList}
				dataTable={listHospital}
				totalItems={itemsTotalList}
				onPagination={handleChangePagination}
				onDelete={handleDelete}
				getDetail={getDetail}
				currentPage={currentPage}
			/>

			<HospitalModal
				modalTitle="Agregar hospital"
				modalVisible={isModalAddHospitalVisible}
				modalSpinning={isLoadingAddHospital}
				modalCancel={handleCancelAddHospital}
				modalSubmit={handleHospitalSubmit}
				modalFormikInitialValues={{
					name: '',
					city: '',
				}}
			/>

			<HospitalModal
				modalTitle="Editar hospital"
				modalVisible={isModalEditHospitalVisible}
				modalSpinning={isLoadingFetchHospital || isLoadingUpdateHospital}
				modalCancel={handleCancelEditHospital}
				modalSubmit={handleHospitalSubmit}
				modalFormikInitialValues={{
					id: detailRecord.id,
					name: detailRecord.name,
                    city: detailRecord.city,
				}}
			/>
		</LayoutInternal>
	)
}

export default HospitalContainer