import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaHouse, FaRecordVinyl, FaSpotify, FaPlus } from 'react-icons/fa6';
import { useAtom } from 'jotai';
import { playlistStore } from '../stores/playlist';
import { baseService } from '../services/api';

const Sidebar = () => {
  const userId = sessionStorage.getItem('userId');
  const [playlist, setPlaylist] = useAtom(playlistStore);
  const getUserPlaylist = (): void => {
    baseService
      .getJSON(`/v1/users/${userId}/playlists`)
      .then((resp) => {
        const tempPlaylist = resp.data.items.map((o: any) => ({
          id: o.id,
          playlistName: o.name,
          displayName: o.owner.display_name,
          description: o.description,
          totalTrack: o.tracks.total,
          imageUrl: o.images[0] ? o.images[0].url : '',
        }));
        setPlaylist(tempPlaylist);
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
      <div className="w-full h-full px-[16px]">
        <div className="flex justify-center gap-[16px] items-center">
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
          <div className="flex items-center space-x-[24px] cursor-pointer pb-[16px]">
            <FaRecordVinyl size={30} />
            <span>Your Playlist</span>
          </div>
          {playlist.map((item, index) => (
            <div className="flex px-[16px] pb-[16px] " key={index}>
              <img className="rounded-[5px]" width={50} src={item.imageUrl} />
              <div className="flex text-[18px] flex-col justify-between pl-[16px]">
                <div className="truncate ...">{item.playlistName}</div>
                <div className="text-[16px] text-[#9CA3AF]">
                  {item.displayName} - {item.totalTrack} songs
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 border-4 w-[25%] border-t-[#000000]">
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
  width: 25%;
  left: 0;
  background: rgba(255, 255, 255, 0.12);
`;

export default Sidebar;
