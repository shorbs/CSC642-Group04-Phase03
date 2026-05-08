import { Play, Music2 } from 'lucide-react';

const songs = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', songName: 'Blinding Lights', duration: '3:20', source: 'Spotify' },
  { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', songName: 'Levitating', duration: '3:23', source: 'Apple Music' },
  { id: 3, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', songName: 'Good 4 U', duration: '2:58', source: 'YouTube Music' },
  { id: 4, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', songName: 'Heat Waves', duration: '3:58', source: 'Spotify' },
  { id: 5, title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", songName: 'As It Was', duration: '2:47', source: 'Tidal' },
  { id: 6, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', songName: 'Anti-Hero', duration: '3:20', source: 'Apple Music' },
  { id: 7, title: 'Calm Down', artist: 'Rema & Selena Gomez', album: 'Rave & Roses', songName: 'Calm Down', duration: '3:59', source: 'SoundCloud' },
  { id: 8, title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', songName: 'Flowers', duration: '3:20', source: 'Spotify' },
  { id: 9, title: 'Vampire', artist: 'Olivia Rodrigo', album: 'GUTS', songName: 'Vampire', duration: '3:39', source: 'Amazon Music' },
  { id: 10, title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', songName: 'Cruel Summer', duration: '2:58', source: 'Apple Music' },
];

const getSourceBadgeColor = (source: string) => {
  const colors: Record<string, string> = {
    'Spotify': 'bg-green-100 text-green-700',
    'Apple Music': 'bg-red-100 text-red-700',
    'YouTube Music': 'bg-red-100 text-red-600',
    'SoundCloud': 'bg-orange-100 text-orange-700',
    'Tidal': 'bg-gray-100 text-gray-700',
    'Amazon Music': 'bg-blue-100 text-blue-700',
  };
  return colors[source] || 'bg-gray-100 text-gray-700';
};

export default function Playlist() {
  return (
    <div className="size-full bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                <Music2 className="w-10 h-10" />
              </div>
              <div>
                <p className="text-sm opacity-90">Playlist</p>
                <h1 className="text-4xl mb-1">My Music Collection</h1>
                <p className="text-sm opacity-90">{songs.length} songs</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">#</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Title</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Artist</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Album</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Song Name</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Duration</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Source</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <tr
                    key={song.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors group"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 group-hover:hidden">{index + 1}</span>
                        <Play className="w-4 h-4 text-purple-600 hidden group-hover:block cursor-pointer" />
                      </div>
                    </td>
                    <td className="py-4 px-4">{song.title}</td>
                    <td className="py-4 px-4 text-gray-600">{song.artist}</td>
                    <td className="py-4 px-4 text-gray-600">{song.album}</td>
                    <td className="py-4 px-4 text-gray-600">{song.songName}</td>
                    <td className="py-4 px-4 text-gray-600">{song.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${getSourceBadgeColor(song.source)}`}>
                        {song.source}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
