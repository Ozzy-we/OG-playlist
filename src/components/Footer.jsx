import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (email && isChecked) {
      console.log('Email:', email);
      setEmail('');
      setIsChecked(false);
    }
  };

  return (
    <footer className="bg-black py-12 mr-4">
      <div className="w-full px-4 max-w-6xl mx-auto">
        {/* Email Subscription Form */}
        <div className="mb-8">
          <h3 className="text-white font-bold text-lg mb-4">STAY UPDATED</h3>
          <form onSubmit={handleJoin}>
            {/* Email Input and Join Button */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-b border-white text-white placeholder-gray-500 focus:outline-none pb-2"
                required
              />
              <button
                type="submit"
                className="text-theme-red font-bold uppercase hover:opacity-80 transition"
              >
                JOIN
              </button>
            </div>

            {/* Checkbox and Marketing Message */}
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="marketing"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 cursor-pointer"
              />
              <label htmlFor="marketing" className="text-sm text-gray-400 flex flex-col">
                <span>
                  I want Warner Music Group to send me marketing messages about Twenty One Pilots. 
                  <a href="#" className="text-theme-red hover:text-theme-yellow-hover ml-1">Unsubscribe</a> at any time.
                </span>
                <span className="mt-2">
                  Please read our <a href="#" className="text-theme-red hover:text-theme-yellow-hover">Privacy Policy</a> for more information about how we handle your personal information, including for marketing.
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* Links Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">LINKS</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-theme-red transition">Home</a></li>
                <li><a href="#" className="hover:text-theme-red transition">Videos</a></li>
                <li><a href="#" className="hover:text-theme-red transition">Merch</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold mb-4">FOLLOW</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-theme-red transition">Twitter</a></li>
                <li><a href="#" className="hover:text-theme-red transition">Instagram</a></li>
                <li><a href="#" className="hover:text-theme-red transition">YouTube</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">LEGAL</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-theme-red transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-theme-red transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-theme-red transition">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 OG Playlist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
