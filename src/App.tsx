import { Toaster } from './components/ui/toaster';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { ReservationForm } from './components/ReservationForm';
import { AccessMap } from './components/AccessMap';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="menu" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">メニュー</h2>
          <Menu />
        </section>
        <section id="about" className="py-16 px-4 md:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">私たちについて</h2>
            <About />
          </div>
        </section>
        <section id="gallery" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">ギャラリー</h2>
          <Gallery />
        </section>
        <section id="reservation" className="py-16 px-4 md:px-8 bg-amber-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">ご予約</h2>
            <ReservationForm />
          </div>
        </section>
        <section id="access" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">アクセス</h2>
          <AccessMap />
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
