/*eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Menu, Icon, Badge } from 'antd';

function UserMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`www.uhzzeol.com/api/auth/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/Signup">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/Signin">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
				{/* todo : user info menu*/}
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(UserMenu);

