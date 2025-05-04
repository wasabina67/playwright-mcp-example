export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">ザ・アルデンテ</h2>
            <p className="mt-2 text-slate-300">
              絶妙なアルデンテの食感とコシの強い麺が特徴の<br />
              スパゲッティ専門店
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-amber-400">サイトマップ</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#hero" className="hover:text-amber-400 transition-colors">ホーム</a></li>
                <li><a href="#menu" className="hover:text-amber-400 transition-colors">メニュー</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">私たちについて</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-amber-400">情報</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#gallery" className="hover:text-amber-400 transition-colors">ギャラリー</a></li>
                <li><a href="#access" className="hover:text-amber-400 transition-colors">アクセス</a></li>
                <li><a href="#reservation" className="hover:text-amber-400 transition-colors">ご予約</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-3 text-amber-400">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} ザ・アルデンテ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
