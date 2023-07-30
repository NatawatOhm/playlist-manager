import React from 'react';

const Login = () => {
  const CLIENT_ID = 'd575e8b4e4db4fad83b5086db0ed637d';
  const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:8080/main';
  const SCOPES = ['user-read-private', 'user-read-email', 'user-read-currently-playing', 'user-top-read'];

  const handleButton = (): void => {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token`;
  };

  return (
    <div>
      <div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center ">{/* <img width={500} src={spotifyLogo} alt="" /> */}</div>
          <div className="flex justify-center pt-[50px]">
            <button className="bg-white w-[150px] h-[45px] text-black px-4 py-2 rounded-[16px]" onClick={handleButton}>
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
