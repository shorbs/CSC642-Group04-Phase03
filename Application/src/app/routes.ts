import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';
import PlaylistView from './components/PlaylistView';
import LikedSongs from './components/LikedSongs';
import CreatePlaylist from './components/CreatePlaylist';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'sign-in', Component: SignIn },
      { path: 'playlist/:id', Component: PlaylistView },
      { path: 'liked-songs', Component: LikedSongs },
      { path: 'create-playlist', Component: CreatePlaylist },
    ],
  },
]);
