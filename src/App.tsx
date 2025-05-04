import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* ヘッダーナビゲーション */}
      <header className="header">
        <div className="logo-container">
          <img src="logo.png" className="logo" alt="ザ・アルデンテ ロゴ" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#about">当店について</a></li>
            <li><a href="#menu">メニュー</a></li>
            <li><a href="#gallery">ギャラリー</a></li>
            <li><a href="#info">店舗情報</a></li>
          </ul>
        </nav>
      </header>

      {/* メインビジュアル */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ザ・アルデンテ</h1>
          <p className="tagline">完璧な茹で加減で提供する至極のパスタ</p>
        </div>
      </section>

      {/* 当店について */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">当店について</h2>
          <div className="about-content">
            <div className="about-text">
              <p>1993年に新宿で創業したスパゲッティ専門店。</p>
              <p>絶妙なアルデンテの食感とコシの強い麺が特徴です。</p>
              <p>厳選した季節の食材と伝統的なレシピで、本場イタリアの味を東京で堪能していただけます。</p>
              <p>創業から30年、変わらぬ味と新しい驚きを提供し続けています。</p>
            </div>
            <div className="about-image">
              <img src="restaurant.jpg" alt="店内の様子" />
            </div>
          </div>
        </div>
      </section>

      {/* メニューセクション */}
      <section id="menu" className="menu-section">
        <div className="section-container">
          <h2 className="section-title">人気メニュー</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="pasta1.jpg" alt="カルボナーラ" />
              <h3>特製カルボナーラ</h3>
              <p>厳選された卵と風味豊かなチーズ、香ばしいパンチェッタの絶妙なハーモニー</p>
              <span className="price">¥1,800</span>
            </div>
            <div className="menu-item">
              <img src="pasta2.jpg" alt="ボロネーゼ" />
              <h3>贅沢ボロネーゼ</h3>
              <p>48時間かけて煮込んだ濃厚ミートソースと手打ちタリアテッレ</p>
              <span className="price">¥1,650</span>
            </div>
            <div className="menu-item">
              <img src="pasta3.jpg" alt="アラビアータ" />
              <h3>情熱のアラビアータ</h3>
              <p>イタリア直送の唐辛子と香り高いニンニク、完熟トマトのピリ辛パスタ</p>
              <span className="price">¥1,500</span>
            </div>
            <div className="menu-item">
              <img src="pasta4.jpg" alt="ペスカトーレ" />
              <h3>海の恵みペスカトーレ</h3>
              <p>新鮮な魚介類をふんだんに使った贅沢シーフードパスタ</p>
              <span className="price">¥2,000</span>
            </div>
          </div>
          <div className="menu-more">
            <a href="#" className="btn">メニューをもっと見る</a>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">ギャラリー</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="gallery1.jpg" alt="店内の様子" /></div>
            <div className="gallery-item"><img src="gallery2.jpg" alt="パスタの調理風景" /></div>
            <div className="gallery-item"><img src="gallery3.jpg" alt="パスタ料理" /></div>
            <div className="gallery-item"><img src="gallery4.jpg" alt="ワインセレクション" /></div>
            <div className="gallery-item"><img src="gallery5.jpg" alt="デザート" /></div>
            <div className="gallery-item"><img src="gallery6.jpg" alt="テラス席" /></div>
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section id="info" className="info-section">
        <div className="section-container">
          <h2 className="section-title">店舗情報</h2>
          <div className="info-content">
            <div className="info-details">
              <div className="info-item">
                <h3>営業時間</h3>
                <p>ランチ：11:30〜15:00（L.O. 14:30）</p>
                <p>ディナー：17:30〜22:00（L.O. 21:30）</p>
                <p>定休日：毎週水曜日</p>
              </div>
              <div className="info-item">
                <h3>アクセス</h3>
                <p>東京都新宿区西新宿1-2-3</p>
                <p>新宿駅西口から徒歩5分</p>
                <p>お問い合わせ：03-1234-5678</p>
              </div>
            </div>
            <div className="map-container">
              <img src="map.jpg" alt="地図" className="store-map" />
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo-white.png" alt="ザ・アルデンテ ロゴ" />
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><i className="social-icon instagram">Instagram</i></a>
            <a href="#" aria-label="Twitter"><i className="social-icon twitter">Twitter</i></a>
            <a href="#" aria-label="Facebook"><i className="social-icon facebook">Facebook</i></a>
          </div>
          <p className="copyright">© 2023 ザ・アルデンテ All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
