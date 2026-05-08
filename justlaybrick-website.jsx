import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

const BrickyardWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', page: 'home' },
    { name: 'ABOUT', page: 'about' },
    { name: 'PORTCOS', page: 'portcos' },
    { name: 'FAQS', page: 'faqs' },
    { name: 'THE YARD', page: 'yard' },
    { name: 'OUR TYPE', page: 'ourtype' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1a1a1a' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <img 
            src="brickyard-logo.png" 
            alt="Brickyard" 
            style={{
              height: '40px',
              cursor: 'pointer'
            }}
            onClick={() => {
              setCurrentPage('home');
              setMobileMenuOpen(false);
            }}
          />

          {/* Desktop Nav */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}
          className="desktop-nav">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentPage === item.page ? '#F7931E' : '#ffffff',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  transition: 'color 0.2s ease',
                  padding: 0
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#F7931E'}
                onMouseOut={(e) => e.currentTarget.style.color = currentPage === item.page ? '#F7931E' : '#ffffff'}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://www.bonfire.com/store/brickyard-merch/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#F7931E'}
              onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              MERCH
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '8px'
            }}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#000000',
            borderTop: '1px solid #1a1a1a',
            padding: '20px'
          }}
          className="mobile-menu">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: currentPage === item.page ? '#F7931E' : '#ffffff',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  padding: '12px 0',
                  textAlign: 'left'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div style={{ paddingTop: '80px' }}>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'portcos' && <PortcosPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'faqs' && <FAQsPage />}
        {currentPage === 'yard' && <YardPage />}
        {currentPage === 'ourtype' && <OurTypePage />}
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(247, 147, 30, 0.1) 0%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <img 
          src="brickyard-logo.png" 
          alt="Brickyard" 
          style={{
            width: '100%',
            maxWidth: '700px',
            height: 'auto',
            marginBottom: '60px'
          }}
        />

        <h2 style={{
          fontSize: '32px',
          fontWeight: '300',
          marginBottom: '60px',
          color: '#cccccc',
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
          lineHeight: '1.6'
        }}>
          For the trough of sorrow.
        </h2>

        <button
          onClick={() => setCurrentPage('about')}
          style={{
            padding: '16px 48px',
            background: '#F7931E',
            border: 'none',
            color: '#000000',
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(247, 147, 30, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(247, 147, 30, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(247, 147, 30, 0.3)';
          }}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '900',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em'
      }}>
        Burn the ships.
      </h1>

      <p style={{
        fontSize: '24px',
        color: '#F7931E',
        marginBottom: '60px',
        fontStyle: 'italic',
        fontFamily: 'Georgia, serif'
      }}>
        A no-distraction black site for reaching product/market fit.
      </p>

      <div style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#cccccc',
        marginBottom: '60px'
      }}>
        <p style={{ marginBottom: '30px' }}>
          Brickyard tends to stay under the radar and focused on our own thing, and we're drawn to a similar type of founder. Many of them seem to find us before we find them. Glad you're here.
        </p>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '40px 0',
          borderLeft: '3px solid #F7931E',
          paddingLeft: '30px'
        }}>
          <li style={{ marginBottom: '15px' }}>• We're not an accelerator.</li>
          <li style={{ marginBottom: '15px' }}>• No programs, cohorts or demo day.</li>
          <li style={{ marginBottom: '15px' }}>• Thousands of teams from the U.S. and abroad apply.</li>
          <li style={{ marginBottom: '15px' }}>• We write about ten $500-$800k checks every year.</li>
          <li style={{ marginBottom: '15px' }}>• If we offer, teams move here until at least $1m+, or shutdown.</li>
          <li style={{ marginBottom: '15px' }}>• Market terms, no cost to be here.</li>
          <li style={{ marginBottom: '15px' }}>• Average team stays ~18 months</li>
          <li style={{ marginBottom: '15px' }}>• 20-25 portcos build here together.</li>
          <li style={{ marginBottom: '15px' }}>• Everyone travels but we are in-person and extra full time.</li>
          <li style={{ marginBottom: '15px' }}>• Nothing to do w/ economic development.</li>
          <li style={{ marginBottom: '15px' }}>• Our portcos run this place. Brickyard partners are just useful accessories.</li>
          <li style={{ marginBottom: '15px' }}>• We aren't for everyone, and that's ok.</li>
        </ul>

        <p style={{ marginTop: '40px' }}>
          Please read through our FAQs. If it feels right, submit your deck. We'll reach out if we're interested in what you're building.
        </p>
      </div>

      <button
        onClick={() => setCurrentPage('faqs')}
        style={{
          padding: '14px 40px',
          background: 'transparent',
          border: '2px solid #F7931E',
          color: '#F7931E',
          fontSize: '13px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#F7931E';
          e.currentTarget.style.color = '#000000';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#F7931E';
        }}
      >
        Read our FAQs
      </button>
    </div>
  );
};

