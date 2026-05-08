import { useState } from 'react';
import { Music2, Mail, Lock, User } from 'lucide-react';
import { useColorblind } from '../context/ColorblindContext';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { colors } = useColorblind();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email, password });
      alert('Login successful!');
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Registering with:', { name, email, password });
      alert('Registration successful!');
    }
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
              WELCOME TO UNIBEATS
            </h1>
            <p
              className="tracking-wider"
              style={{ color: colors.primary }}
            >
              ★ {isLogin ? 'SIGN IN TO YOUR ACCOUNT' : 'CREATE YOUR ACCOUNT'} ★
            </p>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className="flex-1 py-3 px-4 border-2 transition-all font-black tracking-wider"
              style={isLogin ? {
                backgroundColor: colors.primary,
                color: 'white',
                borderColor: colors.accent,
                boxShadow: `0 0 15px ${colors.accent}80`
              } : {
                backgroundColor: 'black',
                color: colors.primary,
                borderColor: colors.border
              }}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className="flex-1 py-3 px-4 border-2 transition-all font-black tracking-wider"
              style={!isLogin ? {
                backgroundColor: colors.primary,
                color: 'white',
                borderColor: colors.accent,
                boxShadow: `0 0 15px ${colors.accent}80`
              } : {
                backgroundColor: 'black',
                color: colors.primary,
                borderColor: colors.border
              }}
            >
              REGISTER
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label
                  className="block text-sm mb-2 font-black tracking-wide"
                  style={{ color: colors.primary }}
                >
                  FULL NAME
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: colors.border }}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ENTER YOUR FULL NAME"
                    required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 bg-black border-2 text-white focus:outline-none"
                    style={{
                      borderColor: colors.border
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <label
                className="block text-sm mb-2 font-black tracking-wide"
                style={{ color: colors.primary }}
              >
                EMAIL
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: colors.border }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-black border-2 text-white focus:outline-none"
                  style={{
                    borderColor: colors.border
                  }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm mb-2 font-black tracking-wide"
                style={{ color: colors.primary }}
              >
                PASSWORD
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: colors.border }}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="ENTER YOUR PASSWORD"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-black border-2 text-white focus:outline-none"
                  style={{
                    borderColor: colors.border
                  }}
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label
                  className="block text-sm mb-2 font-black tracking-wide"
                  style={{ color: colors.primary }}
                >
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: colors.border }}
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="CONFIRM YOUR PASSWORD"
                    required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 bg-black border-2 text-white focus:outline-none"
                    style={{
                      borderColor: colors.border
                    }}
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-pink-600" />
                  <span style={{ color: colors.secondary }}>REMEMBER ME</span>
                </label>
                <a
                  href="#"
                  className="font-bold"
                  style={{ color: colors.primary }}
                >
                  FORGOT PASSWORD?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 text-white border-4 transition-all duration-200 transform hover:scale-[1.05] font-black tracking-widest"
              style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                borderColor: colors.accent,
                boxShadow: `0 0 25px ${colors.accent}`
              }}
            >
              {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </button>
          </form>

          {isLogin && (
            <div
              className="mt-6 text-center border-t-2 pt-6"
              style={{ borderColor: colors.border }}
            >
              <p className="text-sm" style={{ color: colors.secondary }}>
                DON'T HAVE AN ACCOUNT?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="font-black"
                  style={{ color: colors.primary }}
                >
                  REGISTER HERE
                </button>
              </p>
            </div>
          )}

          {!isLogin && (
            <div
              className="mt-6 text-center border-t-2 pt-6"
              style={{ borderColor: colors.border }}
            >
              <p className="text-sm" style={{ color: colors.secondary }}>
                ALREADY HAVE AN ACCOUNT?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="font-black"
                  style={{ color: colors.primary }}
                >
                  SIGN IN HERE
                </button>
              </p>
            </div>
          )}

          <div
            className="mt-8 pt-6 border-t-2"
            style={{ borderColor: colors.border }}
          >
            <p
              className="text-center text-sm italic"
              style={{ color: colors.secondary }}
            >
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
