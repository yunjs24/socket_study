import Signin from "./Signin/Signin.js"
import Signup from "./Signup/Signup.js"
import "antd/dist/antd.css"
import { Button } from "antd"

const TopNav = () => {
	return (
		<>
			<nav className="top__bar" style={{  zIndex: 5, width: '100%', minHeight: '25px'}}>
				<div className="menu__container">
				<div className="menu_right">
					<Button type="text">Sign in</Button>
				</div>
				</div>
			</nav>
		</>
	)
}

export default TopNav