const PortcosPage = ({ setCurrentPage }) => {
  const companies = [
    // Pilot Fund
    { num: 1, name: 'Waypoint', desc: 'email notification eng', date: '5.21', fund: 'Pilot', url: 'https://www.usewaypoint.com/' },
    { num: 2, name: 'Repowr', desc: '#1 freight asset marketplace', date: '6.21', fund: 'Pilot', url: 'https://repowr.com' },
    { num: 3, name: 'Joon', desc: 'behavioral game for adhd', date: '7.21', fund: 'Pilot', url: 'https://www.joonapp.io/' },
    { num: 4, name: 'Brev', desc: '🧱 Acquired by NVIDIA', date: '8.21', fund: 'Pilot', url: 'https://brev.dev/', acquired: true },
    { num: 5, name: 'Barometer', desc: 'podcast ad unlock for big cos', date: '8.21', fund: 'Pilot', url: 'https://www.thebarometer.co/landing' },
    { num: 6, name: 'Savvy', desc: 'agentic e-comm merchandising', date: '10.21', fund: 'Pilot', url: 'https://www.savvysearch.ai/' },
    { num: 7, name: 'Ender', desc: '☠️', date: '11.21', fund: 'Pilot', url: 'https://joinender.com/', dead: true },
    { num: 8, name: 'Krepling', desc: 'shopify for the mid market', date: '12.21', fund: 'Pilot', url: 'https://www.krepling.com/' },
    { num: 9, name: 'Fluent', desc: '☠️', date: '1.22', fund: 'Pilot', url: 'https://www.fluent.co/', dead: true },
    { num: 10, name: 'Rollfi', desc: '🧱 Acquired by PRTH', date: '2.22', fund: 'Pilot', url: 'https://www.rollfi.xyz/', acquired: true },
    { num: 11, name: 'Iron', desc: 'productizing the gym', date: '2.22', fund: 'Pilot', url: 'https://ironapp.co' },
    { num: 12, name: 'Provision', desc: 'ai for pre-construction', date: '4.22', fund: 'Pilot', url: 'https://www.provision.com/' },
    { num: 13, name: 'Coast', desc: 'sales demos for api-first cos', date: '5.22', fund: 'Pilot', url: 'https://www.trycoast.com' },
    { num: 14, name: 'Shappi', desc: 'x-border e-commerce for latam', date: '6.22', fund: 'Pilot', url: 'https://shappi.com/' },
    { num: 15, name: 'Lux Bio', desc: 'industrial bioluminescence', date: '9.22', fund: 'Pilot', url: 'https://www.lux-bio.com' },

    // Fund I
    { num: 16, name: 'DebtWise', desc: 'whitelabel debt mgmt tools', date: '10.22', fund: 'Fund I', url: 'https://www.debt-wise.com/' },
    { num: 17, name: 'Camlist', desc: '☠️', date: '11.22', fund: 'Fund I', url: 'https://camlist.com/', dead: true },
    { num: 18, name: '&who', desc: 'magical warm intros', date: '2.23', fund: 'Fund I', url: 'https://www.andwho.ai/' },
    { num: 19, name: 'Gumption', desc: 'CRE financing marketplace', date: '2.23', fund: 'Fund I', url: 'https://www.gumption.dev/' },
    { num: 20, name: 'Thread', desc: 'infrastructure for fintechs', date: '4.23', fund: 'Fund I', url: 'https://www.usethread.io/' },
    { num: 21, name: 'Sendspark', desc: '🧱 Acquired by Xenon', date: '5.23', fund: 'Fund I', url: 'https://www.sendspark.com', acquired: true },
    { num: 22, name: 'Pledge', desc: '🧱 Acquired by Collectly', date: '6.23', fund: 'Fund I', url: 'https://www.pledge.health/', acquired: true },
    { num: 23, name: 'Textla', desc: "twilio for low-tech co's", date: '6.23', fund: 'Fund I', url: 'https://www.textla.com/' },
    { num: 24, name: 'Allera', desc: 'OS for food manufacturers', date: '6.23', fund: 'Fund I', url: 'https://www.alleratech.com' },
    { num: 25, name: 'Roundtable', desc: 'proof-of-human api', date: '9.23', fund: 'Fund I', url: 'https://roundtable.ai' },
    { num: 26, name: 'Prosal', desc: 'RFPs on autopilot', date: '10.23', fund: 'Fund I', url: 'https://prosal.io' },
    { num: 27, name: 'Zest', desc: 'duolingo for cooking', date: '10.23', fund: 'Fund I', url: 'https://zestapp.co/' },
    { num: 28, name: 'Haven', desc: 'automate property mgmt', date: '11.23', fund: 'Fund I', url: 'https://www.usehaven.ai/' },
    { num: 29, name: 'Instafi', desc: 'brex for construction/lenders', date: '1.24', fund: 'Fund I', url: 'https://instafi.ai' },
    { num: 30, name: 'DIY Wrap Club', desc: 'vinyl revolution', date: '4.24', fund: 'Fund I', url: 'https://diywrapclub.com/' },
    { num: 31, name: 'Atelier Society', desc: '☠️', date: '5.24', fund: 'Fund I', url: 'https://ateliersociety.com/', dead: true },
    { num: 32, name: 'CrowdVolt', desc: 'live events infrastructure', date: '6.24', fund: 'Fund I', url: 'https://www.crowdvolt.com/app' },
    { num: 33, name: 'Carbon Origins', desc: 'heavy metal tele-op', date: '6.24', fund: 'Fund I', url: 'https://www.carbonorigins.com/' },
    { num: 34, name: 'SpotsNow', desc: 'ads manager for podcasts', date: '7.24', fund: 'Fund I', url: 'https://spotsnow.io/' },
    { num: 35, name: 'Talisman', desc: 'ai for accounting firms', date: '7.24', fund: 'Fund I', url: 'https://www.gettalisman.com/' },
    { num: 36, name: 'Sociable', desc: 'agentic social engagement', date: '8.24', fund: 'Fund I', url: 'https://www.sociable.how/?location=US' },
    { num: 37, name: 'Askari', desc: "the warfighter's defensive drones", date: '8.24', fund: 'Fund I', url: 'https://askaridefense.com/' },
    { num: 38, name: 'Goliath Data', desc: 'off market RE at scale', date: '9.24', fund: 'Fund I', url: 'https://goliathdata.ai/' },
    { num: 39, name: 'MenuData', desc: 'ai for F&B insights', date: '11.24', fund: 'Fund I', url: 'https://www.menudata.ai/' },
    { num: 40, name: 'Clockout', desc: 'EWA for banks', date: '12.24', fund: 'Fund I', url: 'https://www.joinclockout.com/' },
    { num: 41, name: 'Warrant', desc: 'SoR for marketing compliance', date: '1.25', fund: 'Fund I', url: 'https://www.hellowarrant.com/' },
    { num: 42, name: 'Electrokare', desc: 'continuous non-invasive blood tracking', date: '2.25', fund: 'Fund I', url: 'https://www.electrokare.com/' },
    { num: 43, name: 'Plaza', desc: 'future of RE asset management', date: '4.25', fund: 'Fund I', url: 'https://www.getplaza.ai/' },
    { num: 44, name: 'Harmony', desc: 'ai for manufacturers', date: '4.25', fund: 'Fund I', url: 'https://www.tryharmony.ai/' },
    { num: 45, name: 'Scaylor', desc: 'unification of enterprise data', date: '6.25', fund: 'Fund I', url: 'https://www.scaylor.com/' },
    { num: 46, name: 'Cultra', desc: 'ai data analytics for farms', date: '7.25', fund: 'Fund I', url: 'https://www.cultra.us/' },
    { num: 47, name: 'Kunin', desc: 'mining periodic elements', date: '8.25', fund: 'Fund I', url: 'https://kunin.tech/' },
    { num: 48, name: 'Dimension Labs', desc: 'unstructured data intel', date: '9.25', fund: 'Fund I', url: 'https://www.dimensionlabs.io/' },
    { num: 49, name: 'Costream', desc: 'indexing human dialogue', date: '10.25', fund: 'Fund I', url: 'https://www.costream.ai/' },
    { num: 50, name: 'Memvid', desc: 'memory infra for edge ai', date: '10.25', fund: 'Fund I', url: 'https://www.memvid.com/' },
    { num: 51, name: 'Vamo', desc: 'coldchain delivery & logistics', date: '10.25', fund: 'Fund I', url: 'https://www.vamodelivery.com/' },
    { num: 52, name: 'SpatialGen', desc: 'AWS for spatial data', date: '11.25', fund: 'Fund I', url: 'https://spatialgen.com/' },
    { num: 53, name: 'Brick', desc: 'autonomous energy savings', date: '2.26', fund: 'Fund I', url: 'http://brick-data.com/' },

    // Fund II
    { num: 54, name: 'Retina Robotics', desc: 'vision for warehouses', date: '4.26', fund: 'Fund II', url: 'https://retinarobotics.com/' },
  ];

  let currentFund = '';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2px',
        background: '#1a1a1a',
        border: '2px solid #F7931E',
        marginBottom: '60px'
      }}>
        {companies.map((company) => {
          const showFundHeader = company.fund !== currentFund;
          currentFund = company.fund;

          return (
            <React.Fragment key={company.num}>
              {showFundHeader && (
                <div style={{
                  gridColumn: '1 / -1',
                  background: '#F7931E',
                  padding: '16px 24px',
                  color: '#000000',
                  fontWeight: '900',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  {company.fund}
                </div>
              )}
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#000000',
                  padding: '20px 24px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  display: 'block',
                  transition: 'all 0.2s ease',
                  borderLeft: company.acquired ? '3px solid #F7931E' : company.dead ? '3px solid #666666' : '3px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#0a0a0a';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#000000';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    color: '#666666',
                    fontWeight: '700',
                    letterSpacing: '0.1em'
                  }}>
                    {company.num}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#666666',
                    fontWeight: '700'
                  }}>
                    {company.date}
                  </span>
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em'
                }}>
                  {company.name}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#999999',
                  lineHeight: '1.5'
                }}>
                  {company.desc}
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>

      <div style={{
        background: '#0a0a0a',
        border: '1px solid #1a1a1a',
        padding: '40px',
        marginBottom: '60px',
        fontSize: '14px',
        color: '#999999',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          Hailing from: SFO, NYC, BOS, ATL, BHM, EWR, AUS, MLA, YVR, LHR, YUL, CHI, SAN, DXB, ATH, DFW, CHA, IND, MIA, LAX, RIC, YYZ, IAD, RDU, SLC, GUA, SNA, MSP, & IAH.
        </p>
        <p style={{ marginTop: '20px', fontSize: '12px' }}>
          🧱 - Acquired  |  ☠️ - KIA
        </p>
      </div>

      <QuoteSection setCurrentPage={setCurrentPage} />
    </div>
  );
};

