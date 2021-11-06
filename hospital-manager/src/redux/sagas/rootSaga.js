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
}