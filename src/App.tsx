import { Phone, Mail, MapPin, Wrench, Thermometer, Fan, Zap } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="coming-soon">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.webp" alt="Landhuis Installatietechniek Logo" className="logo-img" />
            <span className="logo-text">Landhuis Installatietechniek</span>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-inner">
          <section className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Binnenkort online: Onze nieuwe website
            </div>
            <h1 className="hero-title">
              Echt Duurzaam. <br />
              <span className="text-accent">Vakkundig Geïnstalleerd.</span>
            </h1>
            <p className="hero-description">
              Landhuis Installatietechniek is uw gecertificeerde specialist in <strong>warmtepompen</strong>, <strong>airconditioning</strong> en <strong>elektrotechniek</strong>. Wij realiseren duurzame oplossingen voor woning en bedrijf in regio Hardenberg, Coevorden en Emmen.
            </p>
            
            <div className="cta-group">
              <a href="tel:0636499203" className="btn btn-primary" aria-label="Bel Landhuis Installatietechniek">
                <Phone size={18} />
                06 - 36 49 92 03
              </a>
              <a href="mailto:landhuisinstallatietechniek@hotmail.com" className="btn btn-outline" aria-label="Stuur een e-mail naar Landhuis Installatietechniek">
                <Mail size={18} />
                Direct contact
              </a>
            </div>
          </section>

          <section className="services-grid" aria-label="Onze Diensten">
            <div className="service-card">
              <div className="service-icon"><Thermometer aria-hidden="true" /></div>
              <h2>Warmtepompen</h2>
              <p>Duurzame verwarming en koeling voor een energiezuinig huis.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Fan aria-hidden="true" /></div>
              <h2>Airconditioning</h2>
              <p>Optimaal klimaatbeheer en comfort, het hele jaar door.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Zap aria-hidden="true" /></div>
              <h2>Elektra</h2>
              <p>Vakkundige elektrotechnische installaties en onderhoud.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Wrench aria-hidden="true" /></div>
              <h2>Loodgieter</h2>
              <p>Kwaliteit in sanitair, water- en afvoerleidingen.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-info">
            <address className="footer-item">
              <MapPin size={18} className="footer-icon" aria-hidden="true" />
              <span>Hessenweg 13, 7771 CH Hardenberg</span>
            </address>
            <div className="footer-item">
              <Phone size={18} className="footer-icon" aria-hidden="true" />
              <a href="tel:0636499203">06 - 36 49 92 03</a>
            </div>
            <div className="footer-item">
              <Mail size={18} className="footer-icon" aria-hidden="true" />
              <a href="mailto:landhuisinstallatietechniek@hotmail.com">landhuisinstallatietechniek@hotmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Landhuis Installatietechniek Hardenberg. Gecertificeerd installateur.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
