import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const BrickyardWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigation = [
    { name: 'home', page: 'home' },
    { name: 'about', page: 'about' },
    { name: 'portcos', page: 'portcos' },
    { name: 'faqs', page: 'faqs' },
    { name: 'the yard', page: 'yard' },
    { name: 'our type', page: 'ourtype' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }}>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#000000',
        borderBottom: '1px solid #111'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img
            src="/brickyard-logo.png"
            alt="Brickyard"
            style={{ height: '32px', cursor: 'pointer' }}
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
          />

          <div className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: '400',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  padding: 0,
                  fontFamily: 'inherit',
                  opacity: currentPage === item.page ? 1 : 0.65,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                onMouseOut={(e) => e.currentTarget.style.opacity = currentPage === item.page ? 1 : 0.65}
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
                fontWeight: '400',
                opacity: 0.65,
                transition: 'opacity 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.65}
            >
              merch
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{ borderTop: '1px solid #111', padding: '16px 40px' }}>
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => { setCurrentPage(item.page); setMobileMenuOpen(false); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '14px',
                  padding: '10px 0',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://www.bonfire.com/store/brickyard-merch/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                padding: '10px 0'
              }}
            >
              merch
            </a>
          </div>
        )}
      </nav>

      <main>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'portcos' && <PortcosPage />}
        {currentPage === 'faqs' && <FAQsPage />}
        {currentPage === 'yard' && <YardPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'ourtype' && <OurTypePage />}
      </main>

      <footer style={{
        borderTop: '1px solid #111',
        padding: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#555'
      }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none', border: 'none', color: '#555',
            fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit'
          }}
        >
          home
        </button>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-button { display: block !important; }
        }
        body { margin: 0; }
        .brickyard-enter-btn:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 24px'
    }}>
      <img
        src="/trough-of-sorrow.png"
        alt="Trough of Sorrow"
        style={{
          width: '100%',
          maxWidth: '720px',
          height: 'auto',
          marginBottom: '64px'
        }}
      />

      <p style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontStyle: 'italic',
        fontSize: '22px',
        color: '#e5e5e5',
        marginBottom: '56px',
        fontWeight: '300'
      }}>
        For the trough of sorrow.
      </p>

      <button
        onClick={() => setCurrentPage('about')}
        className="brickyard-enter-btn"
        style={{
          padding: '0.4em 1.1em',
          minHeight: '2.5em',
          background: '#fafafa',
          border: '1px solid #fafafa',
          borderRadius: '300px',
          color: '#000000',
          fontSize: '17px',
          fontWeight: '500',
          letterSpacing: '0.02em',
          cursor: 'pointer',
          fontFamily: 'inherit',
          lineHeight: 'normal',
          transition: 'opacity 0.1s linear'
        }}
      >
        enter
      </button>
    </div>
  );
};

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 32px' }}>
      <h1 style={{
        fontSize: '56px',
        fontWeight: '700',
        marginBottom: '16px',
        letterSpacing: '-0.02em',
        lineHeight: '1.1'
      }}>
        Burn the ships.
      </h1>

      <p style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontSize: '20px',
        color: '#999',
        marginBottom: '56px',
        fontWeight: '300'
      }}>
        A no-distraction black site for reaching product/market fit.
      </p>

      <p style={{
        fontSize: '17px',
        lineHeight: '1.7',
        color: '#d0d0d0',
        marginBottom: '40px'
      }}>
        Brickyard tends to stay under the radar and focused on our own thing, and we're drawn to a similar type of founder. Many of them seem to find us before we find them. Glad you're here.
      </p>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '40px 0',
        fontSize: '17px',
        lineHeight: '2',
        color: '#d0d0d0'
      }}>
        <li>— We're not an accelerator.</li>
        <li>— No programs, cohorts or demo day.</li>
        <li>— Thousands of teams from the U.S. and abroad apply.</li>
        <li>— We write about ten $500-$800k checks every year.</li>
        <li>— If we offer, teams move here until at least $1m+, or shutdown.</li>
        <li>— Market terms, no cost to be here.</li>
        <li>— Average team stays ~18 months.</li>
        <li>— 20-25 portcos build here together.</li>
        <li>— Everyone travels but we are in-person and extra full time.</li>
        <li>— Nothing to do w/ economic development.</li>
        <li>— Our portcos run this place. Brickyard partners are just useful accessories.</li>
        <li>— We aren't for everyone, and that's ok.</li>
      </ul>

      <p style={{
        fontSize: '17px',
        lineHeight: '1.7',
        color: '#d0d0d0',
        marginTop: '40px'
      }}>
        Please read through our FAQs. If it feels right, submit your deck. We'll reach out if we're interested in what you're building.
      </p>

      <div style={{ marginTop: '48px' }}>
        <button
          onClick={() => setCurrentPage('faqs')}
          style={{
            background: 'none',
            border: 'none',
            color: '#F7931E',
            fontSize: '17px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textDecoration: 'underline',
            padding: 0
          }}
        >
          1) Read our FAQs here
        </button>
      </div>
    </div>
  );
};

