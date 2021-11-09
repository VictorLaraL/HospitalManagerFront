import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Icon from '@ant-design/icons'
import {logoutUser} from '../../../redux/actions/authUserActions'

import './SiderLayout.css'

const {Sider} = Layout

const SiderLayout = (props) => {
	const dispatch = useDispatch()

	const closeSesion = () => {
		dispatch(logoutUser())
	}

	return (
		<Sider
		style={{background:"#5C215D"}}
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={(broken) => {
				console.log(broken)
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type)
			}}
		>
			
			<Menu theme="dark" style={{background:"#5C215D", color:"#fff"}} mode="inline">
				<Menu.Item key="1">
					<Icon type="user"/>
					<Link to={{pathname: '/hospitals'}} />
					<span className="nav-text">Hospitales</span>
				</Menu.Item>
				<Menu.Item
					key="2"
					onClick={() => {
						closeSesion()
					}}
				>
					<Icon type="user" />
					<span className="nav-text">Cerrar sesión</span>
				</Menu.Item>
			</Menu>
		</Sider>
	)
}

export default SiderLayout