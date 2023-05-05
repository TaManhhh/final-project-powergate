import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

const ForgotPassWord = () => {
  const { t } = useTranslation();
  return (
    <form
      className="form-login"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        // onSubmit();
      }}
    >
      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
          {t('email')}
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          //   value={formValues.email}
          //   onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
        />
      </div>

      <div className="col-md-12">
        <div className="col-md-auto">
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: '100%', marginTop: 18 }}
            // disabled={loading}
          >
            {/* {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />} */}
            {t('signin')}
          </button>
        </div>
      </div>
      <div className="col-md-12">
        <div className="col-md-auto">
          <Link to={'/'}>Forgot Your Password ?</Link>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassWord;
