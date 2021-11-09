import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, message} from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal/LayoutInternal'
import {
	addPatient,
	getPatient,
	getDetailPatient,
	deletePatient,
	editPatient,
} from '../../redux/actions/patientActions'
import PatientTable from '../../components/tables/patientTable'
import PatientModal from '../../components/modals/patientModal'

const PatientContainer = () => {
	const dispatch = useDispatch()

	const listPatient = useSelector((state) => state.patientReducer.list.patients)

	const {
		isLoadingPatientList,
		isLoadingAddPatient,
		isLoadingUpdatePatient,
		isLoadingFetchPatient,
		showError,
		showSuccess,
	} = useSelector((state) => state.patientReducer)

	const itemsTotalList = useSelector((state) => state.patientReducer.list.length)

	const currentPage = useSelector((state) => state.patientReducer.currentPage)

	const detailRecord = useSelector((state) => state.patientReducer.detail)

	useEffect(() => {
		dispatch(getPatient({page: 1}))
	}, [dispatch])

	useEffect(() => {
		if (!isLoadingUpdatePatient) {
			handleCancelEditPatient()
		}
	}, [isLoadingUpdatePatient])

	useEffect(() => {
		if (showError) {
			message.error('Accion realizada incorrectamente')
		} else if (showSuccess) {
			message.success('Accion realizada correctamente')
		}
	}, [showError, showSuccess])

	const [isModalAddPatientVisible, setIsModalAddPatientVisible] = useState(false)

	const [isModalEditPatientVisible, setIsModalEditPatientVisible] =
		useState(false)

	const showModalAddPatient = () => {
		setIsModalAddPatientVisible(true)
	}

	const showModalEditPatient = () => {
		setIsModalEditPatientVisible(true)
	}

	const handleCancelAddPatient = () => {
		setIsModalAddPatientVisible(false)
	}

	const handleCancelEditPatient = () => {
		setIsModalEditPatientVisible(false)
	}

	const handlePatientSubmit = (values, actions) => {

		console.log(values.birthday)

		const formatAddValues = {		
			names: values.names,
			last_name: values.last_name,
			second_last_name: values.second_last_name,
			sex: values.sex,
			birthday: values.birthday, //? values.birthday.format('YYYY-MM-DD') : undefined,
			inscription_date: values.inscription_date, //? values.inscription_date.format('YYYY-MM-DD') : undefined,
			id_hospital: values.id_hospital
		}

		const formatEditValues = {
			id: values.id,
			names: values.name,
			last_name: values.last_name,
			second_last_name: values.second_last_name,
			sex: values.sex,
			birthday: values.birthday,// ? values.birthday.format('YYYY-MM-DD') : undefined,
			inscription_date: values.inscription_date,// ? values.inscription_date.format('YYYY-MM-DD') : undefined,
			id_hospital: values.id_hospital
		}

		values.hasOwnProperty('id')
			? dispatch(editPatient(formatEditValues))
			: dispatch(addPatient(formatAddValues))

		actions.resetForm()
		setIsModalAddPatientVisible(false)
	}

	const handleChangePagination = (numberPag) => {
		dispatch(getPatient({page: numberPag}))
	}

	const handleDelete = (key) => {
		dispatch(deletePatient(key))
	}

	const getDetail = (key) => {
		dispatch(getDetailPatient(key))
		showModalEditPatient()
	}

	return (
		<LayoutInternal mainTitle="Pacientes">
			<Button
				type="primary"
				style={{marginBottom: 16}}
				onClick={showModalAddPatient}
			>
				Agregar
			</Button>

			<PatientTable
				loadingTable={isLoadingPatientList}
				dataTable={listPatient}
				totalItems={itemsTotalList}
				onPagination={handleChangePagination}
				onDelete={handleDelete}
				getDetail={getDetail}
				currentPage={currentPage}
			/>

			<PatientModal
				modalTitle="Agregar paciente"
				modalVisible={isModalAddPatientVisible}
				modalSpinning={isLoadingAddPatient}
				modalCancel={handleCancelAddPatient}
				modalSubmit={handlePatientSubmit}
				modalFormikInitialValues={{
					names: '',
					last_name: '',
					second_last_name: '',
					sex: '',
				}}
			/>

			<PatientModal
				modalTitle="Editar hospital"
				modalVisible={isModalEditPatientVisible}
				modalSpinning={isLoadingFetchPatient || isLoadingUpdatePatient}
				modalCancel={handleCancelEditPatient}
				modalSubmit={handlePatientSubmit}
				modalFormikInitialValues={{
					id: detailRecord.id,
					names: detailRecord.names,
					last_name: detailRecord.last_name,
					second_last_name: detailRecord.second_last_name,
					sex: detailRecord.sex,
				}}
			/>
		</LayoutInternal>
	)
}

export default PatientContainer