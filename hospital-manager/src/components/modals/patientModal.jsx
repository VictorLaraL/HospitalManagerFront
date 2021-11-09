import React from 'react'
import {Modal, Spin} from 'antd'
import {Formik} from 'formik'
import PatientForm from '../forms/PatientForm/PatientForm'
import PatientFormValidation from '../forms/PatientForm/PatientValidationForm'

const PatientModal = (props) => {
    const { 
        modalTitle,
		modalVisible,
		modalSpinning,
		modalCancel,
		modalSubmit,
		modalFormikInitialValues,
		onNewRfc,
		rfcList,
    } = props

    return (
        <Modal
            title={modalTitle}
			visible={modalVisible}
			onCancel={modalCancel}
			footer={null}
			confirmLoading={true}
			keyboard={true}
			destroyOnClose={true}
			width={750}
        >
            <Spin spinning={modalSpinning}>
				<Formik
					validationSchema={PatientFormValidation}
					onSubmit={modalSubmit}
					initialValues={modalFormikInitialValues}
					enableReinitialize={true}
				>
					{() => (
						<PatientForm
							onNewRfc={onNewRfc}
							rfcList={rfcList}
							onCancel={modalCancel}
						/>
					)}
				</Formik>
			</Spin>   
        </Modal>
    )
}

export default PatientModal