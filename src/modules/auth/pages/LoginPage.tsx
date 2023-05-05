import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../../../asset/Rectangle 4.svg';
import { ILoginParams } from '../../../models/auth';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { fetchThunk } from '../../common/redux/thunk';
import { API_PATHS } from '../../../configs/api';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';
import { setUserInfo } from '../redux/authReducer';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import { ROUTES } from '../../../configs/routes';
import { replace } from 'connected-react-router';
import { getErrorMessageResponse } from '../../../utils';
import './Login.css';
const LoginPage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = React.useCallback(
    async (values: ILoginParams) => {
      setErrorMessage('');
      setLoading(true);

      const json = await dispatch(
        fetchThunk(API_PATHS.signIn, 'post', { email: values.email, password: values.password }),
      );

      setLoading(false);

      if (json?.code === RESPONSE_STATUS_SUCCESS) {
        dispatch(setUserInfo(json.data));
        // Cookies.set(ACCESS_TOKEN_KEY, json.data.token, { expires: values.rememberMe ? 7 : undefined });
        dispatch(replace(ROUTES.home));
        return;
      }

      setErrorMessage(getErrorMessageResponse(json));
    },
    [dispatch],
  );

  return (
    <div className="container-login">
      <div className='login'>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center',marginBottom:25 }}>
          <div >
            <img src={logo} alt="" style={{ height: 100, width: 100 }} />
            <h2>HR Management System</h2>
          </div>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' ,marginBottom:'10px'}}>
          <h2>Sign In</h2>
        </div>

        <div className="layout-login-boder">
          <LoginForm onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
