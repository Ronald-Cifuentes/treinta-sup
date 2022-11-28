/* eslint-disable no-console */
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import {StoreContext} from 'context/StoreProvider/StoreProvider';
import {signOut} from 'firebase/auth';
import {LogProvider} from 'providers/log-provider';
import {FC, useContext, useEffect} from 'react';
import axiosRetry from 'axios-retry';
import {auth} from './firebase';

export const publicUrls = [
  'otp/send-code',
  'authentication/signin-otp',
  'authentication/signup-otp',
  'users/phone/validation',
];

export const timeout = Number(
  process.env.REACT_APP_MAX_TIMEOUT || axios.defaults.timeout,
) as number;

// axios AxiosInstance
export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_B2B_SUPPLIERS_URL,
  timeout,
});

axiosRetry(AxiosInstance, {retries: 0});

export const AxiosInterceptor: FC<{children: JSX.Element}> = ({children}) => {
  const {setLoad} = useContext(StoreContext);

  useEffect(() => {
    const reqInterceptor = (
      response: AxiosRequestConfig<unknown>,
    ): AxiosRequestConfig<unknown> => {
      setLoad(true);
      return response;
    };

    const handleXLSXDownload = (response): void => {
      const blob = new Blob([response.data as ArrayBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const dateDownload = new Date().getTime();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `download_file_${dateDownload}.xlsx`;
      link.click();
    };

    const resInterceptor = (response: AxiosResponse): AxiosResponse => {
      setLoad(false);
      const token = localStorage.getItem('dataRes');
      if (token) {
        response.headers.Authorization = `Bearer ${token}`;
      }
      if (response.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        signOut(auth);
      } else {
        if (
          response.headers['content-type'] ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ) {
          // xlsx Response
          handleXLSXDownload(response);
        } else {
          // JSON Response
          return response;
        }
      }
      return {} as AxiosResponse;
    };

    const errInterceptor = (error: {
      request: {url: Error};
      message: string;
    }): void => {
      setLoad(false);
      LogProvider.getInstance().logError({
        error: error.request.url,
        name: 'API-ERROR',
        message: error.message,
        context: {currentUser: auth?.currentUser || undefined, error},
      });
      throw error;
    };

    const interceptorRequest = AxiosInstance.interceptors.request.use(
      reqInterceptor,
      errInterceptor,
    );

    const interceptorResponse = AxiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    );

    return () => {
      AxiosInstance.interceptors.request.eject(interceptorRequest);
      AxiosInstance.interceptors.response.eject(interceptorResponse);
    };
  }, [setLoad]);

  return children;
};

export const addHeaders = async (url: string): Promise<AxiosRequestHeaders> => {
  let token = await auth?.currentUser?.getIdToken();

  if (!token && !publicUrls.includes(url)) {
    LogProvider.getInstance().logError({
      name: 'MISSING_TOKEN',
      context: {user: auth?.currentUser},
    });
    token = await auth?.currentUser?.getIdToken(true);
  }

  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      'x-api-key': process.env.REACT_APP_B2B_SERVICE_API_KEY || '',
    } as unknown as AxiosRequestHeaders;
  } else {
    return {
      'x-api-key': process.env.REACT_APP_B2B_SERVICE_API_KEY || '',
    } as unknown as AxiosRequestHeaders;
  }
};