const PortcosPage = () => {
  const companies = [
    { num: 1, name: 'Waypoint', desc: 'email notification eng', date: '5.21', fund: 'Pilot Fund', url: 'https://www.usewaypoint.com/' },
    { num: 2, name: 'Repowr', desc: '#1 freight asset marketplace', date: '6.21', fund: 'Pilot Fund', url: 'https://repowr.com' },
    { num: 3, name: 'Joon', desc: 'behavioral game for adhd', date: '7.21', fund: 'Pilot Fund', url: 'https://www.joonapp.io/' },
    { num: 4, name: 'Brev', desc: '🧱 Acquired by NVIDIA', date: '8.21', fund: 'Pilot Fund', url: 'https://brev.dev/' },
    { num: 5, name: 'Barometer', desc: 'podcast ad unlock for big cos', date: '8.21', fund: 'Pilot Fund', url: 'https://www.thebarometer.co/landing' },
    { num: 6, name: 'Savvy', desc: 'agentic e-comm merchandising', date: '10.21', fund: 'Pilot Fund', url: 'https://www.savvysearch.ai/' },
    { num: 7, name: 'Ender', desc: '☠️', date: '11.21', fund: 'Pilot Fund', url: 'https://joinender.com/' },
    { num: 8, name: 'Krepling', desc: 'shopify for the mid market', date: '12.21', fund: 'Pilot Fund', url: 'https://www.krepling.com/' },
    { num: 9, name: 'Fluent', desc: '☠️', date: '1.22', fund: 'Pilot Fund', url: 'https://www.fluent.co/' },
    { num: 10, name: 'Rollfi', desc: '🧱 Acquired by PRTH', date: '2.22', fund: 'Pilot Fund', url: 'https://www.rollfi.xyz/' },
    { num: 11, name: 'Iron', desc: 'productizing the gym', date: '2.22', fund: 'Pilot Fund', url: 'https://ironapp.co' },
    { num: 12, name: 'Provision', desc: 'ai for pre-construction', date: '4.22', fund: 'Pilot Fund', url: 'https://www.provision.com/' },
    { num: 13, name: 'Coast', desc: 'sales demos for api-first cos', date: '5.22', fund: 'Pilot Fund', url: 'https://www.trycoast.com' },
    { num: 14, name: 'Shappi', desc: 'x-border e-commerce for latam', date: '6.22', fund: 'Pilot Fund', url: 'https://shappi.com/' },
    { num: 15, name: 'Lux Bio', desc: 'industrial bioluminescence', date: '9.22', fund: 'Pilot Fund', url: 'https://www.lux-bio.com' },

    { num: 16, name: 'DebtWise', desc: 'whitelabel debt mgmt tools', date: '10.22', fund: 'Fund I', url: 'https://www.debt-wise.com/' },
    { num: 17, name: 'Camlist', desc: '☠️', date: '11.22', fund: 'Fund I', url: 'https://camlist.com/' },
    { num: 18, name: '&who', desc: 'magical warm intros', date: '2.23', fund: 'Fund I', url: 'https://www.andwho.ai/' },
    { num: 19, name: 'Gumption', desc: 'CRE financing marketplace', date: '2.23', fund: 'Fund I', url: 'https://www.gumption.dev/' },
    { num: 20, name: 'Thread', desc: 'infrastructure for fintechs', date: '4.23', fund: 'Fund I', url: 'https://www.usethread.io/' },
    { num: 21, name: 'Sendspark', desc: '🧱 Acquired by Xenon', date: '5.23', fund: 'Fund I', url: 'https://www.sendspark.com' },
    { num: 22, name: 'Pledge', desc: '🧱 Acquired by Collectly', date: '6.23', fund: 'Fund I', url: 'https://www.pledge.health/' },
    { num: 23, name: 'Textla', desc: "twilio for low-tech co's", date: '6.23', fund: 'Fund I', url: 'https://www.textla.com/' },
    { num: 24, name: 'Allera', desc: 'OS for food manufacturers', date: '6.23', fund: 'Fund I', url: 'https://www.alleratech.com' },
    { num: 25, name: 'Roundtable', desc: 'proof-of-human api', date: '9.23', fund: 'Fund I', url: 'https://roundtable.ai' },
    { num: 26, name: 'Prosal', desc: 'RFPs on autopilot', date: '10.23', fund: 'Fund I', url: 'https://prosal.io' },
    { num: 27, name: 'Zest', desc: 'duolingo for cooking', date: '10.23', fund: 'Fund I', url: 'https://zestapp.co/' },
    { num: 28, name: 'Haven', desc: 'automate property mgmt', date: '11.23', fund: 'Fund I', url: 'https://www.usehaven.ai/' },
    { num: 29, name: 'Instafi', desc: 'brex for construction/lenders', date: '1.24', fund: 'Fund I', url: 'https://instafi.ai' },
    { num: 30, name: 'DIY Wrap Club', desc: 'vinyl revolution', date: '4.24', fund: 'Fund I', url: 'https://diywrapclub.com/' },
    { num: 31, name: 'Atelier Society', desc: '☠️', date: '5.24', fund: 'Fund I', url: 'https://ateliersociety.com/' },
    { num: 32, name: 'CrowdVolt', desc: 'live events infrastructure', date: '6.24', fund: 'Fund I', url: 'https://www.crowdvolt.com/app' },
    { num: 33, name: 'Carbon Origins', desc: 'heavy metal tele-op', date: '6.24', fund: 'Fund I', url: 'https://www.carbonorigins.com/' },
    { num: 34, name: 'SpotsNow', desc: 'ads manager for podcasts', date: '7.24', fund: 'Fund I', url: 'https://spotsnow.io/' },
    { num: 35, name: 'Talisman', desc: 'ai for accounting firms', date: '7.24', fund: 'Fund I', url: 'https://www.gettalisman.com/' },
    { num: 36, name: 'Sociable', desc: 'agentic social engagement', date: '8.24', fund: 'Fund I', url: 'https://www.sociable.how/' },
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

    { num: 54, name: 'Retina Robotics', desc: 'vision for warehouses', date: '4.26', fund: 'Fund II', url: 'https://retinarobotics.com/' },
    { num: 55, name: 'Unvale', desc: 'the creator platform for story development', date: '4.26', fund: 'Fund II', url: 'https://unvale.com/' },
    { num: 56, name: 'Hilt', desc: 'data movement governance', date: '5.26', fund: 'Fund II', url: 'https://hilt.com/' },
  ];

  const grouped = companies.reduce((acc, c) => {
    (acc[c.fund] = acc[c.fund] || []).push(c);
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 32px' }}>
      {Object.entries(grouped).map(([fund, list]) => (
        <div key={fund} style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#F7931E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '32px',
            paddingBottom: '12px',
            borderBottom: '1px solid #222'
          }}>
            {fund}
          </h2>

          {list.map((c) => (
            <a
              key={c.num}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                gap: '24px',
                padding: '14px 0',
                color: '#ffffff',
                textDecoration: 'none',
                borderBottom: '1px solid #111',
                alignItems: 'baseline',
                transition: 'background 0.15s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#0a0a0a'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ color: '#555', fontSize: '13px', fontVariantNumeric: 'tabular-nums' }}>
                {String(c.num).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '16px' }}>
                <span style={{ fontWeight: '600' }}>{c.name}</span>
                <span style={{ color: '#888', marginLeft: '12px', fontSize: '14px' }}>— {c.desc}</span>
              </span>
              <span style={{ color: '#555', fontSize: '13px', fontVariantNumeric: 'tabular-nums' }}>
                {c.date}
              </span>
            </a>
          ))}
        </div>
      ))}

      <div style={{
        marginTop: '80px',
        padding: '32px 0',
        borderTop: '1px solid #222',
        fontSize: '13px',
        color: '#666',
        textAlign: 'center',
        lineHeight: '1.8'
      }}>
        <p style={{ margin: '0 0 12px' }}>
          Hailing from: SFO, NYC, BOS, ATL, BHM, EWR, AUS, MLA, YVR, LHR, YUL, CHI, SAN, DXB, ATH, DFW, CHA, IND, MIA, LAX, RIC, YYZ, IAD, RDU, SLC, GUA, SNA, MSP, &amp; IAH.
        </p>
        <p style={{ margin: 0 }}>🧱 Acquired &nbsp;·&nbsp; ☠️ KIA</p>
      </div>
    </div>
  );
};

