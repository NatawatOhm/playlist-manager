import { atom } from 'jotai';

interface userInfoType {
  userId: string;
  displayName: string;
  profileUrl: string;
  email: string;
  followers: string;
}

export const userInfoStore = atom<userInfoType>({
  userId: '',
  displayName: '',
  profileUrl: '',
  email: '',
  followers: '',
});
