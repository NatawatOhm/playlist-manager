import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

interface HeaderProp {
  title: string;
}

const Header: React.FC<HeaderProp> = ({ title }) => {
  const profileImgUrl = sessionStorage.getItem('profileImgUrl') ?? '';
  const userDisplayName = sessionStorage.getItem('userDisplayName');

  return (
    <Container>
      <div className="left-0">{title}</div>
      <div className="bg-white gap-2  px-[16px] w-[400px] h-[48px] flex items-center text-[#6B7280] rounded-[107px]">
        <FaSearch />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full outline-none text-[#6B7280]"
        />
      </div>
      <div className="bg-[#1F1F1F] justify-between  px-[16px] w-[278px] h-[48px] flex items-center text-[#6B7280] rounded-[107px]">
        <img className="rounded-[260px]" src={profileImgUrl} alt="" />
        <div className="text-white"> {userDisplayName}</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 19px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export default Header;
