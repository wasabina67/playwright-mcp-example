import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="ザ・アルデンテ" className="h-10" />
          <span className="ml-2 text-xl font-bold">ザ・アルデンテ</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'メニュー', id: 'menu' },
              { name: 'ギャラリー', id: 'gallery' },
              { name: 'アクセス', id: 'access' },
              { name: '予約', id: 'reservation' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
