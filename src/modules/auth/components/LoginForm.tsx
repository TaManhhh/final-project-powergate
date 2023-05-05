import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { validateLogin, validLogin } from '../utils';
import { useTranslation } from "react-i18next";
import "./formlogin.css"
import { Select } from 'antd';
import { Link, } from 'react-router-dom';
interface Props {
  onLogin(values: ILoginParams): void;
  loading: boolean;
  errorMessage: string;
}

const LoginForm = (props: Props) => {
  const { onLogin, loading, errorMessage } = props;
  const { t } = useTranslation();
  const [formValues, setFormValues] = React.useState<ILoginParams>({ email: '', password: '', factory:'' });
  const [validate, setValidate] = React.useState<ILoginValidation>();
  const [company,setCompany]=useState<Array<any>>([]);
  const [selectedFactory, setSelectedFactory] = useState('');
  useEffect(() => {
    fetch("https://api-training.hrm.div4.pgtest.co/api/v1/company")
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.data);
      });
  }, []);
  const handleFactoryChange = (value:any) => {
    setSelectedFactory(value);
  }
console.log(selectedFactory)
  const onSubmit = React.useCallback(() => {
    const validate = validateLogin(formValues);
    setValidate(validate);
    if (!validLogin(validate)) {
      return;
    }
    onLogin(formValues);

  }, [formValues, onLogin]);
    console.log("🚀 ~ file: LoginForm.tsx:39 ~ onSubmit ~ formValues:", formValues)

  return (
    <form
      className='form-login'
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {!!errorMessage && (
        <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
          {errorMessage}
        </div>
      )}

      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
        
          {t('email')}
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          value={formValues.email}
          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
        />

        {!!validate?.email && (
          <small className="text-danger">
            <FormattedMessage id={validate?.email} />
          </small>
        )}
      </div>

      <div className="col-md-12">
        <label htmlFor="inputPassword" className="form-label">
        
          {t('password')}
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={formValues.password}
          onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
        />

        {!!validate?.password && (
          <small className="text-danger">
            <FormattedMessage id={validate?.password} />
          </small>
        )}
      </div>
      <div className="col-md-12" >
        <label htmlFor="inputPassword" className="form-label">
         
          {t('factory')}
        </label>
          <Select
           style={{ width: "100%" }}
           defaultValue="Select factory"
           onChange={handleFactoryChange}
          //  onClick={e=>{ e.target}}
           options={company.map(option => ({
            value: option.id,
            label: option.name 
          }))}
          />

        {!!validate?.password && (
          <small className="text-danger">
            <FormattedMessage id={validate?.factory} />
          </small>
        )}
      </div>

      

      <div className="col-md-12" >
        <div className="col-md-auto">
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width:"100%",marginTop:18 }}
            disabled={loading}
          >
            {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />}
        {t('signin')}
          </button>
        </div>
      </div>
      <div className="col-md-12" >
        <div className="col-md-auto">
          <Link to={'/forgot-password'} className='link'>Forgot Your Password ?</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
