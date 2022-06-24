// import React from "react";
// import moment from "moment";
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { registerUser } from "../../../_actions/user_actions";

// import {
//   Form,
//   Input,
//   Button,
// } from 'antd';


// function Signin(props) {
//   const dispatch = useDispatch();
//   return (

// 	<Formik
// 	  initialValues={{
// 		email: '',
// 		lastName: '',
// 		name: '',
// 		password: '',
// 		confirmPassword: ''
// 	  }}
// 	  validationSchema={Yup.object().shape({
// 		name: Yup.string()
// 		  .required('Name is required'),
// 		lastName: Yup.string()
// 		  .required('Last Name is required'),
// 		email: Yup.string()
// 		  .email('Email is invalid')
// 		  .required('Email is required'),
// 		password: Yup.string()
// 		  .min(6, 'Password must be at least 6 characters')
// 		  .required('Password is required'),
// 		confirmPassword: Yup.string()
// 		  .oneOf([Yup.ref('password'), null], 'Passwords must match')
// 		  .required('Confirm Password is required')
// 	  })}
// 	  onSubmit={(values, { setSubmitting }) => {
// 		setTimeout(() => {

// 		  let dataToSubmit = {
// 			email: values.email,
// 			password: values.password,
// 			name: values.name,
// 			lastname: values.lastname,
// 		  };
		  
// 	>
// 	  {props => {
// 		const {
// 		  values,
// 		  touched,
// 		  errors,
// 		  dirty,
// 		  isSubmitting,
// 		  handleChange,
// 		  handleBlur,
// 		  handleSubmit,
// 		  handleReset,
// 		} = props;
// 		return (
// 		  <div className="app">
// 			<h2>Sign up</h2>
// 			<Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

// 			  <Form.Item required label="Name">
// 				<Input
// 				  id="name"
// 				  placeholder="이름"
// 				  type="text"
// 				  value={values.name}
// 				  onChange={handleChange}
// 				/>
// 				{errors.name && touched.name && (
// 				  <div className="input-feedback">{errors.name}</div>
// 				)}
// 			  </Form.Item>

// 			  <Form.Item required label="Last Name">
// 				<Input
// 				  id="lastName"
// 				  placeholder="성"
// 				  type="text"
// 				  value={values.lastName}
// 				  onChange={handleChange}
// 				/>
// 				{errors.lastName && touched.lastName && (
// 				  <div className="input-feedback">{errors.lastName}</div>
// 				)}
// 			  </Form.Item>

// 			  <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
// 				<Input
// 				  id="email"
// 				  placeholder="이메일 주소"
// 				  type="email"
// 				  value={values.email}
// 				  onChange={handleChange}

// 				/>
// 			  </Form.Item>

// 			  <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
// 				<Input
// 				  id="password"
// 				  placeholder="Enter your password"
// 				  type="password"
// 				  value={values.password}
// 				  onChange={handleChange}
// 				/>
// 			  </Form.Item>

// 			  <Form.Item required label="Confirm" hasFeedback>
// 				<Input
// 				  id="confirmPassword"
// 				  placeholder="Enter your confirmPassword"
// 				  type="password"
// 				  value={values.confirmPassword}
// 				  onChange={handleChange}
// 				/>
// 			  </Form.Item>

// 			  <Form.Item {...tailFormItemLayout}>
// 				<Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>제출</Button>
// 			  </Form.Item>
// 			</Form>
// 		  </div>
// 		);
// 	  }}
// 	</Formik>
//   );
// };


// export default Signin;
