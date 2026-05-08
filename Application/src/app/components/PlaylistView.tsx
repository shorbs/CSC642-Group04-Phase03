import { useParams, Link } from 'react-router';
import { Play, Music2, ChevronLeft, ChevronRight } from 'lucide-react';
import { playlists } from '../data/playlists';
import { useColorblind } from '../context/ColorblindContext';

const getSourceBadgeColor = (source: string) => {
  const colors: Record<string, string> = {
    'Spotify': 'bg-green-900 text-green-400 border-green-500',
    'Apple Music': 'bg-red-900 text-red-400 border-red-500',
    'YouTube Music': 'bg-red-900 text-red-400 border-red-500',
    'SoundCloud': 'bg-orange-900 text-orange-400 border-orange-500',
    'Tidal': 'bg-gray-900 text-gray-400 border-gray-500',
    'Amazon Music': 'bg-blue-900 text-blue-400 border-blue-500',
  };
  return colors[source] || 'bg-gray-900 text-gray-400 border-gray-500';
};

export default function PlaylistView() {
  const { id } = useParams();
  const { colors } = useColorblind();
  const playlistId = id ? parseInt(id) : playlists[0].id;
  const currentPlaylist = playlists.find(p => p.id === playlistId) || playlists[0];

  const currentIndex = playlists.findIndex(p => p.id === playlistId);
  const previousPlaylist = currentIndex > 0 ? playlists[currentIndex - 1] : null;
  const nextPlaylist = currentIndex < playlists.length - 1 ? playlists[currentIndex + 1] : null;

  return (
    <div className="size-full bg-gradient-to-br from-[#0a0a0a] via-[#1a0520] to-[#0a0a0a] p-8 relative">
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-black border-2 transition-all font-bold tracking-wide"
            style={{
              borderColor: colors.border,
              color: colors.primary,
              boxShadow: `0 0 10px ${colors.accent}50`
            }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex items-center gap-3">
            {previousPlaylist && (
              <Link
                to={`/playlist/${previousPlaylist.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-black border-2 transition-all font-bold tracking-wide"
                style={{
                  borderColor: colors.secondary,
                  color: colors.secondary,
                  boxShadow: `0 0 10px ${colors.secondary}50`
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm">{previousPlaylist.name.toUpperCase()}</span>
              </Link>
            )}
            {nextPlaylist && (
              <Link
                to={`/playlist/${nextPlaylist.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-black border-2 transition-all font-bold tracking-wide"
                style={{
                  borderColor: colors.secondary,
                  color: colors.secondary,
                  boxShadow: `0 0 10px ${colors.secondary}50`
                }}
              >
                <span className="text-sm">{nextPlaylist.name.toUpperCase()}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        <div
          className="bg-black border-4 overflow-hidden"
          style={{
            borderColor: colors.border,
            boxShadow: `0 0 30px ${colors.accent}60`
          }}
        >
          <div
            className={`bg-gradient-to-r ${currentPlaylist.coverColor} p-8 text-white border-b-4 relative`}
            style={{ borderColor: colors.border }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-20 h-20 bg-white/10 border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Music2 className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <div>
                <p className="text-sm opacity-90 tracking-wider">★ PLAYLIST ★</p>
                <h1 className="text-5xl mb-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{currentPlaylist.name.toUpperCase()}</h1>
                <p className="text-sm opacity-90 mb-2 italic">{currentPlaylist.description}</p>
                <p className="text-sm opacity-90 font-bold tracking-wide">{currentPlaylist.songs.length} SONGS ★ {currentPlaylist.duration}</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-black/90">
            <table className="w-full">
              <thead
                className="border-b-2 bg-black"
                style={{ borderColor: colors.border }}
              >
                <tr>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >#</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >TITLE</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >ARTIST</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >ALBUM</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >SONG NAME</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >DURATION</th>
                  <th
                    className="text-left py-3 px-4 text-sm font-black tracking-wide"
                    style={{ color: colors.primary }}
                  >SOURCE</th>
                </tr>
              </thead>
              <tbody>
                {currentPlaylist.songs.map((song, index) => (
                  <tr
                    key={song.id}
                    className="border-b transition-colors group"
                    style={{ borderColor: `${colors.border}40` }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="group-hover:hidden font-bold"
                          style={{ color: colors.secondary }}
                        >{index + 1}</span>
                        <Play
                          className="w-4 h-4 hidden group-hover:block cursor-pointer"
                          style={{ color: colors.primary }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white font-medium">{song.title}</td>
                    <td
                      className="py-4 px-4"
                      style={{ color: colors.secondary }}
                    >{song.artist}</td>
                    <td
                      className="py-4 px-4 italic"
                      style={{ color: colors.secondary }}
                    >{song.album}</td>
                    <td
                      className="py-4 px-4"
                      style={{ color: colors.secondary }}
                    >{song.songName}</td>
                    <td
                      className="py-4 px-4 font-bold"
                      style={{ color: colors.primary }}
                    >{song.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2 py-1 border-2 text-xs font-bold ${getSourceBadgeColor(song.source)}`}>
                        {song.source.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2
            className="text-3xl mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
            }}
          >
            ALL PLAYLISTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="bg-black border-2 p-4 transition-all"
                style={playlist.id === playlistId ? {
                  borderColor: colors.primary,
                  boxShadow: `0 0 20px ${colors.accent}80`
                } : {
                  borderColor: colors.border
                }}
              >
                <div className={`h-20 bg-gradient-to-br ${playlist.coverColor} border-2 border-white mb-3 flex items-center justify-center`}>
                  <Music2 className="w-8 h-8 text-white opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
                <p
                  className="text-sm font-black truncate tracking-wide"
                  style={{ color: colors.primary }}
                >
                  {playlist.name.toUpperCase()}
                </p>
                <p
                  className="text-xs"
                  style={{ color: colors.secondary }}
                >
                  {playlist.songCount} songs
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
