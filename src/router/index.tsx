import { createBrowserRouter } from 'react-router-dom';
import MainPage from './main/index.tsx';
import LoginPage from './login/index.tsx';

export const router = createBrowserRouter([...LoginPage, ...MainPage]);
