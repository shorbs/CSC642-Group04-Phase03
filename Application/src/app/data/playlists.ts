export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  songName: string;
  duration: string;
  source: string;
};

export type PlaylistData = {
  id: number;
  name: string;
  description: string;
  songCount: number;
  duration: string;
  coverColor: string;
  songs: Song[];
};

export const playlists: PlaylistData[] = [
  {
    id: 1,
    name: 'Chill Vibes',
    description: 'Relaxing music for studying and working',
    songCount: 6,
    duration: '23min',
    coverColor: 'from-blue-500 to-cyan-500',
    songs: [
      { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', songName: 'Blinding Lights', duration: '3:20', source: 'Spotify' },
      { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', songName: 'Levitating', duration: '3:23', source: 'Apple Music' },
      { id: 3, title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Verse', songName: 'Sunflower', duration: '2:38', source: 'Spotify' },
      { id: 4, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', songName: 'Watermelon Sugar', duration: '2:54', source: 'Tidal' },
      { id: 5, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', songName: 'Peaches', duration: '3:18', source: 'YouTube Music' },
      { id: 6, title: 'Circles', artist: 'Post Malone', album: "Hollywood's Bleeding", songName: 'Circles', duration: '3:35', source: 'Apple Music' },
    ],
  },
  {
    id: 2,
    name: 'Workout Mix',
    description: 'High energy tracks to power through your workout',
    songCount: 5,
    duration: '18min',
    coverColor: 'from-red-500 to-orange-500',
    songs: [
      { id: 7, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', songName: 'Good 4 U', duration: '2:58', source: 'YouTube Music' },
      { id: 8, title: 'Industry Baby', artist: 'Lil Nas X', album: 'MONTERO', songName: 'Industry Baby', duration: '3:32', source: 'YouTube Music' },
      { id: 9, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', songName: 'Heat Waves', duration: '3:58', source: 'Spotify' },
      { id: 10, title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', songName: 'Starboy', duration: '3:50', source: 'Spotify' },
      { id: 11, title: 'Paint The Town Red', artist: 'Doja Cat', album: 'Scarlet', songName: 'Paint The Town Red', duration: '3:50', source: 'Amazon Music' },
    ],
  },
  {
    id: 3,
    name: 'Late Night Drive',
    description: 'Perfect songs for midnight adventures',
    songCount: 6,
    duration: '24min',
    coverColor: 'from-purple-500 to-pink-500',
    songs: [
      { id: 12, title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", songName: 'As It Was', duration: '2:47', source: 'Tidal' },
      { id: 13, title: 'Die For You', artist: 'The Weeknd', album: 'Starboy', songName: 'Die For You', duration: '4:20', source: 'SoundCloud' },
      { id: 14, title: 'Running Up That Hill', artist: 'Kate Bush', album: 'Hounds of Love', songName: 'Running Up That Hill', duration: '5:03', source: 'Tidal' },
      { id: 15, title: 'Calm Down', artist: 'Rema & Selena Gomez', album: 'Rave & Roses', songName: 'Calm Down', duration: '3:59', source: 'SoundCloud' },
      { id: 16, title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', songName: 'Cruel Summer', duration: '2:58', source: 'Apple Music' },
      { id: 17, title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', songName: 'Flowers', duration: '3:20', source: 'Spotify' },
    ],
  },
  {
    id: 4,
    name: 'Morning Coffee',
    description: 'Start your day with these feel-good tunes',
    songCount: 4,
    duration: '13min',
    coverColor: 'from-amber-500 to-yellow-500',
    songs: [
      { id: 18, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', songName: 'Anti-Hero', duration: '3:20', source: 'Apple Music' },
      { id: 19, title: 'Greedy', artist: 'Tate McRae', album: 'THINK LATER', songName: 'Greedy', duration: '2:11', source: 'Amazon Music' },
      { id: 20, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', songName: 'Levitating', duration: '3:23', source: 'Apple Music' },
      { id: 21, title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Verse', songName: 'Sunflower', duration: '2:38', source: 'Spotify' },
    ],
  },
  {
    id: 5,
    name: 'Focus Flow',
    description: 'Instrumental beats for deep concentration',
    songCount: 5,
    duration: '17min',
    coverColor: 'from-green-500 to-emerald-500',
    songs: [
      { id: 22, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', songName: 'Blinding Lights', duration: '3:20', source: 'Spotify' },
      { id: 23, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', songName: 'Heat Waves', duration: '3:58', source: 'Spotify' },
      { id: 24, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', songName: 'Watermelon Sugar', duration: '2:54', source: 'Tidal' },
      { id: 25, title: 'Circles', artist: 'Post Malone', album: "Hollywood's Bleeding", songName: 'Circles', duration: '3:35', source: 'Apple Music' },
      { id: 26, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', songName: 'Peaches', duration: '3:18', source: 'YouTube Music' },
    ],
  },
  {
    id: 6,
    name: 'Party Hits',
    description: 'The ultimate party playlist',
    songCount: 7,
    duration: '25min',
    coverColor: 'from-fuchsia-500 to-purple-500',
    songs: [
      { id: 27, title: 'Industry Baby', artist: 'Lil Nas X', album: 'MONTERO', songName: 'Industry Baby', duration: '3:32', source: 'YouTube Music' },
      { id: 28, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', songName: 'Good 4 U', duration: '2:58', source: 'YouTube Music' },
      { id: 29, title: 'Paint The Town Red', artist: 'Doja Cat', album: 'Scarlet', songName: 'Paint The Town Red', duration: '3:50', source: 'Amazon Music' },
      { id: 30, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', songName: 'Levitating', duration: '3:23', source: 'Apple Music' },
      { id: 31, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', songName: 'Blinding Lights', duration: '3:20', source: 'Spotify' },
      { id: 32, title: 'Vampire', artist: 'Olivia Rodrigo', album: 'GUTS', songName: 'Vampire', duration: '3:39', source: 'Amazon Music' },
      { id: 33, title: 'Calm Down', artist: 'Rema & Selena Gomez', album: 'Rave & Roses', songName: 'Calm Down', duration: '3:59', source: 'SoundCloud' },
    ],
  },
];
