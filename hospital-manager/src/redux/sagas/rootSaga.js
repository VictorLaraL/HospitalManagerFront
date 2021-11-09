import {fork} from 'redux-saga/effects'
import {getAuthUserWatcher} from './authUserSaga'
import {
	addHospitalWatcher,
	getHospitalWatcher,
	addHospitalSuccessWatcher,
	deleteHospitalWatcher,
	deleteHospitalSuccessWatcher,
	getDetailHospitalWatcher,
	editHospitalWatcher,
	editHospitalSuccessWatcher,
} from './hospitalSaga'

import {
	addPatientWatcher,
	getPatientWatcher,
	addPatientSuccessWatcher,
	deletePatientWatcher,
	deletePatientSuccessWatcher,
	getDetailPatientWatcher,
	editPatientWatcher,
	editPatientSuccessWatcher,
} from './patientSaga'

export function* rootSaga() {
	//* Policy watchers
	yield fork(addHospitalWatcher)
	yield fork(getHospitalWatcher)
	yield fork(addHospitalSuccessWatcher)
	yield fork(deleteHospitalWatcher)
	yield fork(deleteHospitalSuccessWatcher)
	yield fork(getDetailHospitalWatcher)
	yield fork(editHospitalWatcher)
	yield fork(editHospitalSuccessWatcher)

    //* Authentication watcher
	yield fork(getAuthUserWatcher)

	//* Patient watchers
	yield fork(addPatientWatcher)
	yield fork(getPatientWatcher)
	yield fork(addPatientSuccessWatcher)
	yield fork(deletePatientWatcher)
	yield fork(deletePatientSuccessWatcher)
	yield fork(getDetailPatientWatcher)
	yield fork(editPatientWatcher)
	yield fork(editPatientSuccessWatcher)

}