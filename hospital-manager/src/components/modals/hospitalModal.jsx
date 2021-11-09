import React from 'react'
import {Modal, Spin} from 'antd'
import {Formik} from 'formik'
import HospitalForm from '../forms/HospitalForm/HospitalForm'
import HospitalFormValidation from '../forms/HospitalForm/HospitalValidationForm'

const HospitalModal = (props) => {
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
					validationSchema={HospitalFormValidation}
					onSubmit={modalSubmit}
					initialValues={modalFormikInitialValues}
					enableReinitialize={true}
				>
					{() => (
						<HospitalForm
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

export default HospitalModal