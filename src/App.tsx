import { Phone, Mail, MapPin, Wrench, Thermometer, Fan, Zap } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="coming-soon">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.svg" alt="Landhuis Installatietechniek Logo" className="logo-img" />
            <span className="logo-text">
              <span className="logo-name">Landhuis</span>
              <span className="logo-sub">Installatietechniek</span>
            </span>
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
              Vakkundig <span className="text-accent">Installatiebedrijf</span> <br />
              in Hardenberg.
            </h1>
            <p className="hero-description">
              Landhuis Installatietechniek is uw gecertificeerde <strong>installateur</strong> gespecialiseerd in <strong>warmtepomp installatie</strong>, <strong>airconditioning</strong> en <strong>elektrotechniek</strong>. Wij realiseren duurzame installaties voor woning en bedrijf in regio Hardenberg, Coevorden en Emmen.
            </p>
            
            <div className="cta-group">
              <a href="tel:0636499203" className="btn btn-primary" aria-label="Bel ons installatiebedrijf">
                <Phone size={18} />
                06 - 36 49 92 03
              </a>
              <a href="https://wa.me/31636499203" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Stuur een WhatsApp bericht naar onze installateur">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </section>

          <section className="services-grid" aria-label="Onze Diensten">
            <div className="service-card">
              <div className="service-icon"><Thermometer size={28} aria-hidden="true" /></div>
              <h2>Warmtepomp Installatie</h2>
              <p>Duurzame verwarming en koeling door uw erkende installateur.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Fan size={28} aria-hidden="true" /></div>
              <h2>Airconditioning</h2>
              <p>Vakkundige installatie van airco systemen voor optimaal comfort.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Zap size={28} aria-hidden="true" /></div>
              <h2>Elektrotechniek</h2>
              <p>Gecertificeerde elektrotechnische installaties en onderhoud.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Wrench size={28} aria-hidden="true" /></div>
              <h2>Loodgieter</h2>
              <p>Uw installatiebedrijf voor sanitair, water- en afvoerleidingen.</p>
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
