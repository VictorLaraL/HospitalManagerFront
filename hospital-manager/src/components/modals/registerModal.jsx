import React from 'react'
import {Modal, Spin} from 'antd'
import {Formik} from 'formik'
import UserForm from '../forms/UserForm/UserForm'
import UserFormValidation from '../forms/UserForm/UserFormValidation'

const RegisterModal = (props) => {
    const { 
        modalTitle,
		modalVisible,
		modalSpinning,
		modalCancel,
		modalSubmit,
		modalFormikInitialValues,
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
					validationSchema={UserFormValidation}
					onSubmit={modalSubmit}
					initialValues={modalFormikInitialValues}
					enableReinitialize={true}
				>
					{() => (
						<UserForm		
							onCancel={modalCancel}
						/>
					)}
				</Formik>
			</Spin>   
        </Modal>
    )
}

export default RegisterModal