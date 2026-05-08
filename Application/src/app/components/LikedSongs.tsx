import { useState } from 'react';
import { Music2, Youtube, Cloud, Waves, Radio, AudioLines, Heart } from 'lucide-react';
import { useColorblind } from '../context/ColorblindContext';

const platforms = [
  { id: 'spotify', name: 'Spotify', icon: Music2, color: 'bg-[#1DB954]', textColor: 'text-[#1DB954]' },
  { id: 'apple', name: 'Apple Music', icon: AudioLines, color: 'bg-[#FA243C]', textColor: 'text-[#FA243C]' },
  { id: 'youtube', name: 'YouTube Music', icon: Youtube, color: 'bg-[#FF0000]', textColor: 'text-[#FF0000]' },
  { id: 'soundcloud', name: 'SoundCloud', icon: Cloud, color: 'bg-[#FF5500]', textColor: 'text-[#FF5500]' },
  { id: 'tidal', name: 'Tidal', icon: Waves, color: 'bg-[#000000]', textColor: 'text-[#000000]' },
  { id: 'amazon', name: 'Amazon Music', icon: Radio, color: 'bg-[#00A8E1]', textColor: 'text-[#00A8E1]' },
];

const likedSongsByPlatform: Record<string, Array<{ id: number; title: string; artist: string; album: string; duration: string }>> = {
  spotify: [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
    { id: 2, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:58' },
    { id: 3, title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', duration: '3:20' },
    { id: 4, title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', duration: '3:50' },
    { id: 5, title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Verse', duration: '2:38' },
  ],
  apple: [
    { id: 1, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23' },
    { id: 2, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', duration: '3:20' },
    { id: 3, title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', duration: '2:58' },
    { id: 4, title: 'Circles', artist: 'Post Malone', album: 'Hollywood\'s Bleeding', duration: '3:35' },
  ],
  youtube: [
    { id: 1, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58' },
    { id: 2, title: 'Industry Baby', artist: 'Lil Nas X', album: 'MONTERO', duration: '3:32' },
    { id: 3, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', duration: '3:18' },
  ],
  soundcloud: [
    { id: 1, title: 'Calm Down', artist: 'Rema & Selena Gomez', album: 'Rave & Roses', duration: '3:59' },
    { id: 2, title: 'Die For You', artist: 'The Weeknd', album: 'Starboy', duration: '4:20' },
  ],
  tidal: [
    { id: 1, title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", duration: '2:47' },
    { id: 2, title: 'Running Up That Hill', artist: 'Kate Bush', album: 'Hounds of Love', duration: '5:03' },
    { id: 3, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54' },
  ],
  amazon: [
    { id: 1, title: 'Vampire', artist: 'Olivia Rodrigo', album: 'GUTS', duration: '3:39' },
    { id: 2, title: 'Paint The Town Red', artist: 'Doja Cat', album: 'Scarlet', duration: '3:50' },
    { id: 3, title: 'Greedy', artist: 'Tate McRae', album: 'THINK LATER', duration: '2:11' },
  ],
};

export default function LikedSongs() {
  const [selectedPlatform, setSelectedPlatform] = useState('spotify');
  const { colors } = useColorblind();

  const currentPlatform = platforms.find(p => p.id === selectedPlatform);
  const currentSongs = likedSongsByPlatform[selectedPlatform] || [];
  const Icon = currentPlatform?.icon || Music2;

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
            LIKED SONGS
          </h1>
          <p
            className="tracking-wider"
            style={{ color: colors.primary }}
          >
            ★ YOUR FAVORITE TRACKS FROM CONNECTED PLATFORMS ★
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {platforms.map((platform) => {
            const PlatformIcon = platform.icon;
            const isSelected = selectedPlatform === platform.id;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex flex-col items-center gap-3 p-4 border-4 transition-all duration-200 ${
                  isSelected
                    ? `${platform.color} text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-105`
                    : 'bg-black text-pink-400 border-pink-600 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:scale-102'
                }`}
              >
                <PlatformIcon className="w-8 h-8" />
                <span className="text-sm font-black text-center tracking-wide">{platform.name.toUpperCase()}</span>
                <span className="text-xs font-bold">
                  {likedSongsByPlatform[platform.id]?.length || 0} SONGS
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="bg-black border-4 overflow-hidden"
          style={{
            borderColor: colors.border,
            boxShadow: `0 0 30px ${colors.accent}60`
          }}
        >
          <div
            className={`${currentPlatform?.color} p-8 text-white border-b-4 relative`}
            style={{ borderColor: colors.border }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-20 h-20 bg-white/10 border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Icon className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <div>
                <p className="text-sm opacity-90 tracking-wider">★ LIKED SONGS FROM ★</p>
                <h2 className="text-5xl mb-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{currentPlatform?.name.toUpperCase()}</h2>
                <p className="text-sm opacity-90 font-bold tracking-wide">{currentSongs.length} SONGS</p>
              </div>
            </div>
          </div>

          {currentSongs.length > 0 ? (
            <div className="overflow-x-auto bg-black/90">
              <table className="w-full">
                <thead
                className="border-b-2 bg-black"
                style={{ borderColor: colors.border }}
              >
                  <tr>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide">#</th>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide">TITLE</th>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide">ARTIST</th>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide">ALBUM</th>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide">DURATION</th>
                    <th className="text-left py-3 px-4 text-sm text-pink-400 font-black tracking-wide"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentSongs.map((song, index) => (
                    <tr
                      key={song.id}
                      className="border-b transition-colors"
                      style={{ borderColor: `${colors.border}40` }}
                    >
                      <td
                        className="py-4 px-4 font-bold"
                        style={{ color: colors.secondary }}
                      >{index + 1}</td>
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
                        className="py-4 px-4 font-bold"
                        style={{ color: colors.primary }}
                      >{song.duration}</td>
                      <td className="py-4 px-4">
                        <Heart
                          className="w-5 h-5 fill-current"
                          style={{
                            color: colors.primary,
                            filter: `drop-shadow(0 0 8px ${colors.primary})`
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center bg-black/90">
              <Heart
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                style={{ color: colors.primary }}
              />
              <p
                className="text-lg font-black tracking-wide"
                style={{ color: colors.primary }}
              >
                NO LIKED SONGS YET
              </p>
              <p
                className="text-sm italic"
                style={{ color: colors.secondary }}
              >
                Start liking songs on {currentPlatform?.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
