import { useState } from 'react';
import { Search, Plus, X, ListMusic, Music2, Youtube, Cloud, Waves, Radio, AudioLines } from 'lucide-react';
import { useColorblind } from '../context/ColorblindContext';

const platformIcons: Record<string, any> = {
  'Spotify': Music2,
  'Apple Music': AudioLines,
  'YouTube Music': Youtube,
  'SoundCloud': Cloud,
  'Tidal': Waves,
  'Amazon Music': Radio,
};

const allLikedSongs = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', source: 'Spotify' },
  { id: 2, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:58', source: 'Spotify' },
  { id: 3, title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', duration: '3:20', source: 'Spotify' },
  { id: 4, title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', duration: '3:50', source: 'Spotify' },
  { id: 5, title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Verse', duration: '2:38', source: 'Spotify' },
  { id: 6, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', source: 'Apple Music' },
  { id: 7, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', duration: '3:20', source: 'Apple Music' },
  { id: 8, title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', duration: '2:58', source: 'Apple Music' },
  { id: 9, title: 'Circles', artist: 'Post Malone', album: 'Hollywood\'s Bleeding', duration: '3:35', source: 'Apple Music' },
  { id: 10, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', source: 'YouTube Music' },
  { id: 11, title: 'Industry Baby', artist: 'Lil Nas X', album: 'MONTERO', duration: '3:32', source: 'YouTube Music' },
  { id: 12, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', duration: '3:18', source: 'YouTube Music' },
  { id: 13, title: 'Calm Down', artist: 'Rema & Selena Gomez', album: 'Rave & Roses', duration: '3:59', source: 'SoundCloud' },
  { id: 14, title: 'Die For You', artist: 'The Weeknd', album: 'Starboy', duration: '4:20', source: 'SoundCloud' },
  { id: 15, title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", duration: '2:47', source: 'Tidal' },
  { id: 16, title: 'Running Up That Hill', artist: 'Kate Bush', album: 'Hounds of Love', duration: '5:03', source: 'Tidal' },
  { id: 17, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54', source: 'Tidal' },
  { id: 18, title: 'Vampire', artist: 'Olivia Rodrigo', album: 'GUTS', duration: '3:39', source: 'Amazon Music' },
  { id: 19, title: 'Paint The Town Red', artist: 'Doja Cat', album: 'Scarlet', duration: '3:50', source: 'Amazon Music' },
  { id: 20, title: 'Greedy', artist: 'Tate McRae', album: 'THINK LATER', duration: '2:11', source: 'Amazon Music' },
];

type Song = typeof allLikedSongs[0];

export default function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);
  const { colors } = useColorblind();

  const filteredSongs = allLikedSongs.filter(song => {
    const query = searchQuery.toLowerCase();
    return (
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.album.toLowerCase().includes(query)
    );
  });

  const addToPlaylist = (song: Song) => {
    if (!playlistSongs.find(s => s.id === song.id)) {
      setPlaylistSongs([...playlistSongs, song]);
    }
  };

  const removeFromPlaylist = (songId: number) => {
    setPlaylistSongs(playlistSongs.filter(s => s.id !== songId));
  };

  const savePlaylist = () => {
    if (!playlistName.trim()) {
      alert('Please enter a playlist name');
      return;
    }
    if (playlistSongs.length === 0) {
      alert('Please add at least one song to the playlist');
      return;
    }
    alert(`Playlist "${playlistName}" created with ${playlistSongs.length} songs!`);
  };

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

  return (
    <div className="size-full bg-gradient-to-br from-[#0a0a0a] via-[#1a0520] to-[#0a0a0a] p-8 relative">
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="mb-6 border-4 bg-black/80 p-6"
          style={{
            borderColor: colors.border,
            boxShadow: `0 0 30px ${colors.accent}50`
          }}
        >
          <h1
            className="text-4xl mb-2 text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
              filter: `drop-shadow(0 0 15px ${colors.accent})`
            }}
          >
            CREATE PLAYLIST
          </h1>
          <p
            className="tracking-wider"
            style={{ color: colors.primary }}
          >
            ★ BUILD YOUR PERFECT PLAYLIST FROM YOUR LIKED SONGS ★
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div
              className="bg-black border-4 p-6"
              style={{
                borderColor: colors.border,
                boxShadow: `0 0 20px ${colors.accent}50`
              }}
            >
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 font-black tracking-wide"
                  style={{ color: colors.primary }}
                >
                  PLAYLIST NAME
                </label>
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                  placeholder="ENTER PLAYLIST NAME..."
                  className="w-full px-4 py-3 bg-black border-2 text-white focus:outline-none"
                  style={{
                    borderColor: colors.border,
                    color: 'white'
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm mb-2 font-black tracking-wide"
                  style={{ color: colors.primary }}
                >
                  SEARCH SONGS
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: colors.border }}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH BY TITLE, ARTIST, OR ALBUM..."
                    className="w-full pl-10 pr-4 py-3 bg-black border-2 text-white focus:outline-none"
                    style={{
                      borderColor: colors.border
                    }}
                  />
                </div>
              </div>

              <div
                className="border-t-2 pt-4"
                style={{ borderColor: colors.border }}
              >
                <p
                  className="text-sm mb-3 font-bold tracking-wide"
                  style={{ color: colors.primary }}
                >
                  {filteredSongs.length} SONGS AVAILABLE
                </p>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredSongs.map((song) => {
                    const isAdded = playlistSongs.find(s => s.id === song.id);
                    const SourceIcon = platformIcons[song.source];
                    return (
                      <div
                        key={song.id}
                        className="flex items-center justify-between p-3 bg-black border-2 transition-all"
                        style={{
                          borderColor: `${colors.border}40`
                        }}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {SourceIcon && (
                            <SourceIcon
                              className="w-4 h-4"
                              style={{ color: colors.primary }}
                            />
                          )}
                          <div className="flex-1">
                            <p className="font-bold text-white">{song.title}</p>
                            <p
                              className="text-sm"
                              style={{ color: colors.secondary }}
                            >{song.artist}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 border-2 font-bold ${getSourceBadgeColor(song.source)}`}>
                            {song.source.toUpperCase()}
                          </span>
                          <span
                            className="text-sm font-bold"
                            style={{ color: colors.primary }}
                          >{song.duration}</span>
                        </div>
                        <button
                          onClick={() => addToPlaylist(song)}
                          disabled={!!isAdded}
                          className="ml-3 p-2 border-2 transition-all"
                          style={isAdded ? {
                            backgroundColor: '#1a1a1a',
                            color: '#666',
                            borderColor: '#333',
                            cursor: 'not-allowed'
                          } : {
                            backgroundColor: colors.primary,
                            color: 'white',
                            borderColor: colors.accent,
                            boxShadow: `0 0 10px ${colors.accent}80`
                          }}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div
              className="bg-black border-4 p-6 sticky top-8"
              style={{
                borderColor: colors.secondary,
                boxShadow: `0 0 20px ${colors.secondary}50`
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 border-2 border-white flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary})`,
                    boxShadow: `0 0 15px ${colors.secondary}80`
                  }}
                >
                  <ListMusic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    NEW PLAYLIST
                  </p>
                  <p
                    className="font-black"
                    style={{ color: colors.primary }}
                  >
                    {playlistName || 'UNTITLED PLAYLIST'}
                  </p>
                </div>
              </div>

              <div
                className="mb-4 p-3 border-2"
                style={{
                  backgroundColor: `${colors.secondary}20`,
                  borderColor: colors.secondary
                }}
              >
                <p
                  className="text-sm font-bold tracking-wide"
                  style={{ color: colors.secondary }}
                >
                  {playlistSongs.length} {playlistSongs.length === 1 ? 'SONG' : 'SONGS'} ADDED
                </p>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
                {playlistSongs.length === 0 ? (
                  <div className="text-center py-8">
                    <ListMusic
                      className="w-12 h-12 mx-auto mb-2 opacity-50"
                      style={{ color: colors.secondary }}
                    />
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.secondary }}
                    >
                      NO SONGS ADDED YET
                    </p>
                  </div>
                ) : (
                  playlistSongs.map((song, index) => (
                    <div
                      key={song.id}
                      className="flex items-center justify-between p-2 bg-black border-2 group"
                      style={{
                        borderColor: `${colors.secondary}60`
                      }}
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <span
                          className="text-xs w-6 font-bold"
                          style={{ color: colors.secondary }}
                        >{index + 1}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate text-white font-medium">{song.title}</p>
                          <p
                            className="text-xs truncate"
                            style={{ color: colors.secondary }}
                          >{song.artist}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromPlaylist(song.id)}
                        className="p-1 transition-colors"
                        style={{ color: colors.secondary }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <button
                onClick={savePlaylist}
                className="w-full py-3 text-white border-2 transition-all duration-200 font-black tracking-wider"
                style={{
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                  borderColor: colors.accent,
                  boxShadow: `0 0 20px ${colors.accent}80`
                }}
              >
                CREATE PLAYLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
