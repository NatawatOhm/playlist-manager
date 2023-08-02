import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaHouse, FaRecordVinyl, FaSpotify, FaPlus } from 'react-icons/fa6';
import { baseService } from '../services/api';

const Sidebar = () => {
  const userId = sessionStorage.getItem('userId');

  const getUserPlaylist = (): void => {
    baseService
      .getJSON(`/v1/users/${userId}/playlists`)
      .then((resp) => {
        console.log(resp.data.items);
        console.log(resp.data.items[0].name);
        console.log(resp.data.items[0].owner.display_name);
        console.log(resp.data.items[0].description);
        console.log(resp.data.items[0].tracks.total);
        console.log(resp.data.items[0].id);
        console.log(resp.data.items[0].images[0].url);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  };

  const createPlaylist = (): void => {
    window.alert('add playlist');
    const payload = {
      name: 'NewPlaylist Ohm test',
      description: 'New playlist description',
      public: false,
    };
    // baseService
    //   .postJSON(`/v1/users/${userId}/playlists`, payload)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((ex) => console.error(ex))
    //   .finally(() => {
    //     getUserPlaylist();
    //   });
  };

  useEffect(() => {
    getUserPlaylist();
  }, []);

  return (
    <Container>
      <div className="w-full h-full ">
        <div className="flex justify-center gap-[16px] items-center ">
          <FaSpotify />
          <div className="text-white">Playlist Manager App</div>
        </div>
        <div>
          <div className="text-[#FFFFFF]/[0.4] pt-[40px]">Menu</div>
        </div>
        <div className="flex flex-col  ">
          <div className="flex w-full h-[60px] items-center space-x-[24px] pt-6 cursor-pointer hover:bg-[#1E3A8A]">
            <FaHouse size={30} />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-[24px] cursor-pointer">
            <FaRecordVinyl size={30} />
            <span>Your Playlist</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 border-4 w-[250px] border-t-[#000000]">
        <div onClick={createPlaylist} className=" h-[60px] flex items-center space-x-[24px] cursor-pointer ">
          <FaPlus size={30} />
          <span className="">New Playlist</span>
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
