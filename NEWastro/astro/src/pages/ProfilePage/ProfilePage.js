import React, { useEffect, useState } from 'react';
import { DivImg, Img2, ScreenContainer } from './styled';
import ChooseButton from '../../components/ChooseButton/ChooseButton';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import AppBar from '../../components/AppBar/AppBar';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import load from '../../assets/loading.png';

const ProfilePage = () => {
  const [chooseProfile, setChooseProfile] = useState(undefined);

  const getChooseProfile = () => {
    axios.get(BASE_URL + 'person').then((response) => {
      setChooseProfile(response.data.profile);
    });
  };
  useEffect(() => {
    getChooseProfile();
  }, []);

  const clickNo = () => {
    const body = {
      choice: false,
      id: chooseProfile.id,
    };
    axios.post(BASE_URL + 'choose-person', body).then((response) => {
      getChooseProfile();
    });
  };
  const clickYes = () => {
    const body = {
      choice: true,
      id: chooseProfile.id,
    };
    axios.post(BASE_URL + 'choose-person', body).then((response) => {
      getChooseProfile();
    });
  };

  return (
    <ScreenContainer>
      <AppBar />
      {chooseProfile ? (
        <>
          <ProfileCard profile={chooseProfile} />
          <ChooseButton clickNo={clickNo} clickYes={clickYes} />
        </>
      ) : (
        <DivImg>
          <Img2 src={load} />
        </DivImg>
      )}
    </ScreenContainer>
  );
};

export default ProfilePage;
