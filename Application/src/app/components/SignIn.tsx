import { Music2, Youtube, Cloud, Waves, Radio, AudioLines } from 'lucide-react';
import { useColorblind } from '../context/ColorblindContext';

const platforms = [
  { name: 'Spotify', icon: Music2, color: 'bg-[#1DB954] hover:bg-[#1ed760]', textColor: 'text-white' },
  { name: 'Apple Music', icon: AudioLines, color: 'bg-[#FA243C] hover:bg-[#ff3850]', textColor: 'text-white' },
  { name: 'YouTube Music', icon: Youtube, color: 'bg-[#FF0000] hover:bg-[#ff1a1a]', textColor: 'text-white' },
  { name: 'SoundCloud', icon: Cloud, color: 'bg-[#FF5500] hover:bg-[#ff6a1a]', textColor: 'text-white' },
  { name: 'Tidal', icon: Waves, color: 'bg-[#000000] hover:bg-[#1a1a1a]', textColor: 'text-white' },
  { name: 'Amazon Music', icon: Radio, color: 'bg-[#00A8E1] hover:bg-[#1ab8f0]', textColor: 'text-white' },
];

export default function SignIn() {
  const { colors } = useColorblind();

  const handleSignIn = (platformName: string) => {
    console.log(`Signing in to ${platformName}...`);
    alert(`Redirecting to ${platformName} sign-in...`);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a0520] to-[#0a0a0a] relative">
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
      <div className="w-full max-w-md p-8 relative z-10">
        <div
          className="bg-black border-4 p-8"
          style={{
            borderColor: colors.border,
            boxShadow: `0 0 40px ${colors.accent}80`
          }}
        >
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-20 h-20 border-4 border-white mb-4"
              style={{
                background: `linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary})`,
                boxShadow: `0 0 20px ${colors.accent}`
              }}
            >
              <Music2 className="w-10 h-10 text-white" />
            </div>
            <h1
              className="text-4xl mb-2 text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                filter: `drop-shadow(0 0 15px ${colors.accent})`
              }}
            >
              CONNECT YOUR MUSIC
            </h1>
            <p
              className="tracking-wider"
              style={{ color: colors.primary }}
            >
              ★ SIGN IN TO YOUR STREAMING PLATFORM ★
            </p>
          </div>

          <div className="space-y-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <button
                  key={platform.name}
                  onClick={() => handleSignIn(platform.name)}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 border-4 border-white transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] ${platform.color} ${platform.textColor} shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-black tracking-wider">CONTINUE WITH {platform.name.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          <div
            className="mt-8 text-center text-sm border-t-2 pt-6"
            style={{
              color: colors.secondary,
              borderColor: colors.border
            }}
          >
            <p className="italic">By signing in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
