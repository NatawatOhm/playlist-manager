import React from 'react';
import styled from 'styled-components';
import { FaHouse, FaRecordVinyl, FaSpotify } from 'react-icons/fa6';
const Sidebar = () => {
  return (
    <Container>
      <div className="px-[24px] py-[18px]">
        <div className="flex justify-center gap-[16px] items-center ">
          <FaSpotify />
          <div className="text-white">Playlist Manager App</div>
        </div>
        <div>
          <div className="text-[#FFFFFF]/[0.4] pt-[40px]">Menu</div>
        </div>
        <div className="flex flex-col space-y-6 ">
          <div className="flex items-center space-x-[24px] pt-6 cursor-pointer">
            <FaHouse />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-[24px] cursor-pointer">
            <FaRecordVinyl />
            <span>Your Playlist</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 250px;
  left: 0;
  background: rgba(255, 255, 255, 0.12);
`;

export default Sidebar;
