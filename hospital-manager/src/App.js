import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import 'antd/dist/antd.css';

import { persistor } from './redux/store/store'
import LoginContainer from './containers/login/LoginContainer'
import { ProtectedRoute } from './utils/protected-route/ProtectedRoute'
import HospitalContainer from './containers/hospital/HospitalContainer'
import './App.less'

const App = () => (
	<PersistGate loading={null} persistor={persistor}>
		<Router>
			<Switch>
				<Route path="/" component={HospitalContainer}/>
				<Route path="/Login" component={LoginContainer}/>
			</Switch>
		</Router>
	</PersistGate>
)

export default App;