const FAQsPage = () => {
  const faqs = [
    { q: 'Are there any off-market or standard deal terms?', a: 'No. All deals are done on individual market terms, and there is no cost to be here if you get in.' },
    { q: 'What categories do you invest in?', a: "We're curious about almost everything right now. Obviously you must be building something with extraordinary potential, but we get far more excited about who we're investing in. We like junkyard dogs." },
    { q: 'Check Size?', a: 'Our avg check is $350k, but we sometimes invest as low as $100k or up to $500k.' },
    { q: 'Do you lead?', a: "Depends on the round, but yes we lead and can also follow. We don't lead priced rounds, but we're comfortable being the first check in, setting a cap, and leveraging our network to help close your round." },
    { q: 'Do all co-founders need to come together?', a: 'Yes, we deeply believe in the importance of co-founders building together in person.' },
    { q: 'What about the rest of the team?', a: 'Welcome and encouraged. Not required, but most of our teams do invite some/all early employees to join them here.' },
    { q: 'What do you mean by move?', a: 'Move to Chattanooga, work out of Brickyard, and leave everything on the field until reaching the revenue/ARR target you came here to hit. $1m in run rate is the minimum target, but this number is different for every team.' },
    { q: 'How long do teams stay in Brickyard?', a: 'On average, teams are here for 18-24 months but there is no time obligation— many teams stay well beyond $1m. There are no binding terms— the spirit of Brickyard is a forcing function.' },
    { q: "How do Brickyard Partners engage with teams while we're here?", a: 'All five Brickyard GPs are founder/operators w/ exits and we\'re here every day we are in town. We are not an accelerator, so have no programming or standing meetings, but we are available 24/7 and become very close with all our teams. We prefer to stay out of strategy entirely, and focus on tactical stuff when our founders want it.' },
    { q: 'What does the off-ramp look like?', a: "When a team hits their target and is ready to move out, we help with the transition. If a team is kicking off a new raise, we make introductions to relevant VCs, alums, and other founders who can help. If you're moving to another city to be near customers or talent, we will exhaust our contacts for intros." },
    { q: 'Do you take international teams?', a: 'Yes, but Visas must allow for at least 1 year unbroken in the US to be considered. VISAs (01s or comparable are preferred) must be completed or near completion before we can consider an application.' },
    { q: 'If we get into YC while in Brickyard, can we go through their program?', a: "Yes. We've invested in many teams both pre and post YC. We can help with subleasing housing while in the batch, and allow for teams move back in afterwards." },
    { q: 'How many teams work in the Yard daily?', a: "+/- 20 teams at a time. We have a revolving door, and most of our teams who roll out come back often for executive off-sites / deep work. Once you are in Brickyard, you're in for life!" },
    { q: 'Do you have to be in the portfolio (or a guest of a portco) to be in Brickyard?', a: 'Yes, it is fully private to our portcos only. We are not open to the public, but our teams bring in other founders and teams all the time.' },
    { q: 'Is it open 24/7?', a: 'Yes, all members have FOB access to our facilities around the clock.' },
    { q: "What's The Yard like?", a: 'A 100 year old Persian rug warehouse building with 11 call-boxes, 7 private breakout rooms, large conference room, gym, showers, steam, sauna, ice bath, coffee, snacks/emergency food, 12,000 sq/ft of workspace, pickleball court, and rooftop + pool.' },
    { q: 'What do you have in the gym?', a: '3x / week group personal trainer, squat racks, benches, rings, dumbbells, kettlebells, rowing machine, stair-master, peloton treadmill & bike, pull up bars, box jump, ropes, heavy-bag, speed-bag, sauna, steam room, cold plunge, etc.' },
    { q: 'Where do founders live?', a: 'Apartments, houses or in Brickhouse— our 11 bedroom furnished founder house that\'s move-in ready.' },
    { q: 'How does the founder carry work?', a: 'Ownership in the GP is vested/granted after founders are here for 1 year. Every founder we back has upside in every other company in their active fund.' },
    { q: 'Why would you do that?', a: 'We want our founders to have upside in each other, and have some monetary incentive to refer us the very best.' },
    { q: 'Are there cohorts?', a: 'No, we invest in new teams on a rolling basis, and prefer they be here within 60 days post-investment.' },
    { q: 'What are the rules?', a: 'No rules, just a commitment to put in the work.' },
    { q: 'Why Chattanooga, TN?', a: "It's away from the noise and fairly inconvenient for almost all our teams (feature not a bug!), which filters out founders who aren't in it for the right reasons. CHA is one of the world's truly special places though." },
    { q: 'Does this have anything to do with economic development?', a: "No. We're not trying to build our startup ecosystem or recruit you to HQ here. It's just about founders going faster." },
    { q: 'How selective are you?', a: 'We reviewed 7,000+ decks last year, and invested in 12. We typically invest in 10-12 new companies/yr.' },
    { q: "What's your process like?", a: 'Standard diligence (usually 2-3 weeks back and forth although sometimes faster), background checks, reference checks, portfolio back-channeling, and an in-person final partner meeting where we fly you in & cover costs. This is as much about you getting to experience Brickyard in person and meet all the founders in the space before deciding if you want to be here. A pass, or term sheet is typically given that same day.' }
  ];

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 32px' }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '64px',
        letterSpacing: '-0.01em'
      }}>
        Please read all of this before applying.
      </h1>

      <div>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '17px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>
              {f.q}
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#bbbbbb',
              margin: 0
            }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const YardPage = ({ setCurrentPage }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 32px' }}>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontSize: '22px',
        color: '#e5e5e5',
        marginBottom: '56px',
        textAlign: 'center',
        fontWeight: '300'
      }}>
        12,000 sq/ft Persian rug warehouse, designed around focused execution.
      </p>

      <div style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#bbbbbb'
      }}>
        <p style={{ marginBottom: '32px' }}>
          11 call-boxes · 7 private breakout rooms · large conference room · full gym with 3x/week group trainer · sauna · steam room · ice bath · showers · pickleball court · rooftop + pool · coffee · snacks/emergency food · 24/7 FOB access.
        </p>

        <p style={{ marginBottom: '32px' }}>
          <strong style={{ color: '#fff' }}>Brickhouse</strong> — our 11-bedroom furnished founder house, move-in ready.
        </p>

        <p style={{ textAlign: 'center', marginTop: '64px' }}>
          <button
            onClick={() => setCurrentPage('portcos')}
            style={{
              background: 'none', border: 'none',
              color: '#F7931E', fontSize: '17px',
              cursor: 'pointer', textDecoration: 'underline',
              fontFamily: 'inherit', padding: 0
            }}
          >
            the portcos →
          </button>
        </p>
      </div>
    </div>
  );
};

const OurTypePage = () => {
  const traits = [
    'Highly opinionated',
    'Non-obvious vision',
    'High agency',
    'Heads down',
    'Junkyard grit',
    'Delusional optimism',
    'No vanity',
    'Learning machines',
    'CEO can sell',
    '9-9-6',
    'Hate to lose',
    'Leeroy Jenkins',
  ];

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 32px' }}>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: '80px'
      }}>
        {traits.map((t, i) => (
          <li key={i} style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#ffffff',
            padding: '18px 0',
            borderBottom: '1px solid #1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            {t}
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontSize: '20px',
          color: '#bbbbbb',
          marginBottom: '8px',
          fontWeight: '300'
        }}>
          Growth rounds are about working smart.
        </p>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontSize: '20px',
          color: '#F7931E',
          margin: 0,
          fontWeight: '300'
        }}>
          The Series A is willed into existence.
        </p>
      </div>
    </div>
  );
};

export default BrickyardWebsite;
