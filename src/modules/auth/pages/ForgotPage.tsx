import React from 'react';
import logo from '../../../asset/Rectangle 4.svg';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';
const ForgotPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container-login">
      <div className="login">
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: 25 }}>
          <div>
            <img src={logo} alt="" style={{ height: 100, width: 100 }} />
            <h2>HR Management System</h2>
          </div>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop:65}}>
          <h2>Forgot password</h2>
        </div>

        <div className="layout-login-boder" >
          <form
            className="form-login"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              // onSubmit();
            }}
          >
            {/* {!!errorMessage && (
        <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
          {errorMessage}
        </div>
      )} */}

            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
                {/* <FormattedMessage id="email" /> */}
                {t('yourworkemail')}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                //   value={formValues.email}
                //   onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              />

              {/* {!!validate?.email && (
          <small className="text-danger">
            <FormattedMessage id={validate?.email} />
          </small>
        )} */}
            </div>

            <div className="col-md-12" >
              <div className="col-md-auto">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: '100%', marginTop: 18 }}
                  // disabled={loading}
                >
                  {/* {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />} */}
                  {/* <FormattedMessage id="register" /> */}
                  {t('confirm')}
                </button>
              </div>
            </div>
            <div className="col-md-12" style={{marginTop:16}}>
              <div className="col-md-auto">
                <NavLink to={'/'} className='link' style={{color:"#0091FF"}}>Back to Sign In</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
