import { Phone, Mail, MapPin, Wrench, Thermometer, Fan, Zap } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="coming-soon">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.svg" alt="Landhuis Logo" className="logo-img" />
            <span className="logo-text">Landhuis</span>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Onze nieuwe website komt eraan
            </div>
            <h1 className="hero-title">
              Echt Duurzaam. <br />
              <span className="text-accent">Vakkundig Geïnstalleerd.</span>
            </h1>
            <p className="hero-description">
              We leggen momenteel de laatste hand aan onze nieuwe website. Landhuis Installatietechniek blijft uw vertrouwde specialist voor warmtepompen, airconditioning en elektrotechniek in Hardenberg en omstreken.
            </p>
            
            <div className="cta-group">
              <a href="tel:0636499203" className="btn btn-primary">
                <Phone size={18} />
                06 - 36 49 92 03
              </a>
              <a href="mailto:landhuisinstallatietechniek@hotmail.com" className="btn btn-outline">
                <Mail size={18} />
                Stuur een bericht
              </a>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Thermometer /></div>
              <h3>Warmtepompen</h3>
              <p>Duurzame verwarming voor uw woning.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Fan /></div>
              <h3>Airconditioning</h3>
              <p>Optimaal klimaat, het hele jaar door.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Zap /></div>
              <h3>Elektra</h3>
              <p>Vakkundige installaties en onderhoud.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Wrench /></div>
              <h3>Loodgieter</h3>
              <p>Kwaliteit in sanitair en leidingwerk.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-info">
            <div className="footer-item">
              <MapPin size={18} className="footer-icon" />
              <span>Hessenweg 13, 7771 CH Hardenberg</span>
            </div>
            <div className="footer-item">
              <Phone size={18} className="footer-icon" />
              <a href="tel:0636499203">06 - 36 49 92 03</a>
            </div>
            <div className="footer-item">
              <Mail size={18} className="footer-icon" />
              <a href="mailto:landhuisinstallatietechniek@hotmail.com">landhuisinstallatietechniek@hotmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Landhuis Installatietechniek. Binnenkort live.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