const QuoteSection = ({ setCurrentPage }) => {
  const quotes = [
    "Brickyard is like the Bermuda Triangle. Teams who get in disappear here to do nothing but work. 100 hour weeks are the bar.",
    "A pressure cooker for finding PMF. When you go there as a team, anyone still on the fence will end up leaving, and the core team is revealed.",
    "None of us moved here for the nightlife. We came here to leave it all on the field.",
    "Brickyard founders are a different type. Everyone here has put their life on hold to give everything to their company.",
    "Brickyard is a simple idea taken very seriously: success is more likely with sustained focus & intensity. It's a dojo built around community and competitive drive. Rocky would be a Yard founder.",
    "It's not an accelerator. I don't know what to call it, but you can't understand it unless you're a Brickyard founder.",
    "We needed to divorce ourselves from the distracting elements of startup life that don't move the needle. It is not possible to do this more effectively than at Brickyard.",
    "Being around other Brickyard founders every day and night, who get to know you deeply, understand the pain, celebrate with you, and push you harder…",
    "Brickyard puts you in a trance. There is some kind of productivity multiplier here. We all talk about it. When we travel for work, we all feel it. You get less done.",
    "Proximity is one of the biggest game changers at Brickyard. Instead of a-sync advice from out-of-touch VCs, you walk 10 feet to ask real operators with no hesitation… the real questions. The partners have your back."
  ];

  return (
    <div>
      <h3 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '40px',
        color: '#F7931E',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        But first, a word from our founders:
      </h3>

      <div style={{
        display: 'grid',
        gap: '30px'
      }}>
        {quotes.map((quote, index) => (
          <blockquote
            key={index}
            style={{
              margin: 0,
              padding: '24px 32px',
              background: '#0a0a0a',
              borderLeft: '3px solid #F7931E',
              fontSize: '16px',
              fontStyle: 'italic',
              lineHeight: '1.7',
              color: '#cccccc',
              fontFamily: 'Georgia, serif'
            }}
          >
            "{quote}"
          </blockquote>
        ))}
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <button
          onClick={() => setCurrentPage('faqs')}
          style={{
            padding: '14px 40px',
            background: 'transparent',
            border: '2px solid #F7931E',
            color: '#F7931E',
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#F7931E';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#F7931E';
          }}
        >
          Read FAQs
        </button>
      </div>
    </div>
  );
};

