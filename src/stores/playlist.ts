import { atom } from 'jotai';

interface playlistType {
  playlistName: string;
  displayName: string;
  description: string;
  totalTrack: string;
  id: string;
  imageUrl?: string;
}

export const playlistStore = atom<playlistType[]>([]);
