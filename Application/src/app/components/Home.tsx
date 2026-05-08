import { Link } from 'react-router';
import { Music2, Play, MoreVertical } from 'lucide-react';
import { playlists } from '../data/playlists';
import { useColorblind } from '../context/ColorblindContext';

export default function Home() {
  const { colors } = useColorblind();

  return (
    <div className="size-full bg-gradient-to-br from-[#0a0a0a] via-[#1a0520] to-[#0a0a0a] relative">
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
      <div className="max-w-7xl mx-auto px-8 py-8 relative z-10">
        <div
          className="mb-8 border-4 bg-black/80 p-6"
          style={{
            borderColor: colors.border,
            boxShadow: `0 0 30px ${colors.accent}50`
          }}
        >
          <h1
            className="text-5xl mb-2 text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
              filter: `drop-shadow(0 0 15px ${colors.accent})`
            }}
          >
            WELCOME BACK
          </h1>
          <p
            className="text-lg tracking-wider"
            style={{ color: colors.primary }}
          >
            YOUR MUSIC LIBRARY
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-3xl text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
              }}
            >
              YOUR PLAYLISTS
            </h2>
            <Link
              to="/create-playlist"
              className="px-6 py-3 text-white border-2 transition-all font-bold tracking-wider"
              style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                borderColor: colors.accent,
                boxShadow: `0 0 20px ${colors.accent}80`
              }}
            >
              + CREATE NEW PLAYLIST
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="bg-black border-4 overflow-hidden transition-all duration-200 group"
                style={{
                  borderColor: colors.border,
                  boxShadow: `0 0 20px ${colors.accent}50`
                }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${playlist.coverColor} relative border-b-4`}
                  style={{ borderColor: colors.border }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music2 className="w-24 h-24 text-white opacity-60 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="w-12 h-12 border-2 border-white flex items-center justify-center hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: `0 0 15px ${colors.accent}`
                      }}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-black/80">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="text-xl font-black tracking-wide"
                      style={{ color: colors.primary }}
                    >
                      {playlist.name.toUpperCase()}
                    </h3>
                    <button style={{ color: colors.primary }}>
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <p
                    className="text-sm mb-3 line-clamp-2 italic"
                    style={{ color: colors.secondary }}
                  >
                    {playlist.description}
                  </p>
                  <div
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.primary }}
                  >
                    <span className="font-bold">{playlist.songCount} SONGS</span>
                    <span>★</span>
                    <span className="font-bold">{playlist.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2
            className="text-3xl mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
            }}
          >
            QUICK ACTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/liked-songs"
              className="bg-black border-4 p-6 transition-all group"
              style={{
                borderColor: colors.secondary,
                boxShadow: `0 0 20px ${colors.secondary}50`
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary})`,
                    boxShadow: `0 0 15px ${colors.secondary}80`
                  }}
                >
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p
                    className="font-black text-lg tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    LIKED SONGS
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ color: colors.secondary, opacity: 0.8 }}
                  >
                    all your favorites
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/playlist/1"
              className="bg-black border-4 p-6 transition-all group"
              style={{
                borderColor: colors.accent,
                boxShadow: `0 0 20px ${colors.accent}50`
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.accent})`,
                    boxShadow: `0 0 15px ${colors.accent}80`
                  }}
                >
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p
                    className="font-black text-lg tracking-wide"
                    style={{ color: colors.accent }}
                  >
                    BROWSE PLAYLISTS
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ color: colors.primary, opacity: 0.8 }}
                  >
                    view all playlists
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/sign-in"
              className="bg-black border-4 p-6 transition-all group"
              style={{
                borderColor: colors.primary,
                boxShadow: `0 0 20px ${colors.primary}50`
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.accent}, ${colors.secondary})`,
                    boxShadow: `0 0 15px ${colors.primary}80`
                  }}
                >
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p
                    className="font-black text-lg tracking-wide"
                    style={{ color: colors.primary }}
                  >
                    CONNECT PLATFORM
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ color: colors.secondary, opacity: 0.8 }}
                  >
                    add music services
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