const FAQsPage = () => {
  const faqs = [
    {
      q: "Are there any off-market or standard deal terms?",
      a: "No. All deals are done on individual market terms, and there is no cost to be here if you get in."
    },
    {
      q: "What categories do you invest in?",
      a: "We're curious about almost everything right now. Obviously you must be building something with extraordinary potential, but we get far more excited about *who* we're investing in. We like junkyard dogs."
    },
    {
      q: "Check Size?",
      a: "Our avg check is $350k, but we sometimes invest as low as $100k or up to $500k."
    },
    {
      q: "Do you lead?",
      a: "Depends on the round, but yes we lead and can also follow. We don't lead priced rounds, but we're comfortable being the first check in, setting a cap, and leveraging our network to help close your round."
    },
    {
      q: "Do all co-founders need to come together?",
      a: "Yes, we deeply believe in the importance of co-founders building together in person."
    },
    {
      q: "What about the rest of the team?",
      a: "Welcome and encouraged. Not required, but most of our teams do invite some/all early employees to join them here."
    },
    {
      q: "What do you mean by move?",
      a: "Move to Chattanooga, work out of Brickyard, and leave everything on the field until reaching the revenue/ARR target you came here to hit. $1m in **run rate** is the minimum target, but this number is different for every team."
    },
    {
      q: "How long do teams stay in Brickyard?",
      a: "On average, teams are here for 18-24 months but there is no time obligation— many teams stay well beyond $1m. There are no binding terms— the spirit of Brickyard is a forcing function."
    },
    {
      q: "How do Brickyard Partners engage with teams while we're here?",
      a: "All five Brickyard GPs are founder/operators w/ exits and we're here every day we are in town. We are not an accelerator, so have no programming or standing meetings, but we are available 24/7 and become very close with all our teams. We prefer to stay out of strategy entirely, and focus on tactical stuff when our founders want it."
    },
    {
      q: "What does the off-ramp look like?",
      a: "When a team hits their target and is ready to move out, we help with the transition. If a team is kicking off a new raise, we make introductions to relevant VCs, alums, and other founders who can help. If you're moving to another city to be near customers or talent, we will exhaust our contacts for intros."
    },
    {
      q: "Do you take international teams?",
      a: "Yes, but Visas must allow for at least 1 year unbroken in the US to be considered. VISAs (01s or comparable are preferred) must be completed or near completion before we can consider an application."
    },
    {
      q: "If we get into YC while in Brickyard, can we go through their program?",
      a: "Yes. We've invested in many teams both pre and post YC. We can help with subleasing housing while in the batch, and allow for teams move back in afterwards."
    },
    {
      q: "How many teams work in the Yard daily?",
      a: "+/- 20 teams at a time. We have a revolving door, and most of our teams who roll out come back often for executive off-sites / deep work. Once you are in Brickyard, you're in for life!"
    },
    {
      q: "Do you have to be in the portfolio (or a guest of a portco) to be in Brickyard?",
      a: "Yes, it is fully private to our portcos only. We are not open to the public, but our teams bring in other founders and teams all the time."
    },
    {
      q: "Is it open 24/7?",
      a: "Yes, all members have FOB access to our facilities around the clock."
    },
    {
      q: "What's The Yard like?",
      a: "A 100 year old Persian rug warehouse building with 11 call-boxes, 7 private breakout rooms, large conference room, gym, showers, steam, sauna, ice bath, coffee, snacks/emergency food, 12,000 sq/ft of workspace, pickleball court, and rooftop + pool."
    },
    {
      q: "What do you have in the gym?",
      a: "3x / week group personal trainer, squat racks, benches, rings, dumbbells, kettlebells, rowing machine, stair-master, peloton treadmill & bike, pull up bars, box jump, ropes, heavy-bag, speed-bag, sauna, steam room, cold plunge, etc."
    },
    {
      q: "Where do founders live?",
      a: "Apartments, houses or in Brickhouse— our 11 bedroom furnished founder house that's move-in ready."
    },
    {
      q: "How does the founder carry work?",
      a: "Ownership in the GP is vested/granted after founders are here for 1 year. Every founder we back has upside in every other company in their active fund."
    },
    {
      q: "Why would you do that?",
      a: "We want our founders to have upside in each other, and have some monetary incentive to refer us the very best."
    },
    {
      q: "Are there cohorts?",
      a: "No, we invest in new teams on a rolling basis, and prefer they be here within 60 days post-investment."
    },
    {
      q: "What are the rules?",
      a: "No rules, just a commitment to put in the work."
    },
    {
      q: "Why Chattanooga, TN?",
      a: "It's away from the noise and fairly inconvenient for almost all our teams (feature not a bug!), which filters out founders who aren't in it for the right reasons. CHA is one of the world's truly special places though."
    },
    {
      q: "Does this have anything to do with economic development?",
      a: "No. We're not trying to build our startup ecosystem or recruit you to HQ here. It's just about founders going faster."
    },
    {
      q: "How selective are you?",
      a: "We reviewed 7,000+ decks last year, and invested in 12. We typically invest in 10-12 new companies/yr."
    },
    {
      q: "What's your process like?",
      a: "Standard diligence (usually 2-3 weeks back and forth although sometimes faster), background checks, reference checks, portfolio back-channeling, and an in-person final partner meeting where we fly you in & cover costs. This is as much about you getting to experience Brickyard in person and meet all the founders in the space before deciding if you want to be here. A pass, or term sheet is typically given that same day."
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '20px',
        color: '#F7931E',
        textTransform: 'uppercase'
      }}>
        Please read all of this before applying.
      </h1>

      <div style={{ marginTop: '60px' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '40px',
              paddingBottom: '40px',
              borderBottom: index < faqs.length - 1 ? '1px solid #1a1a1a' : 'none'
            }}
          >
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              {faq.q}
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#cccccc',
              margin: 0
            }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const YardPage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px' }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '900',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em'
      }}>
        The Yard
      </h1>

      <p style={{
        fontSize: '20px',
        color: '#F7931E',
        marginBottom: '60px',
        fontStyle: 'italic',
        fontFamily: 'Georgia, serif'
      }}>
        12,000 sq/ft of focused execution.
      </p>

      <div style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#cccccc'
      }}>
        <p style={{ marginBottom: '30px' }}>
          A 100-year-old Persian rug warehouse converted into the ultimate environment for reaching product-market fit. Nothing about The Yard is accidental—every detail is designed to remove friction and maximize focus.
        </p>

        <div style={{
          background: '#0a0a0a',
          border: '2px solid #F7931E',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#F7931E',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Facilities
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            <li>• 12,000 sq/ft workspace</li>
            <li>• 11 call-boxes</li>
            <li>• 7 private breakout rooms</li>
            <li>• Large conference room</li>
            <li>• Full gym with trainer</li>
            <li>• Sauna & steam room</li>
            <li>• Ice bath</li>
            <li>• Showers</li>
            <li>• Pickleball court</li>
            <li>• Rooftop + pool</li>
            <li>• Coffee & emergency food</li>
            <li>• 24/7 FOB access</li>
          </ul>
        </div>

        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            The Gym
          </h3>
          <p style={{ marginBottom: '20px', color: '#999999' }}>
            Group personal trainer 3x/week. Full equipment including:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            color: '#999999'
          }}>
            <li>• Squat racks</li>
            <li>• Benches & dumbbells</li>
            <li>• Rings & kettlebells</li>
            <li>• Rowing machine</li>
            <li>• Stair-master</li>
            <li>• Peloton tread & bike</li>
            <li>• Pull up bars</li>
            <li>• Box jump & ropes</li>
            <li>• Heavy-bag & speed-bag</li>
          </ul>
        </div>

        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          padding: '40px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Brickhouse
          </h3>
          <p style={{ color: '#999999', margin: 0 }}>
            Our 11-bedroom furnished founder house. Move-in ready for teams who want to be fully immersed from day one.
          </p>
        </div>
      </div>
    </div>
  );
};

