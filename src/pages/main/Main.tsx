import React, { useState, useEffect } from 'react';
import { baseService } from '../../services/api';
import { useNavigate } from 'react-router';
import MainLayout from '../MainLayout';
import Header from '../../components/Header';

const Main = () => {
  const navigate = useNavigate();

  const setToken = (): void => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const token = queryParams.get('access_token');
    if (token != null) {
      sessionStorage.setItem('token', token);
      const cleanURL = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, cleanURL);
    } else {
      const storedToken = sessionStorage.getItem('token');
      if (!storedToken || storedToken.trim() === '') {
        navigate('/');
      }
    }
  };
  const mainInfo = () => {
    baseService
      .getJSON('/v1/me')
      .then((resp) => {
        if (resp.data != null) {
          //   console.log(resp.data);
          sessionStorage.setItem('profileImgUrl', resp.data.images[0].url);
          sessionStorage.setItem('userDisplayName', resp.data.display_name);
          sessionStorage.setItem('userId', resp.data.id);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    setToken();
    mainInfo();
  }, []);
  return (
    <MainLayout>
      <Header title="Home"></Header>
      this is main
    </MainLayout>
  );
};

export default Main;
