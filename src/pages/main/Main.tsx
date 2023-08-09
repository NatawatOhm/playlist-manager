import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userInfoStore } from '../../stores/userInfo';
import { baseService } from '../../services/api';
import { useNavigate } from 'react-router';
import MainLayout from '../MainLayout';
import Header from '../../components/Header';

const Main = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userInfoStore);

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
          const tempUserInfo = {
            userId: resp.data.id,
            displayName: resp.data.display_name,
            email: resp.data.email,
            followers: resp.data.followers.total,
            profileUrl: resp.data.images[0] ? resp.data.images[1].url : '',
          };
          setUserInfo(tempUserInfo);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // console.log(userInfo);
      });
  };

  const userTopTrack = () => {
    baseService.getJSON('/v1/me/top/tracks?limit=10').then((resp) => {
      console.log(resp.data.items);
    });
  };

  useEffect(() => {
    setToken();
    mainInfo();
    userTopTrack();
  }, []);
  return (
    <MainLayout>
      <Header title="Home"></Header>
      this is main
    </MainLayout>
  );
};

export default Main;