const OurTypePage = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '900',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em'
      }}>
        Our Type
      </h1>

      <p style={{
        fontSize: '20px',
        color: '#F7931E',
        marginBottom: '60px',
        fontStyle: 'italic',
        fontFamily: 'Georgia, serif'
      }}>
        We invest in junkyard dogs.
      </p>

      <div style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#cccccc'
      }}>
        <p style={{ marginBottom: '40px' }}>
          Brickyard isn't for everyone. We're looking for a specific type of founder—one who's willing to burn the ships and go all-in.
        </p>

        <div style={{
          display: 'grid',
          gap: '30px',
          marginBottom: '60px'
        }}>
          <TraitCard 
            title="All-in"
            description="Burn the ships. You're not keeping one foot in your old life. Moving to Chattanooga isn't a trial—it's a commitment to focus."
          />
          <TraitCard 
            title="Possessed"
            description="Only one thing on your mind. You eat, sleep, and breathe your company. Nothing else matters until you hit PMF."
          />
          <TraitCard 
            title="Capital Efficient"
            description="Lean and mean until product-market fit. You know how to do more with less, and you're scrappy as hell."
          />
          <TraitCard 
            title="Competitive"
            description="Keep-up or leave culture. You thrive in competition. Being surrounded by other intense founders pushes you harder."
          />
          <TraitCard 
            title="Competent"
            description="Technical and complete co-founding teams. You can build what you're selling, and your team is battle-tested."
          />
          <TraitCard 
            title="High Agency"
            description="No hand-holding. You figure shit out. You don't wait for permission or instructions—you execute."
          />
          <TraitCard 
            title="Non-consensus"
            description="We attract counter-culture founders. You're building something people don't understand yet. You're comfortable being contrarian."
          />
          <TraitCard 
            title="It-Factor"
            description="Would die before giving up. This isn't a side project or a resume builder. This is your life's work, and failure isn't an option."
          />
        </div>

        <div style={{
          background: '#0a0a0a',
          border: '2px solid #F7931E',
          padding: '40px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#F7931E',
            margin: 0,
            lineHeight: '1.6'
          }}>
            If this resonates, we want to meet you. If it sounds insane, Brickyard probably isn't for you—and that's ok.
          </p>
        </div>
      </div>
    </div>
  );
};

const TraitCard = ({ title, description }) => {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid #1a1a1a',
      borderLeft: '3px solid #F7931E',
      padding: '28px 32px',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '15px',
        color: '#999999',
        margin: 0,
        lineHeight: '1.7'
      }}>
        {description}
      </p>
    </div>
  );
};

export default BrickyardWebsite;
