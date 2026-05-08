import { Link, Outlet, useLocation } from 'react-router';
import { Music2, ListMusic, Heart, PlusCircle, Home, LogIn, User } from 'lucide-react';
import ColorblindToggle from './ColorblindToggle';
import { useColorblind } from '../context/ColorblindContext';

export default function Layout() {
  const location = useLocation();
  const { colors } = useColorblind();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isPlaylistActive = () => {
    return location.pathname.startsWith('/playlist/');
  };

  return (
    <div className="size-full flex flex-col bg-[#0a0a0a]">
      <nav
        className="bg-black border-b-4 shadow-lg"
        style={{
          borderColor: colors.border,
          boxShadow: `0 10px 15px -3px ${colors.accent}33`
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Music2
                className="w-8 h-8"
                style={{
                  color: colors.primary,
                  filter: `drop-shadow(0 0 8px ${colors.accent})`
                }}
              />
              <span
                className="text-2xl font-black text-white tracking-wider"
                style={{
                  filter: `drop-shadow(0 0 10px ${colors.accent})`
                }}
              >
                UNIBEATS
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <ColorblindToggle />
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 border-2 transition-all ${
                  isActive('/') ? 'bg-opacity-100 text-white' : 'bg-opacity-0'
                }`}
                style={isActive('/') ? {
                  backgroundColor: colors.primary,
                  borderColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}80`
                } : {
                  color: colors.primary,
                  borderColor: colors.border,
                }}
              >
                <Home className="w-4 h-4" />
                <span className="font-bold tracking-wide">HOME</span>
              </Link>

              <Link
                to="/playlist/1"
                className="flex items-center gap-2 px-4 py-2 border-2 transition-all"
                style={isPlaylistActive() ? {
                  backgroundColor: colors.primary,
                  color: 'white',
                  borderColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}80`
                } : {
                  color: colors.primary,
                  borderColor: colors.border,
                }}
              >
                <ListMusic className="w-4 h-4" />
                <span className="font-bold tracking-wide">PLAYLISTS</span>
              </Link>

              <Link
                to="/liked-songs"
                className="flex items-center gap-2 px-4 py-2 border-2 transition-all"
                style={isActive('/liked-songs') ? {
                  backgroundColor: colors.primary,
                  color: 'white',
                  borderColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}80`
                } : {
                  color: colors.primary,
                  borderColor: colors.border,
                }}
              >
                <Heart className="w-4 h-4" />
                <span className="font-bold tracking-wide">LIKED</span>
              </Link>

              <Link
                to="/create-playlist"
                className="flex items-center gap-2 px-4 py-2 border-2 transition-all"
                style={isActive('/create-playlist') ? {
                  backgroundColor: colors.primary,
                  color: 'white',
                  borderColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}80`
                } : {
                  color: colors.primary,
                  borderColor: colors.border,
                }}
              >
                <PlusCircle className="w-4 h-4" />
                <span className="font-bold tracking-wide">CREATE</span>
              </Link>

              <div className="ml-4 flex gap-2">
                <Link
                  to="/sign-in"
                  className="flex items-center gap-2 px-4 py-2 border-2 transition-all"
                  style={isActive('/sign-in') ? {
                    backgroundColor: colors.secondary,
                    color: 'white',
                    borderColor: colors.accent,
                    boxShadow: `0 0 10px ${colors.accent}80`
                  } : {
                    color: colors.secondary,
                    borderColor: colors.secondary,
                  }}
                >
                  <Music2 className="w-4 h-4" />
                  <span className="font-bold tracking-wide">CONNECT</span>
                </Link>

                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 text-white border-2 transition-all"
                  style={{
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                    borderColor: colors.accent,
                    boxShadow: `0 0 15px ${colors.accent}80`
                  }}
                >
                  <User className="w-4 h-4" />
                  <span className="font-bold tracking-wide">ACCOUNT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
