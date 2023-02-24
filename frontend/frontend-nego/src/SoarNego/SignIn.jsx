import React from "react";
import { Formik, Field,Form, ErrorMessage } from "formik";
import * as Yup from 'yup'



function SignInDetails () {
     function validationSchema() {
        return Yup.object().shape({
          fullname: Yup.string().required('Fullname is required'),
          username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
      }

      function handleSubmit(data) {
        console.log(JSON.stringify(data, null, 2));
      }

    return(
        <Formik
            initialValues = {{
                fullname:'',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false,
          }}
          onSubmit={ handleSubmit}
          validationSchema = {validationSchema}
        >
            {({ errors, touched, resetForm }) => (
            <div className="container" >
            <Form>
              <div className="form-group">
                <label>Full Name</label>
                <Field
                  name="fullname"
                  type="text"
                  className={
                    'form-control' +
                    (errors.fullname && touched.fullname ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username"> Username </label>
                <Field
                  name="username"
                  type="text"
                  className={
                    'form-control' +
                    (errors.username && touched.username ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <Field
                  name="email"
                  type="email"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <Field
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group form-check">
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  className={
                    'form-check-input' +
                    (errors.acceptTerms && touched.acceptTerms
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I have read and agree to the Terms
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-warning float-right"
                >
                  Reset
                </button>
              </div>
            </Form>
            </div>

            
          )}

       
        </Formik>

        
    )
}

export default SignInDetails 